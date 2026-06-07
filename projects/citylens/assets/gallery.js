import { figures } from "./figures.js";

const gallery = document.querySelector("[data-gallery]");

if (gallery) {
  const image = gallery.querySelector("[data-gallery-image]");
  const imageLink = gallery.querySelector("[data-gallery-link]");
  const openLink = gallery.querySelector("[data-gallery-open]");
  const title = gallery.querySelector("[data-gallery-title]");
  const count = gallery.querySelector("[data-gallery-count]");
  const thumbs = gallery.querySelector("[data-gallery-thumbs]");
  const empty = gallery.querySelector("[data-gallery-empty]");
  const prev = gallery.querySelector("[data-gallery-prev]");
  const next = gallery.querySelector("[data-gallery-next]");
  let current = 0;

  const setFigure = (index) => {
    if (!figures.length) {
      empty.hidden = false;
      imageLink.hidden = true;
      openLink.hidden = true;
      image.hidden = true;
      count.textContent = "0 / 0";
      title.textContent = "No figures added yet";
      prev.disabled = true;
      next.disabled = true;
      return;
    }

    empty.hidden = true;
    imageLink.hidden = false;
    openLink.hidden = false;
    image.hidden = false;
    current = (index + figures.length) % figures.length;
    const figure = figures[current];
    image.src = figure.src;
    image.alt = figure.alt || figure.title;
    imageLink.href = figure.src;
    openLink.href = figure.src;
    title.textContent = figure.title;
    count.textContent = `${current + 1} / ${figures.length}`;

    thumbs.querySelectorAll(".gallery-thumb").forEach((button, thumbIndex) => {
      button.setAttribute("aria-current", String(thumbIndex === current));
    });
  };

  const buildThumbs = () => {
    thumbs.replaceChildren();
    figures.forEach((figure, index) => {
      const button = document.createElement("button");
      button.className = "gallery-thumb";
      button.type = "button";
      button.setAttribute("aria-label", `Show ${figure.title}`);

      const thumb = document.createElement("img");
      thumb.src = figure.src;
      thumb.alt = "";
      thumb.loading = "lazy";

      button.append(thumb);
      button.addEventListener("click", () => setFigure(index));
      thumbs.append(button);
    });
  };

  prev.addEventListener("click", () => setFigure(current - 1));
  next.addEventListener("click", () => setFigure(current + 1));

  gallery.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      setFigure(current - 1);
    }
    if (event.key === "ArrowRight") {
      setFigure(current + 1);
    }
  });

  buildThumbs();
  setFigure(0);
}
