
var textEdit = document.getElementById("textEdit");
var button = document.getElementById("button");
var textView = document.getElementById("textView");

if(button!=null){
  button.addEventListener("click", function(){
    localStorage.mao = textEdit.value;
  });
}


if(textView!=null){

    textView.innerHTML = localStorage.mao;
  
}


console.log(localStorage.mao);
