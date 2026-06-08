import { resultSections } from "./figures.js";

const results = document.querySelector("[data-results]");

if (results) {
  const tabs = results.querySelector("[data-results-tabs]");
  const list = results.querySelector("[data-results-list]");
  const empty = results.querySelector("[data-results-empty]");
  let currentSection = 0;

  const buildFigure = (figure) => {
    const item = document.createElement("figure");
    item.className = `result-figure${figure.fit ? ` result-figure-${figure.fit}` : ""}`;

    const media = document.createElement("div");
    media.className = "result-figure-media";

    const link = document.createElement("a");
    link.className = "result-image-link";
    link.href = figure.src;
    link.setAttribute("aria-label", "Open result image");

    const image = document.createElement("img");
    image.src = figure.src;
    image.alt = figure.alt || figure.caption;
    image.loading = "lazy";

    const caption = document.createElement("figcaption");
    caption.textContent = figure.caption || "";

    link.append(image);
    media.append(link, caption);
    item.append(media);
    return item;
  };

  const buildSection = (section) => {
    const item = document.createElement("article");
    item.className = `result-module result-module-${section.id}`;

    const copy = document.createElement("div");
    copy.className = "result-module-copy";

    const heading = document.createElement("h3");
    heading.textContent = section.heading;

    const text = document.createElement("p");
    text.textContent = section.text;

    const figures = document.createElement("div");
    figures.className = `result-figure-grid${section.figures.length > 1 ? " result-figure-grid-multiple" : ""}`;
    figures.append(...section.figures.map(buildFigure));

    copy.append(heading, text);
    item.append(copy, figures);
    return item;
  };

  const renderSection = (index) => {
    currentSection = index;
    list.replaceChildren(buildSection(resultSections[currentSection]));

    tabs.querySelectorAll(".results-tab").forEach((button, tabIndex) => {
      button.setAttribute("aria-selected", String(tabIndex === currentSection));
    });
  };

  const buildTabs = () => {
    tabs.replaceChildren();

    resultSections.forEach((section, index) => {
      const button = document.createElement("button");
      button.className = "results-tab";
      button.type = "button";
      button.textContent = section.label;
      button.setAttribute("role", "tab");
      button.setAttribute("aria-selected", "false");
      button.addEventListener("click", () => renderSection(index));
      tabs.append(button);
    });
  };

  if (!resultSections.length) {
    empty.hidden = false;
  } else {
    empty.hidden = true;
    buildTabs();
    renderSection(0);
  }
}

const copyCitation = document.querySelector("[data-copy-citation]");
const citationCode = document.querySelector("[data-citation-code]");

if (copyCitation && citationCode) {
  copyCitation.addEventListener("click", async () => {
    const originalText = copyCitation.textContent;

    try {
      await navigator.clipboard.writeText(citationCode.textContent.trim());
      copyCitation.textContent = "Copied";
    } catch {
      copyCitation.textContent = "Copy failed";
    }

    window.setTimeout(() => {
      copyCitation.textContent = originalText;
    }, 1800);
  });
}
