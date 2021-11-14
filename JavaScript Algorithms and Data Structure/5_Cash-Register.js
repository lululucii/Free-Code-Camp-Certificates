const checkCashRegister = (price, cash, cid) => {
    const actual_unit = {
      "PENNY": .01,
      "NICKEL": .05,
      "DIME": .10,
      "QUARTER": .25,
      "ONE": 1.00,
      "FIVE": 5.00,
      "TEN": 10.00,
      "TWENTY": 20.00,
      "ONE HUNDRED": 100.00
    }
    let total_cid = 0;
    for (let i of cid) {
      total_cid += i[1];
    }
    total_cid = total_cid.toFixed(2);
    let change_return = cash - price;
    const change_arr = [];
    if (change_return > total_cid) {
      return { status: "INSUFFICIENT_FUNDS", change: change_arr };
    } else if (change_return.toFixed(2) === total_cid) {
      return { status: "CLOSED", change: cid };
    } else {
      cid = cid.reverse();
      for (let i of cid) {
        let x = [i[0], 0];
        while (change_return >= actual_unit[i[0]] && i[1] > 0) {
          x[1] += actual_unit[i[0]];
          i[1] -= actual_unit[i[0]];
          change_return -= actual_unit[i[0]];
          change_return = change_return.toFixed(2);
        }
        if (x[1] > 0) {
          change_arr.push(x);
        }
      }
    }
    if (change_return > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
    return { status: "OPEN", change: change_arr};
  }

  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
