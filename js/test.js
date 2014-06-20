function test() {
  alert("I submit to javascript");
}
function calculate() {
  var balance = parseFloat(document.getElementById('balance').value);
  var funds = parseFloat(document.getElementById('funds').value);
  var atm = parseFloat(document.getElementById('atm').value);
  var atmfees = Math.min(atm*3, 12);
  var money = balance + funds
  var temp = money < 10000;
  if (money < 10000) {
    var total = (money * 0.0149) + atmfees;
    document.acceleration.balance.value;
    document.acceleration.funds.value;
    document.acceleration.atm.value;
    document.acceleration.total.value = total;
  } else if ((money > 10000) && (money < 20000)) {
    var check = 10000 * 0.0149;
    var savings2 = (money -10000) * 0.005;
    var total = checking + savings + atmfees;
    document.acceleration.balance.value;
    document.acceleration.funds.value;
    document.acceleration.atm.value;
    document.acceleration.total.value = total;
  } else {
    var check = 10000 * 0.0149;
    var savings = 10000 * 0.005;
    var over = (money - 20000) * 0.0025;
    var total = check + savings + over + atmfees;
    document.acceleration.balance.value;
    document.acceleration.funds.value;
    document.acceleration.atm.value;
    document.acceleration.total.value = total;
  }

}
