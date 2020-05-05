var mode = 1;
function toggleMode() {
  if(mode==1) {
    document.getElementById('mode').href="css/dark.css";
    mode = 0;
  }
  else {
    document.getElementById('mode').href="css/light.css";
    mode = 1;
  }

}
