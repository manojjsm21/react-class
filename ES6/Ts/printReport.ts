import CabDriver from "./cabDriver";
import { Payment } from "./Payment";
function print(driver: CabDriver, payment: Payment): void {
  console.log(driver.toString());
  console.log(payment.amount);
}

console.log(new CabDriver(1, "ram", 45, true).toString());

