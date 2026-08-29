let speech = new SpeechSynthesisUtterance();
let btnn = document.querySelector("button");
let voices = [];
let voiceslect = document.querySelector("select");
window.speechSynthesis.onvoiceschanged = () =>{
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    voices.forEach((voice, i) => (voiceslect.options[i] = new Option(voice.name, i))
)
}
voiceslect.addEventListener("change",() =>{
    speech.voice = voices[voiceslect.value];
})
document.querySelector("button").addEventListener("click",()=>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
})