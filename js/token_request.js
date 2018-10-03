//ajax function to get CSRF token for current session
function tokenRequest(cookie){
  var c_data = cookie;
  $.ajax({
    type: "POST",
    url: 'Token_Issuer.php',
    data: {cookieValue: c_data},
    dataType: 'HTML',
    success: function (test){
      //set received CSRF token in hidden field in Home.php page form
      document.getElementById("MyToken").setAttribute("value", test);
    },
    error: function(){
      alert("Invalid Token!!!");
    }
  });
}
