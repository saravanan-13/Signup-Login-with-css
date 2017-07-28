 var app = angular.module('signup', ['UserValidation']);
 angular.module('UserValidation', []);

 function insert() {

     var name = document.getElementById('name').value;
     var user = document.getElementById('user').value;
     var email = document.getElementById('email').value;
     var pass1 = document.getElementById('pass1').value;
     var pass2 = document.getElementById('pass2').value;
     var phone = document.getElementById('phone').value;

     if (name == '' || user == '' || email == '' || pass1 == '' || pass2 == '' || phone == '') {
         alert("Fill in all fields...!");
     } else {
         localStorage.username = document.getElementById('user').value;
         localStorage.password = document.getElementById('pass1').value;
         alert("Signed Up successfully !");
         document.getElementById("myform").reset();
         window.location.href = "login.html";
     }
 }

 function verify() {

     var user = document.getElementById('user').value;
     var pass = document.getElementById('pass').value;
     if (user == '' || pass == '') {
         alert("Fill in all fields..!");
     } else if (localStorage.username == user && localStorage.password == pass) {
         alert("Welcome " + user);
         document.getElementById("myform").reset();
         window.location.href = "welcome.html";

     } else {
         alert("Wrong User");
     }
 }