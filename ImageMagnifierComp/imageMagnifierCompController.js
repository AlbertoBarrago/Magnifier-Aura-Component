({
    init: function (component, event, helper) {
        console.log("event - Init", event)
        helper.magnifyCb(component, component.get('v.zoom')); // You can adjust the zoom level as needed
    },
    hiddenGlass: function (component, event, helper) {
        console.log("event - HiddenGlass", event)
        helper.hiddenGlassCb(component);
    },
    showGlass: function (component, event, helper) {
        console.log("event - ShowGlass", event)
        helper.showGlassCb(component);
    }
})
