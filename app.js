// JavaScript eller jQuery

var button = document.createElement("button");
button.innerHTML = "Öppna login-rutan";
document.body.appendChild(button);

button.addEventListener("click", function openwrapper(){
  var wrapper = document.createElement("div");
  wrapper.style.backgroundColor = "#ccc";
  wrapper.style.maxWidth = "300px";
  wrapper.style.padding = "15px";

  var header = document.createElement("h1");
  header.innerHTML = "Login";
  header.style.textAlign = "center";

  var user = document.createElement("input");
  user.style.width = "100%";
  user.style.boxSizing = "border-box";
  user.style.marginBottom = "5px";

  var pass = document.createElement("input");
  pass.setAttribute("type", "password");
  pass.style.width = "100%";
  pass.style.boxSizing = "border-box";
  pass.style.marginBottom = "5px";

  var submit = document.createElement("input");
  submit.setAttribute("type", "submit");

  submit.addEventListener("click", function login(e){
    if(user.value == "Steve" && pass.value == "123"){
      alert("Välkommen!");
      getEmail();
      this.removeEventListener("click", login);
    }else{
      alert("Fel inloggningsuppgifter!");
    }
  });

  document.body.appendChild(wrapper);
  wrapper.appendChild(header);
  wrapper.appendChild(user);
  wrapper.appendChild(pass);
  wrapper.appendChild(submit);

  button.removeEventListener("click", openwrapper);
});

function getEmail(){
  $.get("https://jsonplaceholder.typicode.com/users/1", function(results) {
    var emailHeader = document.createElement("h2");
    emailHeader.innerHTML = "E-mail:";

    var email = document.createElement("p");
    email.innerHTML = results.email;

    document.body.appendChild(emailHeader);
    document.body.appendChild(email);
  });
}
