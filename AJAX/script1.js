var url = "https://dummy.restapiexample.com/api/v1/create";

var fetch = document.getElementById("fetch");

fetch.addEventListener("click", buttonHandler);

function buttonHandler() {
  const xhr = new XMLHttpRequest();

  // Get Headers
  xhr.getAllResponseHeaders("Content-Type", "application/json");

  // Open
  xhr.open("POST", url, true);

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

  // Passing Parameters
  params = {
    name: "Afiya",
    Age: "18",
    Salary: "12234",
  };

  // Send the request
  xhr.send(params);
  console.log("End Of Program");
}
