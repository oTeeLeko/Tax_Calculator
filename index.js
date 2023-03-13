let salary;
let bonus;
let other_income;

function getvalue() {
  salary = document.getElementById("salary_value").value;
  bonus = document.getElementById("bonus_value").value;
  other_income = document.getElementById("other_value").value;
}
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
      document.getElementById("step" + step_id).style.display = "flex";
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
  if (step_id == 1) {
    document.getElementById("back").style.display = "none";
    document.getElementById("next").style.display = "inline-block";
    document.getElementById("new").style.display = "none";
  } else if (step_id == 6) {
    document.getElementById("back").style.display = "inline-block";
    document.getElementById("next").style.display = "none";
    document.getElementById("new").style.display = "inline-block";
  } else {
    document.getElementById("back").style.display = "inline-block";
    document.getElementById("next").style.display = "inline-block";
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
