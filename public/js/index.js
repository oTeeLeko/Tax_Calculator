function requireStep1() {
  var salary = document.getElementById("salary_value").value;
  if (salary == null || salary == "") {
    return false;
  } else {
    return true;
  }
}
function Step_test(step_id) {
  var result = requireStep1();
  if (result == true) {
    next_page(step_id);
  } else {
    alert("กรุณากรอกเงินเดือน");
    document.getElementById("salary_value").style.borderColor = "red";
  }
}

function next_page(step_id) {
  for (var i = 1; i <= 6; i++) {
    if (step_id == i) {
      document.getElementById("step" + step_id).style.display = "";
    } else {
      document.getElementById("step" + i).style.display = "none";
    }
    if (step_id >= i) {
      document.getElementById("a_" + i).className = "selected";
      document.getElementById("b_" + i).className = "block_text";
    } else {
      document.getElementById("a_" + i).className = "disabled";
      document.getElementById("b_" + i).className = "block_disabled";
    }
  }
  if (step_id == 6) {
    netIncome =
      salary * 12 +
      bonus +
      others -
      100000 -
      60000 -
      deducated -
      marry -
      pvd -
      social -
      home -
      lifeInsurance -
      lifeInsuranceParent -
      healthInsurance -
      pension -
      gpf -
      nsf -
      teacher -
      childB * 30000 -
      childA * 60000 -
      disablity_child * 60000;
    if (netIncome < 0) {
      netIncome = 0;
    }
    document.getElementById("net_income").innerHTML =
      netIncome.toLocaleString("en-US");
    if (netIncome <= 150000) {
      tax = 0;
    } else if (netIncome >= 150001 && netIncome <= 300000) {
      tax = (netIncome - 150000) * 0.05;
    } else if (netIncome >= 300001 && netIncome <= 500000) {
      tax = (netIncome - 300000) * 0.1 + 7500;
    } else if (netIncome >= 500001 && netIncome <= 750000) {
      tax = (netIncome - 500000) * 0.15 + 27500;
    } else if (netIncome >= 750001 && netIncome <= 1000000) {
      tax = (netIncome - 750000) * 0.2 + 65000;
    } else if (netIncome >= 1000001 && netIncome <= 2000000) {
      tax = (netIncome - 1000000) * 0.25 + 115000;
    } else if (netIncome >= 2000001 && netIncome <= 5000000) {
      tax = (netIncome - 2000000) * 0.3 + 365000;
    } else {
      tax = (netIncome - 5000000) * 0.35 + 1265000;
    }
    document.getElementById("tax").innerHTML = tax.toLocaleString("en-US");
    document.getElementById("remain_total").innerHTML =
      tax.toLocaleString("en-US");

    labelSSF = 500000 - pvd - pension - gpf - nsf - teacher - rmf;
    if (labelSSF > (salary * 12 + bonus + others) * 0.3) {
      if ((salary * 12 + bonus + others) * 0.3 > 200000) {
        labelSSF = 200000;
      } else labelSSF = (salary * 12 + bonus + others) * 0.3;
    } else if (labelSSF < (salary * 12 + bonus + others) * 0.3) {
      if (labelSSF > 200000) {
        labelSSF = 200000;
      }
    }
    document.getElementById("ssf_label").innerHTML =
      labelSSF.toLocaleString("en-US");

    labelRMF = 500000 - pvd - pension - gpf - nsf - teacher - ssf;
    if (labelRMF > (salary * 12 + bonus + others) * 0.3) {
      if ((salary * 12 + bonus + others) * 0.3 > 500000) {
        labelSSF = 500000;
      } else labelRMF = (salary * 12 + bonus + others) * 0.3;
    } else if (labelRMF < (salary * 12 + bonus + others) * 0.3) {
      if (labelSSF > 500000) {
        labelSSF = 500000;
      }
    }
    document.getElementById("rmf_label").innerHTML =
      labelRMF.toLocaleString("en-US");

    let a = 500000 - pvd - pension - gpf - nsf - teacher;
    let b;
    b = netIncome - a;
    if (b <= 150000) {
      save_tax = 0;
    } else if (b >= 150001 && b <= 300000) {
      save_tax = (b - 150000) * 0.05;
    } else if (b >= 300001 && b <= 500000) {
      save_tax = (b - 300000) * 0.1 + 7500;
    } else if (b >= 500001 && b <= 750000) {
      save_tax = (b - 500000) * 0.15 + 27500;
    } else if (b >= 750001 && b <= 1000000) {
      save_tax = (b - 750000) * 0.2 + 65000;
    } else if (b >= 1000001 && b <= 2000000) {
      save_tax = (b - 1000000) * 0.25 + 115000;
    } else if (b >= 2000001 && b <= 5000000) {
      save_tax = (b - 2000000) * 0.3 + 365000;
    } else {
      save_tax = (b - 5000000) * 0.35 + 1265000;
    }
    save_tax = tax - save_tax;
    document.getElementById("save_tax_total").innerHTML =
      save_tax.toLocaleString("en-US");

    let z =
      salary * 12 +
      bonus +
      others -
      100000 -
      60000 -
      deducated -
      marry -
      childB * 30000 -
      childA * 60000 -
      disablity_child * 60000;
    let x = z - 500000 - (z - 500000) * 0.1;
    let y;

    if (x <= 150000) {
      y = 0;
    } else if (x >= 150001 && x <= 300000) {
      y = (x - 150000) * 0.05;
    } else if (x >= 300001 && x <= 500000) {
      y = (x - 300000) * 0.1 + 7500;
    } else if (x >= 500001 && x <= 750000) {
      y = (x - 500000) * 0.15 + 27500;
    } else if (x >= 750001 && x <= 1000000) {
      y = (x - 750000) * 0.2 + 65000;
    } else if (x >= 1000001 && x <= 2000000) {
      y = (x - 1000000) * 0.25 + 115000;
    } else if (x >= 2000001 && x <= 5000000) {
      y = (x - 2000000) * 0.3 + 365000;
    } else {
      y = (x - 5000000) * 0.35 + 1265000;
    }
    document.getElementById("remain").innerHTML = y.toLocaleString("en-US");

    return [netIncome, tax, labelSSF, labelRMF, save_tax];
  }
  if (step_id == 1) {
    document.getElementById("back").style.display = "none";
    document.getElementById("next").style.display = "";
    document.getElementById("new").style.display = "none";
  } else if (step_id == 6) {
    document.getElementById("back").style.display = "";
    document.getElementById("next").style.display = "none";
    document.getElementById("new").style.display = "";
  } else {
    document.getElementById("back").style.display = "";
    document.getElementById("next").style.display = "";
    document.getElementById("new").style.display = "none";
  }
  // salary = document.getElementById("salary_value").value;
  // document.getElementById("ssf_input").value = salary;
  // document.getElementById("net_income").innerHTML = salary;

  $("#next").attr("onclick", "Step_test(" + (step_id + 1) + ")");
  // document
  //   .getElementById("next")
  //   .setAttribute("onclick", "Step_test(" + (step_id + 1) + ")");
  $("#new").attr("onclick", "Step_test(" + 1 + ")");
  // document
  //   .getElementById("new")
  //   .setAttribute("onclick", "Step_test(" + 1 + ")");
  $("#back").attr("onclick", "Step_test(" + (step_id - 1) + ")");
  // document
  //   .getElementById("back")
  //   .setAttribute("onclick", "Step_test(" + (step_id - 1) + ")");
}

function showDiv(status_id) {
  for (let i = 1; i <= 4; i++) {
    if (status_id.value < i) {
      document.getElementById("0" + i).style.display = "none";
      if (i == 3) {
        document.getElementById(i).style.display = "none";
      }
    } else {
      document.getElementById("0" + i).style.display = "";
      if (i == 3) {
        document.getElementById(i).style.display = "";
      }
    }
  }
  if (status_id.value >= 2) {
    document.getElementById("disablity_div").style.display = "";
  } else {
    document.getElementById("disablity_div").style.display = "none";
  }
  if (status_id.value == 4) {
    return (marry = 60000);
  } else {
    return (marry = 0);
  }
}

function haveChild(child) {
  if (child.value == 1) {
    document.getElementById("havechild").style.display = "";
    return (firstchild = 30000);
  } else {
    document.getElementById("havechild").style.display = "none";
    return (firstchild = 0);
  }
}

document.getElementById("disablity").onclick = function () {
  if (document.getElementById("disablity").checked == true) {
    document.getElementById("disablity_input").style.display = "";
  } else if (document.getElementById("disablity").checked == false)
    document.getElementById("disablity_input").style.display = "none";
};

let salary = 0;
let bonus = 0;
let others = 0;
let marry = 0;
let firstchild = 0;
let childB = 0;
let childA = 0;
let disablity_child = 0;
let deducated = 0;
let pvd = 0;
let social = 0;
let home = 0;
let lifeInsurance = 0;
let healthInsurance = 0;
let lifeInsuranceParent = 0;
let pension = 0;
let gpf = 0;
let nsf = 0;
let teacher = 0;
let ssf = 0;
let rmf = 0;
let netIncome = 0;
let tax = 0;
let labelSSF = 0;
let labelRMF = 0;
let save_tax = 0;
let invest = 0;
let donateG = 0;
let donateP = 0;
let remain_total = 0;
let donate = 0;
let c = 0;
let o = 0;

function isNum(evt) {
  var ch = String.fromCharCode(evt.which);
  if (!/[0-9]/.test(ch)) {
    evt.preventDefault();
  }
}

document.getElementById("salary_value").oninput = function () {
  salary = document.getElementById("salary_value").value;
  salary = Number(salary);
  return salary;
};
document.getElementById("bonus_value").oninput = function () {
  bonus = document.getElementById("bonus_value").value;
  bonus = Number(bonus);
  return bonus;
};
document.getElementById("other_value").oninput = function () {
  others = document.getElementById("other_value").value;
  others = Number(others);
  return others;
};
document.getElementById("before").oninput = function () {
  childB = document.getElementById("before").value;
  childB = Number(childB);
  return childB;
};
document.getElementById("after").oninput = function () {
  childA = document.getElementById("after").value;
  childA = Number(childA);
  return childA;
};
document.getElementById("disablity_child").oninput = function () {
  disablity_child = document.getElementById("disablity_child").value;
  disablity_child = Number(childA);
  return disablity_child;
};

document.getElementById("pvd").addEventListener("keyup", function (e) {
  pvd = e.target.value;
  pvd = Number(pvd);
  if (pvd > salary * 0.15) {
    this.value = salary * 0.15;
    pvd = Number(this.value);
  } else if (pvd + pension + gpf + nsf + teacher + ssf + rmf > 500000) {
    this.value = 500000 - pension - gpf - nsf - teacher - ssf - rmf;
    pvd = Number(this.value);
  }
  return pvd;
});

document.getElementById("gpf").addEventListener("keyup", function (e) {
  gpf = e.target.value;
  gpf = Number(gpf);
  if (gpf > (salary * 12 + bonus + others) * 0.15) {
    this.value = (salary * 12 + bonus + others) * 0.15;
    gpf = Number(this.value);
  } else if (gpf + pvd + pension + nsf + teacher + ssf + rmf > 500000) {
    this.value = 500000 - pvd - pension - nsf - teacher - ssf - rmf;
    gpf = Number(this.value);
  }
  return gpf;
});

document.getElementById("nsf").addEventListener("keyup", function (e) {
  nsf = e.target.value;
  nsf = Number(nsf);
  if (nsf > 13200) {
    this.value = 13200;
    nsf = Number(this.value);
  } else if (nsf + pvd + pension + gpf + teacher + ssf + rmf > 500000) {
    this.value = 500000 - pvd - pension - gpf - teacher - ssf - rmf;
    nsf = Number(this.value);
  }
  return nsf;
});

document.getElementById("teacher").addEventListener("keyup", function (e) {
  teacher = e.target.value;
  teacher = Number(teacher);
  if (teacher > (salary * 12 + bonus + others) * 0.15) {
    this.value = (salary * 12 + bonus + others) * 0.15;
    teacher = Number(this.value);
  } else if (teacher + pvd + pension + gpf + nsf + ssf + rmf > 500000) {
    this.value = 500000 - pvd - pension - gpf - nsf - ssf - rmf;
    teacher = Number(this.value);
  }
  return teacher;
});

document.getElementById("social").addEventListener("keyup", function (e) {
  social = e.target.value;
  social = Number(social);
  if (social > 9000) {
    this.value = 9000;
    social = Number(this.value);
  }
  return social;
});

document.getElementById("home").addEventListener("keyup", function (e) {
  home = e.target.value;
  home = Number(home);
  if (home > 100000) {
    this.value = 100000;
    home = Number(this.value);
  }
  return home;
});

document.getElementById("ssf").addEventListener("keyup", function (e) {
  let total;
  ssf = e.target.value;
  ssf = Number(ssf);
  if (ssf > (salary * 12 + bonus + others) * 0.3) {
    if (ssf > 200000) {
      this.value = 200000;
      ssf = Number(this.value);
    } else {
      this.value = (salary * 12 + bonus + others) * 0.3;
      ssf = Number(this.value);
    }
  } else if (ssf + pvd + pension + gpf + nsf + teacher + rmf > 500000) {
    this.value = 500000 - pvd - pension - gpf - nsf - teacher - rmf;
    ssf = Number(this.value);
  }

  if (netIncome - ssf - rmf <= 150000) {
    this.value = netIncome - 150000 - rmf;
    ssf = Number(this.value);
  }
  total = ssf + rmf;
  document.getElementById("invest").innerHTML = total.toLocaleString("en-US");
  let a = ssf + rmf + pvd + pension + gpf + nsf + teacher;
  let b;
  b = netIncome - a;
  if (b <= 150000) {
    c = 0;
  } else if (b >= 150001 && b <= 300000) {
    c = (b - 150000) * 0.05;
  } else if (b >= 300001 && b <= 500000) {
    c = (b - 300000) * 0.1 + 7500;
  } else if (b >= 500001 && b <= 750000) {
    c = (b - 500000) * 0.15 + 27500;
  } else if (b >= 750001 && b <= 1000000) {
    c = (b - 750000) * 0.2 + 65000;
  } else if (b >= 1000001 && b <= 2000000) {
    c = (b - 1000000) * 0.25 + 115000;
  } else if (b >= 2000001 && b <= 5000000) {
    c = (b - 2000000) * 0.3 + 365000;
  } else {
    c = (b - 5000000) * 0.35 + 1265000;
  }
  c = tax - c;
  document.getElementById("save_tax").innerHTML = c.toLocaleString("en-US");

  let m = ssf + rmf + donateG + donateP;
  let n;

  n = netIncome - m;
  if (n <= 150000) {
    o = 0;
  } else if (n >= 150001 && n <= 300000) {
    o = (n - 150000) * 0.05;
  } else if (n >= 300001 && n <= 500000) {
    o = (n - 300000) * 0.1 + 7500;
  } else if (n >= 500001 && n <= 750000) {
    o = (n - 500000) * 0.15 + 27500;
  } else if (n >= 750001 && n <= 1000000) {
    o = (n - 750000) * 0.2 + 65000;
  } else if (n >= 1000001 && n <= 2000000) {
    o = (n - 1000000) * 0.25 + 115000;
  } else if (n >= 2000001 && n <= 5000000) {
    o = (n - 2000000) * 0.3 + 365000;
  } else {
    o = (n - 5000000) * 0.35 + 1265000;
  }

  document.getElementById("remain_total").innerHTML = o.toLocaleString("en-US");
  return [ssf, c, o];
});

document.getElementById("rmf").addEventListener("keyup", function (e) {
  let total;
  rmf = e.target.value;
  rmf = Number(rmf);
  if (rmf > (salary * 12 + bonus + others) * 0.3) {
    if (rmf > 500000) {
      this.value = 500000;
      rmf = Number(this.value);
    } else {
      this.value = (salary * 12 + bonus + others) * 0.3;
      rmf = Number(this.value);
    }
  } else if (rmf + pvd + pension + gpf + nsf + teacher + ssf > 500000) {
    this.value = 500000 - pvd - pension - gpf - nsf - teacher - ssf;
    rmf = Number(this.value);
  }
  if (netIncome - ssf - rmf <= 150000) {
    this.value = netIncome - 150000 - ssf;
    rmf = Number(this.value);
  }

  total = ssf + rmf;
  document.getElementById("invest").innerHTML = total.toLocaleString("en-US");
  let a = ssf + rmf + pvd + pension + gpf + nsf + teacher;
  let b;
  b = netIncome - a;
  if (b <= 150000) {
    c = 0;
  } else if (b >= 150001 && b <= 300000) {
    c = (b - 150000) * 0.05;
  } else if (b >= 300001 && b <= 500000) {
    c = (b - 300000) * 0.1 + 7500;
  } else if (b >= 500001 && b <= 750000) {
    c = (b - 500000) * 0.15 + 27500;
  } else if (b >= 750001 && b <= 1000000) {
    c = (b - 750000) * 0.2 + 65000;
  } else if (b >= 1000001 && b <= 2000000) {
    c = (b - 1000000) * 0.25 + 115000;
  } else if (b >= 2000001 && b <= 5000000) {
    c = (b - 2000000) * 0.3 + 365000;
  } else {
    c = (b - 5000000) * 0.35 + 1265000;
  }
  c = tax - c;
  document.getElementById("save_tax").innerHTML = c.toLocaleString("en-US");

  let m = ssf + rmf + donateG + donateP;
  let n;
  n = netIncome - m;
  if (n <= 150000) {
    o = 0;
  } else if (n >= 150001 && n <= 300000) {
    o = (n - 150000) * 0.05;
  } else if (n >= 300001 && n <= 500000) {
    o = (n - 300000) * 0.1 + 7500;
  } else if (n >= 500001 && n <= 750000) {
    o = (n - 500000) * 0.15 + 27500;
  } else if (n >= 750001 && n <= 1000000) {
    o = (n - 750000) * 0.2 + 65000;
  } else if (n >= 1000001 && n <= 2000000) {
    o = (n - 1000000) * 0.25 + 115000;
  } else if (n >= 2000001 && n <= 5000000) {
    o = (n - 2000000) * 0.3 + 365000;
  } else {
    o = (n - 5000000) * 0.35 + 1265000;
  }

  document.getElementById("remain_total").innerHTML = o.toLocaleString("en-US");
  return [rmf, c, o];
});

document
  .getElementById("lifeInsurance")
  .addEventListener("keyup", function (e) {
    lifeInsurance = e.target.value;
    lifeInsurance = Number(lifeInsurance);
    if (lifeInsurance > 100000) {
      this.value = 100000;
      lifeInsurance = Number(this.value);
    } else if (lifeInsurance + healthInsurance > 100000) {
      this.value = 100000 - healthInsurance;
      lifeInsurance = Number(this.value);
    }
    return lifeInsurance;
  });

document
  .getElementById("healthInsurance")
  .addEventListener("keyup", function (e) {
    healthInsurance = e.target.value;
    healthInsurance = Number(healthInsurance);
    if (healthInsurance > 25000) {
      this.value = 25000;
      healthInsurance = Number(this.value);
    } else if (healthInsurance + lifeInsurance > 100000) {
      this.value = 100000 - lifeInsurance;
      healthInsurance = Number(this.value);
    }
    return healthInsurance;
  });

document
  .getElementById("lifeInsuranceParent")
  .addEventListener("keyup", function (e) {
    lifeInsuranceParent = e.target.value;
    lifeInsuranceParent = Number(lifeInsuranceParent);
    if (lifeInsuranceParent > 15000) {
      this.value = 15000;
      lifeInsuranceParent = Number(this.value);
    }
    return lifeInsuranceParent;
  });

document.getElementById("pension").addEventListener("keyup", function (e) {
  pension = e.target.value;
  pension = Number(pension);
  if (pension > (salary * 12 + bonus + others) * 0.15) {
    this.value = (salary * 12 + bonus + others) * 0.15;
    pension = Number(this.value);
  } else if (pension + lifeInsurance > 300000) {
    this.value = 300000 - lifeInsurance;
    pension = Number(this.value);
  } else if (pension + pvd + gpf + nsf + ssf + rmf > 500000) {
    this.value = 500000 - pvd - gpf - nsf - ssf - rmf - teacher;
    pension = Number(this.value);
  }
  return pension;
});

function deducate(checkbox) {
  if (checkbox.checked == true) {
    return (deducated += 30000);
  } else {
    return (deducated -= 30000);
  }
}

function deducateNomoney(checkbox) {
  if (checkbox.checked == true) {
    return (deducated += 60000);
  } else {
    return (deducated -= 60000);
  }
}

document.getElementById("donateG").addEventListener("keyup", function (e) {
  donateG = e.target.value;
  donateG = Number(donateG);
  if (donateG * 2 > (netIncome - ssf - rmf) * 0.1) {
    this.value = ((netIncome - ssf - rmf) * 0.1) / 2;
    donateG = Number(this.value);
  }
  if (donateG * 2 + donateP > (netIncome - ssf - rmf) * 0.1) {
    this.value = ((netIncome - ssf - rmf) * 0.1 - donateP) / 2;
    donateG = Number(this.value);
  }

  let a = ssf + rmf + donateG * 2 + donateP;
  let b;
  b = netIncome - a;
  if (b <= 150000) {
    donate = 0;
  } else if (b >= 150001 && b <= 300000) {
    donate = (b - 150000) * 0.05;
  } else if (b >= 300001 && b <= 500000) {
    donate = (b - 300000) * 0.1 + 7500;
  } else if (b >= 500001 && b <= 750000) {
    donate = (b - 500000) * 0.15 + 27500;
  } else if (b >= 750001 && b <= 1000000) {
    donate = (b - 750000) * 0.2 + 65000;
  } else if (b >= 1000001 && b <= 2000000) {
    donate = (b - 1000000) * 0.25 + 115000;
  } else if (b >= 2000001 && b <= 5000000) {
    donate = (b - 2000000) * 0.3 + 365000;
  } else {
    donate = (b - 5000000) * 0.35 + 1265000;
  }

  document.getElementById("remain_total").innerHTML =
    donate.toLocaleString("en-US");
  return [donateG, donate];
});

document.getElementById("donateP").addEventListener("keyup", function (e) {
  donateP = e.target.value;
  donateP = Number(donateP);
  if (donateP > (netIncome - ssf - rmf) * 0.1) {
    this.value = (netIncome - ssf - rmf) * 0.1;
    donateP = Number(this.value);
  }
  if (donateG * 2 + donateP > (netIncome - ssf - rmf) * 0.1) {
    this.value = (netIncome - ssf - rmf) * 0.1 - donateG * 2;
    donateP = Number(this.value);
  }

  let a = ssf + rmf + donateG * 2 + donateP;
  let b;
  b = netIncome - a;
  if (b <= 150000) {
    donate = 0;
  } else if (b >= 150001 && b <= 300000) {
    donate = (b - 150000) * 0.05;
  } else if (b >= 300001 && b <= 500000) {
    donate = (b - 300000) * 0.1 + 7500;
  } else if (b >= 500001 && b <= 750000) {
    donate = (b - 500000) * 0.15 + 27500;
  } else if (b >= 750001 && b <= 1000000) {
    donate = (b - 750000) * 0.2 + 65000;
  } else if (b >= 1000001 && b <= 2000000) {
    donate = (b - 1000000) * 0.25 + 115000;
  } else if (b >= 2000001 && b <= 5000000) {
    donate = (b - 2000000) * 0.3 + 365000;
  } else {
    donate = (b - 5000000) * 0.35 + 1265000;
  }
  document.getElementById("remain_total").innerHTML =
    donate.toLocaleString("en-US");
  return [donateP, donate];
});
