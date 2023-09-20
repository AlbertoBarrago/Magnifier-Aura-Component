({    
    magnifyCb: function (component, zoom) {
        // Get the image container element
        var imageContainer = component.find("imageContainer");
        var img, glass, w, h, bw;
        var glassColor = component.get("v.glassColor")

        img = component.find("img");

        // Check if a magnifier glass with the same ID already exists and destroy it
        var existingMagnifiers = imageContainer.getElement().querySelectorAll(`.${glassColor}`);
         // Remove existing magnifier glass elements
         existingMagnifiers.forEach(function (element) {
            element.remove();
        });
        
    
        glass = document.createElement("DIV");
        glass.setAttribute("class", glassColor);
       
        /* Insert magnifier glass: */
        imageContainer.getElement().appendChild(glass);
        //console.log('imageContainer', imageContainer)

        /* Set background properties for the magnifier glass: */
        glass.style.backgroundImage = "url('" + img.getElement().src + "')";
        glass.style.backgroundRepeat = "no-repeat";
        glass.style.backgroundSize = (img.getElement().width * zoom) + "px " + (img.getElement().height * zoom) + "px";
        bw = 3;
        w = glass.offsetWidth / 2;
        h = glass.offsetHeight / 2;

        /* Execute a function when someone moves the magnifier glass over the image: */
        glass.addEventListener("mousemove", moveMagnifier.bind(this));
        img.getElement().addEventListener("mousemove", moveMagnifier.bind(this));

        /* And also for touch screens: */
        glass.addEventListener("touchmove", moveMagnifier.bind(this));
        img.getElement().addEventListener("touchmove", moveMagnifier.bind(this));

        function moveMagnifier(e) {
            var pos, x, y;
            /* Get the cursor's x and y positions: */
            pos = getCursorPos(e);
            x = pos.x;
            y = pos.y;
            /* Prevent the magnifier glass from being positioned outside the image: */
            if (x > img.width - (w / zoom)) { x = img.width - (w / zoom); }
            if (x < w / zoom) { x = w / zoom; }
            if (y > img.height - (h / zoom)) { y = img.height - (h / zoom); }
            if (y < h / zoom) { y = h / zoom; }
            /* Set the position of the magnifier glass: */
            glass.style.left = (x - w) + "px";
            glass.style.top = (y - h) + "px";
            /* Display what the magnifier glass "sees": */
            glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
        }

        function getCursorPos (e) {
            var a, x = 0, y = 0;
            e = e || window.Event;
            /* Get the x and y positions of the image: */
            a = img.getElement().getBoundingClientRect(); //TODO fix me
            /* Calculate the cursor's x and y coordinates, relative to the image: */
            x = e.pageX - a.left;
            y = e.pageY - a.top;
            /* Consider any page scrolling: */
            x = x - window.scrollX;
            y = y - window.scrollY;
            return { x: x, y: y };
        }
    },
    hiddenGlassCb: function (component) {
        var imageContainer = component.find("imageContainer");
        var glassColor = component.get("v.glassColor");
        var existingSimpleMagnifier = [];
        var presetsArray = [
            "img-magnifier-glass",
            "img-magnifier-glass-150",
            "img-magnifier-glass-200"
        ]
        switch(glassColor){
            case presetsArray[0]:
                existingSimpleMagnifier = imageContainer.getElement().querySelectorAll(`.${presetsArray[0]}`);
                break;
            case presetsArray[1]:
                existingSimpleMagnifier = imageContainer.getElement().querySelectorAll(`.${presetsArray[1]}`);
                break;
            case presetsArray[2]:
                existingSimpleMagnifier = imageContainer.getElement().querySelectorAll(`.${presetsArray[2]}`);
                break;
        }
        //Execute function for hidden all refs
        existingSimpleMagnifier.forEach((val)=> {
            $A.util.addClass(val, "hidden");
        })
    },
    showGlassCb: function(component) {
        var imageContainer = component.find("imageContainer");
        var glassColor = component.get("v.glassColor");
        var existingSimpleMagnifier = [];
        var presetsArray = [
            "img-magnifier-glass",
            "img-magnifier-glass-150",
            "img-magnifier-glass-200"
        ]

        //Assign value for glass to show
        switch(glassColor){
            case presetsArray[0]:
                existingSimpleMagnifier = imageContainer.getElement().querySelectorAll(`.${presetsArray[0]}`);
                break;
            case presetsArray[1]:
                existingSimpleMagnifier = imageContainer.getElement().querySelectorAll(`.${presetsArray[1]}`);
                break;
            case presetsArray[2]:
                existingSimpleMagnifier = imageContainer.getElement().querySelectorAll(`.${presetsArray[2]}`);
                break;
        }

        //Execute function for show all refs
        existingSimpleMagnifier.forEach((val)=> {
            $A.util.removeClass(val, "hidden");
        })
    }
})
