"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function echo(arg) {
    return arg;
}
//Below line should give an error
// var myString : string = echo(1);
var num = echo(1);
var List = /** @class */ (function () {
    function List() {
        var elements = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            elements[_i] = arguments[_i];
        }
        this.data = elements;
    }
    List.prototype.add = function (element) {
        this.data.push(element);
    };
    List.prototype.remove = function (element) {
        var index = this.data.indexOf(element);
        if (index != -1) {
            this.data.splice(index, 1);
        }
    };
    List.prototype.asArray = function () {
        return this.data;
    };
    return List;
}());
exports.List = List;
var KeyValuePair = /** @class */ (function () {
    function KeyValuePair(key, value) {
        this.key = key;
        this.value = value;
    }
    KeyValuePair.prototype.getKey = function () {
        return this.key;
    };
    KeyValuePair.prototype.getValue = function () {
        return this.value;
    };
    return KeyValuePair;
}());
exports.KeyValuePair = KeyValuePair;
//Usage of KeyValuePair & List can be observed in 07- Modules
