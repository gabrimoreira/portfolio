// Where the reader is on the page right now, read from the layout rather than
// from the URL hash (which keeps the last anchor clicked, even after the reader
// scrolls away from it).

const ANCHORS = "main section[id], main article[id], main li[id], footer[id]";

function headerHeight() {
  return document.querySelector("header")?.getBoundingClientRect().height ?? 0;
}

function atPageBottom() {
  return window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
}

// The last element in `selector` whose top has reached `line` px from the top
// of the viewport, or null while the reader is still above all of them.
function lastAbove(selector: string, line: number) {
  let current: Element | null = null;
  for (const element of document.querySelectorAll(selector)) {
    if (element.getBoundingClientRect().top <= line) current = element;
  }
  return current;
}

// `#id` of the section or entry at the top of the screen, or "" in the hero.
export function anchorAtTop() {
  if (atPageBottom()) return "#contact";
  const element = lastAbove(ANCHORS, headerHeight() + 8);
  return element ? `#${element.id}` : "";
}

// Id of the section that fills most of the screen, or null in the hero.
export function activeSection(ids: string[]) {
  if (atPageBottom()) return ids[ids.length - 1] ?? null;
  const selector = ids.map((id) => `#${CSS.escape(id)}`).join(", ");
  return lastAbove(selector, headerHeight() + window.innerHeight * 0.3)?.id ?? null;
}
