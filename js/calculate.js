$(function () {

  // var $balance = $('#balance');
  // var $funds = $('funds');
  // var $atm = $('atm');
  var $calculate = $('#calculate');

  $('#balance-slide').slider({
    min: 0,
    max: 25000,
    step: 50,
    value: 0,
    slide: function(event, ui) {
      $('#balance').val(ui.value);
    }
  });

  $('#funds-slide').slider({
    min: 0,
    max: 25000,
    step: 50,
    value: 0,
    slide: function(event, ui) {
      $('#funds').val(ui.value);
    }
  });

  $('#atm-slide').slider({
    min: 0,
    max: 25,
    step: 1,
    value: 0,
    slide: function(event, ui) {
      $('#atm').val(ui.value);
    }
  });

  $calculate.on('submit', function (e) {
    e.preventDefault();
    var newbalance = parseFloat(document.getElementById('balance').value) || 0;
    var newfunds = parseFloat(document.getElementById('funds').value) || 0;
    var newatm = parseFloat(document.getElementById('atm').value) || 0;
    var atmfees = (Math.min(newatm*3, 12) * 12);
    var money = newbalance + newfunds;
    if (money <= 10000) {
      var total = (money * 0.025) + atmfees;
      document.acceleration.total.value = total.toFixed(2);
    } else if ((money > 10000) && (money <= 20000)) {
      var checking = 10000 * 0.025;
      var savings = (money -10000) * 0.005;
      var total2 = checking + savings + atmfees;
      document.acceleration.total.value = total2.toFixed(2);
    } else {
      var check = 10000 * 0.025;
      var savings2 = 10000 * 0.005;
      var over = (money - 20000) * 0.0025;
      var total3 = check + savings2 + over + atmfees;
      document.acceleration.total.value = total3.toFixed(2);
    }
  });
});
