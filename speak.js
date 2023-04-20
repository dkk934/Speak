Btn = document.querySelector("button");
txt = document.querySelector("textarea");
Btn.addEventListener("click",function(){
    let ut = new SpeechSynthesisUtterance(txt.value);
    speechSynthesis.speak(ut);
});