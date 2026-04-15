/**
 * Frontend JavaScript for the accordion block.
 * Uses vanilla JavaScript to handle accordion interactions.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

(function () {
    // Initialize all accordions when DOM is ready
    function initAccordions() {
        const accordions = document.querySelectorAll('.old-accordion');

        accordions.forEach(function (accordion) {
            const headers =
                accordion.querySelectorAll('.accordion-header');

            headers.forEach(function (header) {
                setAccordionState(header, false);

                // Add click event listener to each accordion header
                header.addEventListener('click', function () {
                    toggleAccordion(this);
                });
            });
        });
    }

    // Toggle accordion item open/closed
    function toggleAccordion(header) {
        const isExpanded = header.dataset.expanded === 'true';

        setAccordionState(header, !isExpanded);
    }

    function setAccordionState(header, isExpanded) {
        const content = header.nextElementSibling;
        if (!content) return;
        const button = header.querySelector('.accordion-button');

        header.dataset.expanded = isExpanded ? 'true' : 'false';
        header.classList.toggle('is-expanded', isExpanded);
        content.style.display = isExpanded ? 'block' : 'none';
        button.textContent = isExpanded ? '−' : '+';
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAccordions);
    } else {
        initAccordions();
    }
})();
