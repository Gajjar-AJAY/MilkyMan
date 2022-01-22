var model_mobile = document.getElementById("login_model_for_mobile");
var btn_mobile = document.getElementById("mobile_singin");
var close_btn = document.getElementsByClassName("close_btn")[0];
btn_mobile.onclick = function() {
  model_mobile.style.display = "block";
}

window.onclick = function(event){
	if (event.target == model_mobile) {
  		model_mobile.style.display = "block";
	}
}

close_btn.onclick = function() {
  model_mobile.style.display = "none";
}