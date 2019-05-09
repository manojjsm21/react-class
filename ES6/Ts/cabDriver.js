"use strict";
exports.__esModule = true;
var canDriver = /** @class */ (function () {
    function canDriver(diverId, diverName, noOfTrip, isactive) {
        this.driverId = diverId;
        this.driverName = diverName;
        this.noOfTrip = noOfTrip;
        this.isactive = isactive;
    }
    canDriver.prototype.toString = function () {
        return this.driverName + " , " + this.noOfTrip + " , " + this.isactive;
    };
    return canDriver;
}());
exports["default"] = canDriver;
console.log(new canDriver(1, "ram", 45, true).toString());
