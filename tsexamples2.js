"use strict";
exports.__esModule = true;
exports.person = void 0;
var person = /** @class */ (function () {
    function person(name, age) {
        this.name = name;
        this.age = age;
    }
    person.prototype.info = function () {
        console.log(this.name + "," + this.age);
    };
    return person;
}());
exports.person = person;
