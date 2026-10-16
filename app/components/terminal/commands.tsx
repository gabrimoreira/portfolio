import type { ReactNode } from "react";
import type { Dictionary } from "../../[lang]/dictionaries";
import { StackOutput, Table, type TerminalData } from "./outputs";

export interface TerminalContext {
  data: TerminalData;
  t: Dictionary["terminal"];
  otherLanguage: { href: string; code: string };
}

export interface CommandResult {
  output?: ReactNode;
  clear?: boolean;
  cwd?: string;
  theme?: "light" | "dark";
  scrollTo?: string;
  open?: string;
  navigate?: string;
}

// Folder and file names are accepted in both languages.
type Folder = "experience" | "projects" | "research";

const SECTIONS: Record<string, { section: string; folder?: Folder }> = {
  experiencia: { section: "experience", folder: "experience" },
  "experiência": { section: "experience", folder: "experience" },
  experience: { section: "experience", folder: "experience" },
  projetos: { section: "projects", folder: "projects" },
  projects: { section: "projects", folder: "projects" },
  pesquisa: { section: "research", folder: "research" },
  research: { section: "research", folder: "research" },
  contato: { section: "contact" },
  contact: { section: "contact" },
};

const FILES: Record<string, "stack" | "contact"> = {
  "stack.txt": "stack",
  stack: "stack",
  "contato.txt": "contact",
  "contact.txt": "contact",
  contato: "contact",
  contact: "contact",
};

function clean(path: string) {
  return path.toLowerCase().replace(/^~\/?/, "").replace(/^\.\//, "").replace(/\/+$/, "");
}

function external(href: string, text: ReactNode) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="t-link">
      {text}
    </a>
  );
}

function list(ctx: TerminalContext, folder: Folder | "root"): ReactNode {
  const { data, t } = ctx;
  if (folder === "experience") {
    return (
      <Table
        rows={data.experience.map((job) => [
          <a key={job.id} href={`#${job.id}`} className="t-link">
            {job.id}/
          </a>,
          job.title,
        ])}
      />
    );
  }
  if (folder === "projects") {
    return (
      <Table
        rows={data.projects.map((project) => [
          <a key={project.id} href={`#${project.id}`} className="t-link">
            {project.id}/
          </a>,
          project.title,
        ])}
      />
    );
  }
  if (folder === "research") {
    return <Table rows={data.research.map((item) => [external(item.link, item.name), item.title])} />;
  }
  return (
    <p className="t-dirs">
      <a href="#experience" className="t-link">{t.files.experience}/</a>
      <a href="#projects" className="t-link">{t.files.projects}/</a>
      <a href="#research" className="t-link">{t.files.research}/</a>
      <span>{t.files.stack}</span>
      <span>{t.files.contact}</span>
    </p>
  );
}

function folderOf(cwd: string) {
  return SECTIONS[clean(cwd)]?.folder ?? "root";
}

export function runCommand(input: string, ctx: TerminalContext, state: { cwd: string; theme: "light" | "dark" }): CommandResult {
  const { data, t } = ctx;
  const [name = "", ...args] = input.trim().split(/\s+/);
  const command = name.toLowerCase();
  const arg = args.join(" ");

  switch (command) {
    case "":
      return {};

    case "help":
    case "ajuda":
      return { output: <Table rows={t.help.map(([usage, description]) => [usage, description])} /> };

    case "whoami":
      return { output: <p className="t-prose">{data.bio}</p> };

    case "pwd":
      return { output: <p>/home/gabriel{state.cwd === "~" ? "" : state.cwd.slice(1)}</p> };

    case "echo":
      return { output: <p>{arg}</p> };

    case "clear":
      return { clear: true };

    case "ls": {
      if (!arg) return { output: list(ctx, folderOf(state.cwd)) };
      const target = SECTIONS[clean(arg)];
      if (target?.folder) return { output: list(ctx, target.folder) };
      return { output: <p>ls: {arg}: {t.noSuchPath}</p> };
    }

    case "cd": {
      const path = clean(arg);
      if (!path || path === ".." || path === "~" || path === "/") return { cwd: "~", scrollTo: "top" };
      const target = SECTIONS[path];
      if (!target) return { output: <p>cd: {arg}: {t.noSuchPath}</p> };
      return { cwd: target.folder ? `~/${clean(arg)}` : state.cwd, scrollTo: target.section };
    }

    case "cat": {
      const file = FILES[clean(arg)];
      if (file === "stack") return { output: <StackOutput stack={data.stack} /> };
      if (file === "contact") {
        return { output: <Table rows={data.contact.map(({ label, text, href }) => [label, external(href, text)])} /> };
      }
      return { output: <p>cat: {arg || "?"}: {t.noSuchPath}</p> };
    }

    case "open": {
      if (!arg) return { output: <p>open: {t.missingProject}</p> };
      const wanted = clean(arg);
      const project = data.projects.find((item) => item.id === wanted || item.id.startsWith(wanted));
      if (!project) return { output: <p>open: {arg}: {t.noSuchProject}</p> };
      return { open: project.demoLink, output: <p>{t.opening} {external(project.demoLink, project.demoLink)}</p> };
    }

    case "tema":
    case "theme": {
      const theme = state.theme === "dark" ? "light" : "dark";
      return { theme, output: <p>{t.themeSet}: {t.themeNames[theme]}</p> };
    }

    case "lang":
    case "idioma": {
      const code = arg.toLowerCase();
      if (code && ctx.otherLanguage.code.toLowerCase().startsWith(code.slice(0, 2))) return { navigate: ctx.otherLanguage.href };
      return { output: <p>{t.langUsage}</p> };
    }

    case "sudo":
      return { output: <p>{t.sudo}</p> };

    default:
      return { output: <p>{name}: {t.notFound}</p> };
  }
}
