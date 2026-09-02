const year = document.querySelector("#current-year");

if (year) {
  year.textContent = new Date().getFullYear();
}

document.querySelectorAll("[data-bib-target]").forEach((button) => {
  button.addEventListener("click", () => {
    const target = document.getElementById(button.dataset.bibTarget);

    if (!target) return;

    const willOpen = target.hidden;
    target.hidden = !willOpen;
    button.setAttribute("aria-expanded", String(willOpen));
    button.textContent = willOpen ? "Hide BibTeX" : "BibTeX";
  });
});
