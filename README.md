## ImageMagnifier

### Component Name: _Magnifier Component_

#### Description:

The Magnifier Component component enhances the user experience when viewing images. It provides a dynamic
magnification effect that allows users to zoom in on specific parts of an image. This component is particularly
useful for e-commerce websites, product catalogs, or any scenario where detailed image examination is required.

#### Key Features:

* Zoom Effect: Hovering over the image triggers a magnification glass that follows the cursor, allowing users to
  view details up close.
* Customizable Zoom Level: The level of zoom can be adjusted to suit your specific use case.
* Smooth Interactivity: The magnification effect is smooth and responsive, providing an intuitive user experience.
* Touchscreen Compatibility: Works seamlessly on touchscreen devices for both zooming and panning.
* Hidden/Shown Magnifier: The magnifier can be hidden or shown when interacting with the image, ensuring it
  doesn't obstruct the view when not needed.

#### Use Cases:

* Product Images: Ideal for e-commerce platforms to showcase product details.
* Art Galleries: Enhance the exploration of artwork with close-up views.
* Scientific Visualization: Useful for examining scientific images or diagrams with intricate details.
* Interactive Maps: Zoom in on maps for better location exploration.

#### Implementation:

The component can be easily integrated into your Lightning Aura application. It uses event handlers for
rendering and mouse interactions to provide a seamless and visually engaging magnification experience.

#### Configuration:

You can customize the zoom level and other styling parameters to match the look and feel of your application.

#### Compatibility:

The component is compatible with various screen sizes and devices, making it suitable for both desktop and
mobile applications.

#### Note:

Ensure proper positioning and styling within your application to achieve the desired user experience.

**Feel free to adapt and expand this description to provide more context and information about your specific use
case and requirements.**

### Example:

```
<aura:application description="ImageMagnifierExampleApp" extends="force:slds">
  <c:ImageMagnifierWrapper
    urlImage="https://fakeimg.pl/600x400"
    zoom="2"
    glassColor="img-magnifier-glass"
    hideDescription="false"
    productTitle="Titolo prodotto"
    productDescription="Descrizione prodotto"
  />
</aura:application>
```
