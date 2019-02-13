function widget(partNo, size) {
    this.partNo = partNo;
    this.size = size;
}
function FormFactor(material, widget) {
    this.material = material;
    this.widget = widget;
    return this;
}
var widgetA = widget(100, "large");
var widgetB = widget(101, "small");
var formFactorA = new FormFactor("plastic", widgetA);
var formFactorB = new FormFactor("metal", widgetB);