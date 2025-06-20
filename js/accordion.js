class Accordion {
  constructor(accordionElement) {
    this.accordionElement = accordionElement;
    this.accordionHeader = accordionElement.querySelector(".accordion-header");
    this.accordionContent =
      accordionElement.querySelector(".accordion-content");
    this.completionContainer = this.accordionHeader.querySelector(
      ".completion-container"
    );
    this.completionText =
      this.completionContainer.querySelector(".completion-text");
    this.completionIcon =
      this.completionContainer.querySelector(".completion-icon");

    if (!this.accordionHeader || !this.accordionContent) {
      console.error(
        "Accordion component initialized without a header or content:",
        accordionElement
      );
      return;
    }

    Accordion.instances.set(accordionElement, this);

    this.accordionHeader.addEventListener(
      "click",
      this.toggleAccordion.bind(this)
    );
    this.accordionHeader.addEventListener(
      "click",
      this.toggleHeader.bind(this)
    );
  }

  // Toggles the visibility of the accordion content.
  toggleAccordion() {
    Accordion.closeAllOpenAccordions(this.accordionElement);

    this.accordionHeader.classList.toggle("active");
    this.accordionContent.classList.toggle("show");

    const isExpanded = this.accordionHeader.classList.contains("active");
    this.accordionHeader.setAttribute("aria-expanded", isExpanded);
    this.accordionContent.setAttribute("aria-hidden", !isExpanded);
  }

  toggleHeader() {
    this.completionIcon.classList.add("completed");
    this.completionIcon.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>';
    this.completionText.textContent = "COMPLETE!";
  }

  // Closes the current accordion instance.
  close() {
    if (this.accordionHeader.classList.contains("active")) {
      this.accordionHeader.classList.remove("active");
      this.accordionContent.classList.remove("show");
      this.accordionHeader.setAttribute("aria-expanded", false);
      this.accordionContent.setAttribute("aria-hidden", true);
    }
  }

  // Close all other open accordions, excluding the one passed in as a parameter
  static closeAllOpenAccordions(excludeElement = null) {
    document
      .querySelectorAll(".custom-accordion .accordion-header.active")
      .forEach((openHeader) => {
        const parentAccordion = openHeader.closest(".custom-accordion");
        if (parentAccordion && parentAccordion !== excludeElement) {
          const accordionInstance = Accordion.instances.get(parentAccordion);
          accordionInstance.close();
        }
      });
  }
}

Accordion.instances = new Map();

export { Accordion };
