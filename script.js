const btn=document.querySelector("#btn")
const content=document.querySelector("#content")
const voice=document.querySelector("#voice")

function speak(text){
    let text_speak= new SpeechSynthesisUtterance(text);
    text_speak.rate=1;
    text_speak.pitch=1;
    text_speak.volume=1;
    text_speak.lang="hi-IN"
    window.speechSynthesis.speak(text_speak);
}

function wishme() {
    let day = new Date();
    let hours=day.getHours();
    if(hours>0 && hours <12){
        speak("good morning")
    }
    else if(hours>=12 && hours <=16){
        speak("good afternoon")
    }
     else{
       speak("good evening")
     }
}

// window.addEventListener("load",()=>{
//     wishme()
// })

let speechrego= window.SpeechRecognition || window.webkitSpeechRecognition
let rego= new speechrego()
rego.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript  =event.results[currentIndex][0].transcript
    content.innerText=transcript;
    takecommand(transcript.toLowerCase())
    

}

btn.addEventListener("click",()=>{
    rego.start()
    btn.style.display="none"
    voice.style.display="block"
})

// function takecommand(msg){
//    btn.style.display="flex"
//    voice.style.display="none"
//    if(msg.includes("hi")|| msg.includes("hello")||msg.includes("hey")){
//     speak("hello! what can i help you? ")
//      }
// else if (msg.includes("who are you")||msg.includes(" jarvis who are you")){
//     speak("i am a virtual assistant created by Tushar Roy, who is currently a enginerring student from I T E R , soa university")
//      }
// else if(msg.includes("open youtube")){
//         speak("opening youtube...")
//         window.open("https://www.youtube.com/","_blank")
//      }

//      else if(msg.includes("open google")){
//         speak("opening google...")
//         window.open("https://www.google.com/","_blank")
//      }

//      else if(msg.includes("open facebook")){
//         speak("opening facebook...")
//         window.open("https://www.facebook.com/","_blank")
//      }
//      else if(msg.includes("open instagram")){
//         speak("opening youtube")
//         window.open("https://www.instagram.com/","_blank")
//      }
//      else{
//         let finaltext="this is what i found on internet regarding "+msg.replace("jarvis","").trim();
//         speak(finaltest)
//         window.open(`https://www.google.com/search?q=${msg.replace("jarvis","").trim()}`,"_blank")
//      }
// }

function takecommand(msg) {
    btn.style.display = "flex";
    voice.style.display = "none";

    msg = msg.toLowerCase(); // normalize input to lowercase

    if (msg.includes("hi") || msg.includes("hello") || msg.includes("hey")) {
        speak("hello! what can I help you?");
    } 
    else if (msg.includes("who are you") || msg.includes("jarvis who are you")) {
        speak("I am a virtual assistant created by Tushar Roy, who is currently an engineering student from I T E R, SOA University.");
    } 
    else if (msg.includes("open youtube")) {
        speak("Opening YouTube...");
        window.open("https://www.youtube.com/", "_blank");
    } 
    else if (msg.includes("open google")) {
        speak("Opening Google...");
        window.open("https://www.google.com/", "_blank");
    } 
    else if (msg.includes("open facebook")) {
        speak("Opening Facebook...");
        window.open("https://www.facebook.com/", "_blank");
    } 
    else if (msg.includes("open instagram")) {
        speak("Opening Instagram...");
        window.open("https://www.instagram.com/", "_blank");
    } 
    else {
        // Fallback logic for unknown queries
        const cleanedMsg = msg.replace(/jarvis/g, "").trim(); // remove all "jarvis"
        const finaltext = `This is what I found on the internet regarding ${cleanedMsg}`;
        speak(finaltext);
        window.open(`https://www.google.com/search?q=${encodeURIComponent(cleanedMsg)}`, "_blank");
    }
}
