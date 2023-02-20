function a() {
  console.log("hi");
}

//

//

//
// var a = 10; //this

function a() {
  console.log(this, "from function");
  console.log("second a");
}

var user = {
  name: "ABC",
  getUserName: function () {
    console.log(this, "from object");
  },
};

a();

user.getUserName();

function redirectUser() {
  console.log("called");
  //logic
  window.location.href = "https://www.google.com/";
}

document.getElementById("ul").addEventListener("click", function (event) {
  console.log(event.target.innerText);
});

function getValues() {
  console.log(document.getElementById("tes").value);
}

window.addEventListener("resize", function (evnt) {
  console.log(evnt);
});
