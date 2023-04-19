(() => {

    const script = document.currentScript;

    const loadWidget = () => {

        // Base URL for the chat client to bootstrap from
        const widgetUrl = 'http://localhost:3001';

        const widget = document.createElement("div");
        widget.style.zIndex = 4999999;
        widget.style.display = "none";
        widget.style.boxSizing = "border-box";
        widget.style.width = "600px";
        widget.style.height = "min(704px, 100% - 104px)";
        widget.style.maxHeight = "800px";
        widget.style.position = "fixed";
        widget.style.bottom = "84px";
        widget.style.left = "20px";
        widget.style.boxShadow = "rgba(0, 0, 0, 0.16) 0px 5px 40px";

        // Apply mobile-specific styles for screen widths <= 600px
        if (window.matchMedia("(max-width: 600px)").matches) {
            widget.style.top = "0px";
            widget.style.bottom = "0px";
            widget.style.left = "0px";
            widget.style.right = "0px";
            widget.style.width = "100%";
            widget.style.height = "100%";
            widget.style.backgroundColor = "white"; // Change this to your desired background color
        }


        const chatFrame = document.createElement("iframe");
        chatFrame.style.boxSizing = "borderBox";
        chatFrame.style.width = "100%";
        chatFrame.style.height = "100%";
        chatFrame.style.border = 0;
        chatFrame.style.margin = 0;
        chatFrame.style.padding = 0;
        chatFrame.style.overflow = "show";

        widget.appendChild(chatFrame);
        chatFrame.src = widgetUrl;


        // Add loader button
        const buttonFrame = document.createElement("iframe");

        // Set the iframe properties
        buttonFrame.style.none = 'none';
        buttonFrame.width = "70px";
        buttonFrame.height = "60px";
        buttonFrame.style.zIndex = 4999998;
        buttonFrame.style.position = "fixed";
        buttonFrame.style.outline = "none";
        buttonFrame.style.border = "none";
        buttonFrame.style.boxShadow = "none";
        buttonFrame.style.boxSizing = "content-box";
        buttonFrame.style.bottom = "20px";
        buttonFrame.style.left = "20px";
        buttonFrame.style.border = "none";
        buttonFrame.style.overflow = "hidden";

        // Wait for the iframe to load then style the body
        buttonFrame.addEventListener("load", () => {
            const body = buttonFrame.contentWindow.document.body;
            body.style.overflow = "hidden";
        });

        // Create the button element
        const button = document.createElement("button");

        // Set the button properties
        button.innerHTML = `<img src="${widgetUrl}/twistbot.svg" alt="Twistbot">`;
        button.style.width = "100%";
        button.style.height = "100%";
        button.style.backgroundColor = "transparent";
        button.style.position = "absolute";
        button.style.cursor = "pointer";
        button.style.outline = "none";
        button.style.border = "none";
        button.style.boxShadow = "none";
        button.style.top = "0px";
        button.style.left = "0px";

        button.style.transition = "transform 0.2s ease-in-out"; // Add transition property for smooth scaling effect

        button.addEventListener("mouseenter", () => {
            button.style.transform = "scale(1.1)"; // Scale the button to 1.1 times its original size on hover
        });

        button.addEventListener("mouseleave", () => {
            button.style.transform = "scale(1)"; // Return the button to its original size when not hovered over
        });


        chatFrame.addEventListener("load", () => buttonFrame.style.display = "block");

        // Add an event listener to the button to log a message when clicked
        button.addEventListener("click", () => {
            //widget.style.display = widget.style.display === "block" ? "none" : "block";
            if (widget.style.display === 'block') {
                //widget.style.display = 'none';
                button.innerHTML = `<img src="${widgetUrl}/twistbot.svg" alt="Twistbot Open">`;

                // Animate the widget element in from the bottom of the page with a spring effect
                widget.animate([
                    { transform: 'translateY(0)', opacity: 1 },
                    { transform: 'translateY(100%)', opacity: 0 }
                ], {
                    duration: 1000,
                    easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)', // Use a spring easing function
                }).onfinish = () => {
                    widget.style.display = 'none'; // Set display to none after the animation finishes
                };

            } else {
                widget.style.display = 'block';
                button.innerHTML = `<img src="${widgetUrl}/close.svg" alt="Twistbot Close">`;

                // Animate the widget element in from the bottom of the page with a spring effect
                widget.animate([
                    { transform: 'translateY(100%)', opacity: 0 },
                    { transform: 'translateY(0)', opacity: 1 }
                ], {
                    duration: 800,
                    easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)', // Use a spring easing function
                });

                button.animate([
                    { transform: 'scale(0.5)', opacity: 0 },
                    { transform: 'scale(1.2)', opacity: 1 },
                    { transform: 'scale(1)', opacity: 1 }
                ], {
                    duration: 2000,
                    iterations: 1,
                    easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)', // Use a spring easing function
                });
            }
        });

        // Append the iframe to the page
        document.body.appendChild(buttonFrame);

        // Append the button to the iframe
        buttonFrame.contentDocument.body.appendChild(button);

        document.body.appendChild(widget);
    }

    if (document.readyState === "complete") {
        loadWidget();
    } else {
        document.addEventListener("readystatechange", () => {
            if (document.readyState === "complete") {
                loadWidget();
            }
        });
    }

})();