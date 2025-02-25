window.addEventListener("load", function() {
    let style = document.createElement("style");
    style.innerHTML = `
        /* Hide sticky top header */
        .draggable.no-draggable-children.sticky.top-0.p-3.mb-1\\.5.flex.items-center.justify-between.z-10.h-header-height.font-semibold.bg-token-main-surface-primary.max-md\\:hidden {
            display: none !important;
        }

        /* Hide empty gap div */
        .mb-2.flex.gap-3.empty\\:hidden.-ml-2 {
            display: none !important;
        }

        /* Hide specific flex container */
        .flex.gap-x-1.5.text-token-text-primary {
            display: none !important;
        }
    `;
    document.head.appendChild(style);
});
