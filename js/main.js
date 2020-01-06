var input = document.getElementsByClassName("form_input");
var textarea = document.getElementsByClassName("form_textarea");

for(var i=0;i<input.length;i++){
  input[i].addEventListener('keyup',function(){
    if(this.value.length>=1){
      this.nextElementSibling.classList.add("fijar");
    }
    else {
      this.nextElementSibling.classList.remove("fijar");
    }
  });
}

for(var i=0;i<textarea.length;i++){
  textarea[i].addEventListener('keyup',function(){
    if(this.value.length>=1){
      this.nextElementSibling.classList.add("fijar_textarea");
    }
    else {
      this.nextElementSibling.classList.remove("fijar_textarea");
    }
  });
}
