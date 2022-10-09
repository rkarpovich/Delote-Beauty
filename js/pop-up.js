let popUp = document.getElementById("myModal");
let btn = document.getElementById("link-pop-up");

btn.onclick = function (){
  popUp.style.display = "block";
  btn.style.display = "none"
}

let btnClose = document.getElementById("icon-close");

btnClose.onclick = function (){
  popUp.style.display = "none";
  btn.style.display = "block"
}

