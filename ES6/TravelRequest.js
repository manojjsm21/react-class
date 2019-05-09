class TravelRequest {
  constructor(reqId, reqName, amount) {
    this.reqId = reqId;
    this.reqName = reqName;
    this.amount = amount;
  }

  toString() {
    return `${this.reqId} ,${this.reqName}
        ${this.amount}`;
  }
}
const ramsReq = new TravelRequest(101, "manoj", 450);
console.log(ramsReq.toString());
module.exports = TravelRequest;
