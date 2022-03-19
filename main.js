inputNumber = document.getElementById("num");
pickNumber = document.getElementById("sub");
msg = document.getElementById("msg");

pickNumber.addEventListener("click", (e) => {
  e.preventDefault();

  if (inputNumber.value > 20 || inputNumber.value == 0) {
    msg.innerText = "Please pick a valid number";

    //setTimeout(() => msg.remove(), 3000);
  } else
    inputNumber.value % 2 == 0
      ? (msg.innerText = "Your Number is Even")
      : (msg.innerText = "Your Number is Odd");
});
