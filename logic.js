var acc = document.getElementsByClassName("jobs");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

function openSideMenu(){
	document.getElementById('side-menu').style.width = '200px';
    document.getElementById('main').style.marginRight = '200px';
}

function closeSideMenu(){
    document.getElementById('side-menu').style.width = '0';
    document.getElementById('main').style.marginRight = '0';
}