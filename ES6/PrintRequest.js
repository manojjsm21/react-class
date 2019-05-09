var TravelRequest = require("./TravelRequest.js");
//import TravelRequest from "./TravelRequest.js";
function printAll(reqList, funRef) {
  for (let i = 0; i < reqList.length; i++) {
    console.log(reqList[i].toString());
    console.log(funRef(reqList[i].amount));
  }
}

const approve = amount => {
  if (amount < 5000) {
    return true;
  } else {
    return false;
  }
};

const ramsReq = new TravelRequest(101, "Ramesh", 450);
console.log(ramsReq.toString());

const ramlist = [
  new TravelRequest(101, "Ramesh", 450),
  new TravelRequest(102, "err", 10050)
];
printAll(ramlist, approve);

printAll(ramlist, amount => true);
