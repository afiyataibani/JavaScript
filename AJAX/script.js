var url = "https://jsonplaceholder.typicode.com/user";

var fetch = document.getElementById("fetch");

fetch.addEventListener("click", buttonHandler);

function buttonHandler() {
  const xhr = new XMLHttpRequest();

  // Open
  xhr.open("GET", url, true);

  // On Progress
  xhr.onprogress = function () {
    console.log("On Progress...");
  };

  // On Load
  xhr.onload = function () {
    if (this.status == 200) {
      console.log(this.responseText);
    } else {
      console.log(this.status);
      console.log("Data Not Found");
    }
  };

  // Send
  xhr.send();
}
