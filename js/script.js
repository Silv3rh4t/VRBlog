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

$("a.sic").click(function () {
    $(".search-toggle").animate({
        width: 'toggle'
    });
});
