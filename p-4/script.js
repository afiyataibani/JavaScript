const userData = {
  user1: "1234", // user 1
  user2: "5678", // user 2
};

const accountBalance = {
  user1: 1000,
  user2: 2000,
};

let currentUser = localStorage.getItem("currentUser");
document.getElementById("user").innerHTML = `Welcome ${currentUser}...`;
function checkUser(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const pin = document.getElementById("pin").value;

  if (userData.hasOwnProperty(username) && userData[username] === pin) {
    currentUser = username;

    localStorage.setItem("currentUser", username);
    document.getElementById("atmForm").reset();
    document.getElementById("output").innerText = "";

    window.location.href = "atm.html";
  } else {
    document.getElementById("output").innerText = "Invalid username or pin";
  }
}

// printing current balance from local storage
if (currentUser) {
  document.getElementById(
    "current-balance"
  ).innerText = `$${accountBalance[currentUser]}`;
} else {
  document.getElementById("balance").innerText = "Please log in first.";
}

// function for deposit the amount
function deposit() {
  const depositAmount = parseFloat(prompt("Enter deposit amount : "));
  if (!isNaN(depositAmount) && depositAmount > 0) {
    accountBalance[currentUser] += depositAmount;
    document.getElementById("deposited-amount").innerText = `$${depositAmount}`;
    document.getElementById(
      "current-balance"
    ).innerText = `$${accountBalance[currentUser]}`;
  } else {
    document.getElementById("deposit").innerText = "Invalid amount";
  }
}

// function for withdraw the amount
function withdraw() {
  const withdrawAmount = parseFloat(prompt("Enter deposit amount : "));
  if (!isNaN(withdrawAmount) && withdrawAmount > 0) {
    accountBalance[currentUser] -= withdrawAmount;
    document.getElementById(
      "withdrawal-amount"
    ).innerText = `$${withdrawAmount}`;
    document.getElementById(
      "current-balance"
    ).innerText = `$${accountBalance[currentUser]}`;
  } else {
    document.getElementById("withdrawal-amount").innerText = "Invalid amount";
  }
}

// Function to handle logout
function logout() {
  window.location.href = "index.html";
}
