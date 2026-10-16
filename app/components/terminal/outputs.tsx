import type { CSSProperties, ReactNode } from "react";

// Presentational pieces shared by the server-rendered intro and the commands
// typed in the browser.

export interface TerminalData {
  bio: string;
  stack: { group: string; items: string[] }[];
  experience: { id: string; title: string }[];
  projects: { id: string; title: string; demoLink: string }[];
  research: { name: string; title: string; link: string }[];
  contact: { label: string; text: string; href: string }[];
}

export function Prompt({ cwd }: { cwd: string }) {
  return (
    <span className="t-prompt">
      <span className="t-cwd">{cwd}</span> <span className="t-sigil">$</span>{" "}
    </span>
  );
}

export function Table({ rows }: { rows: [ReactNode, ReactNode][] }) {
  return (
    <dl className="t-table">
      {rows.map(([key, value], index) => (
        <div key={index} className="contents">
          <dt>{key}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function StackOutput({ stack }: Pick<TerminalData, "stack">) {
  return <Table rows={stack.map(({ group, items }) => [group, items.join(", ")])} />;
}

export function ProjectDirs({ projects }: Pick<TerminalData, "projects">) {
  return (
    <p className="t-dirs">
      {projects.map((project) => (
        <a key={project.id} href={`#${project.id}`} className="t-link">
          {project.id}/
        </a>
      ))}
    </p>
  );
}

// When each intro line appears, is typed and prints its output, in seconds.
// `end` is when the live prompt shows up.
export function introTimeline(commands: string[]) {
  const round = (seconds: number) => Math.round(seconds * 100) / 100;
  let time = 0.2;
  const steps = commands.map((text) => {
    const lineAt = time;
    const typeAt = round(lineAt + 0.15);
    const outputAt = round(typeAt + text.length * 0.045 + 0.15);
    time = round(outputAt + 0.25);
    return { text, lineAt, typeAt, outputAt };
  });
  return { steps, end: time };
}

export function introCommands(files: { stack: string; projects: string }) {
  return [`cat ${files.stack}`, `ls ${files.projects}/`];
}

// The commands that play on page load. Typing is a CSS width animation in
// `ch` steps, so the transcript is real HTML and needs no JavaScript.
export function Intro({ data, files }: { data: TerminalData; files: { stack: string; projects: string } }) {
  const outputs = [<StackOutput key="stack" stack={data.stack} />, <ProjectDirs key="ls" projects={data.projects} />];
  const { steps } = introTimeline(introCommands(files));

  return (
    <>
      {steps.map(({ text, lineAt, typeAt, outputAt }, index) => (
        <div key={text} className="t-entry">
          <p className="t-reveal" style={{ "--delay": `${lineAt}s` } as CSSProperties}>
            <Prompt cwd="~" />
            <span className="t-type" style={{ "--chars": text.length, "--delay": `${typeAt}s` } as CSSProperties}>
              {text}
            </span>
          </p>
          <div className="t-out t-reveal" style={{ "--delay": `${outputAt}s` } as CSSProperties}>
            {outputs[index]}
          </div>
        </div>
      ))}
    </>
  );
}
