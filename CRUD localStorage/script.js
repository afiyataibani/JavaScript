var input_text_key = document.getElementById("input_text_key");
var input_text = document.getElementById("input_text");
var save_text = document.getElementById("save_text");
var read_text = document.getElementById("read_text");
var storage_value = document.getElementById("storage_value");
var update_text = document.getElementById("update_text");
var delete_text = document.getElementById("delete_text");
var read_all_text = document.getElementById("read_all_text");
var all_storage_values = document.getElementById("all_storage_values");

save_text.onclick = function () {
  localStorage.setItem(input_text_key.value, input_text.value);
};

read_text.onclick = function () {
  storage_value.textContent = localStorage.getItem(input_text_key.value);
};

// update_text.onclick = function () {
//   if (localStorage.getItem(input_text_key.value) !== null) {
//     localStorage.setItem(input_text_key.value, input_text.value);
//     alert("Text updated successfully!");
//   } else {
//     alert("Key does not exist.");
//   }
// };

delete_text.onclick = function () {
  localStorage.removeItem(input_text_key.value);
};

read_all_text.onclick = function () {
  var keys = Object.keys(localStorage);
  all_storage_values.innerHTML = "";
  for (var key of keys) {
    var value = localStorage.getItem(key);
    console.log(value);
    all_storage_values.innerHTML += `<h3>${key}: ${value}</h3>`;
  }
};

// read_all_text.onclick = function () {
//   var keys = Object.keys(localStorage);
//   all_storage_values.innerHTML = "";
//   for (var key of keys) {
//     var value = localStorage.getItem(key);
//     var h3 = document.createElement("h3");
//     // console.log(h3)
//     h3.textContent = key + ": " + value;
//     console.log(h3)
//     // all_storage_values.appendChild(h3);
//   }
// };

update_text.onclick = function () {
  if (input_text_key.value) {
    input_text_key.innerHTML = localStorage.getItem(input_text_key.value);
    input_text = localStorage.getItem(input_text.value);
  } else {
    localStorage.setItem(input_text_key.value, input_text.value);
  }
};
