export default class canDriver {
  private driverId: number;
  private driverName: string;
  private noOfTrip: number;
  private isactive: boolean;
  constructor(
    diverId: number,
    diverName: string,
    noOfTrip: number,
    isactive: boolean
  ) {
    this.driverId = diverId;
    this.driverName = diverName;
    this.noOfTrip = noOfTrip;
    this.isactive = isactive;
  }

  toString() {
    return `${this.driverName} , ${this.noOfTrip} , ${this.isactive}`;
  }
}

console.log(new canDriver(1, "ram", 45, true).toString());
