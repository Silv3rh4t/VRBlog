function signUpShow()
{
  document.getElementById("signup").disabled= true;
  document.getElementById("signin").disabled= false;
  document.getElementById("in-form").hidden= true;
  document.getElementById("in-oauth").hidden= true;
  document.getElementById("up-form").hidden= false;
}
function logInShow() {
  document.getElementById("signup").disabled= false;
  document.getElementById("signin").disabled= true;
  document.getElementById("in-form").hidden= false;
  document.getElementById("in-oauth").hidden= false;
  document.getElementById("up-form").hidden= true;
}
