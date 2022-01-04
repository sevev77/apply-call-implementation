Function.prototype.customCall = function(obj, ...rest) {
    var a = this.bind(obj, ...rest);
    a();
}

Function.prototype.customApply = function(obj, rest) {
    var a = this.bind(obj, ...rest);
    a();
}
