document.querySelector("#check").addEventListener("click", check);

function check() {
  const day = document.querySelector("#day").value.toLowerCase();

  if (day === "") {
    document.querySelector("#result").innerText = "ENTER TEXT PLEASE";
  } else if (day === "monday") {
    document.querySelector("#result").innerText = "STEADY";
  } else if (day === "tuesday" || day === "friday") {
    document.querySelector("#result").innerText = "WORKOUT";
  } else if (day === "wednesday") {
    document.querySelector("#result").innerText = "RECOVERY";
  } else if (day === "saturday") {
    document.querySelector("#result").innerText = "LONGRUN";
  } else {
    document.querySelector("#result").innerText = "REGULAR";
  }
}
