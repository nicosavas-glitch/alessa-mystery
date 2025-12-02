// mystery.js - interaktives Alessa Quiz und Surprise
];


// ELEMENTE
const container = document.createElement('div');
container.style.cssText = 'background: rgba(255,255,255,0.95); padding:50px 40px; border-radius:30px; max-width:600px; text-align:center; box-shadow:0 15px 35px rgba(168,79,176,0.4); position:relative;';
document.body.style.cssText = 'margin:0; padding:0; height:100vh; display:flex; justify-content:center; align-items:center; font-family:Roboto, sans-serif; background: radial-gradient(circle at top left, #fceaff, #f9f5ff, #ffd6f0); overflow:hidden;';
document.body.appendChild(container);


const title = document.createElement('h1');
title.textContent = 'Alessa Mystery Experience';
title.style.cssText = 'font-family:Pacifico, cursive; font-size:3em; color:#a84fb0; text-shadow:3px 3px 8px rgba(168,79,176,0.5); margin-bottom:25px;';
container.appendChild(title);


const text = document.createElement('p');
text.style.cssText = 'font-size:1.5em; margin-bottom:30px; color:#4a1a4c; line-height:1.5;';
container.appendChild(text);


const nextBtn = document.createElement('button');
nextBtn.textContent = 'Weiter';
container.appendChild(nextBtn);


const passwordDiv = document.createElement('div');
passwordDiv.style.display='none';
const pwText = document.createElement('p');
pwText.textContent='Gib das geheime Wort ein, um die Überraschung zu erhalten:';
passwordDiv.appendChild(pwText);
const passwordInput = document.createElement('input');
passwordInput.type='password';
passwordInput.placeholder='Geheimes Wort';
passwordInput.style.cssText='padding:14px; font-size:18px; border-radius:15px; border:1px solid #ccc; width:85%; text-align:center; margin-top:20px; box-shadow: inset 0 2px 6px rgba(0,0,0,0.1);';
passwordDiv.appendChild(passwordInput);
const submitPw = document.createElement('button');
submitPw.textContent='Absenden';
submitPw.style.cssText='padding:16px 28px; border:none; border-radius:20px; background:linear-gradient(135deg,#a84fb0,#e88ed0); color:white; font-size:20px; font-weight:bold; margin-top:25px; cursor:pointer; box-shadow:0 8px 20px rgba(168,79,176,0.5);';
passwordDiv.appendChild(submitPw);
const pwMsg = document.createElement('p');
pwMsg.style.color='red';
pwMsg.style.marginTop='10px';
passwordDiv.appendChild(pwMsg);
container.appendChild(passwordDiv);


let index=0;


function showText(){
text.style.opacity=0;
text.style.transform='translateY(30px)';
setTimeout(()=>{
text.textContent = steps[index];
text.style.opacity=1;
text.style.transform='translateY(0)';
createHearts();
},300);
}


nextBtn.addEventListener('click',()=>{
index++;
if(index<steps.length){
showText();
} else {
nextBtn.style.display='none';
passwordDiv.style.display='block';
}
});


submitPw.addEventListener('click',()=>{
if(passwordInput.value.toUpperCase()===secretWord){
text.innerHTML = `Herzlichen Glückwunsch, Alessa! 🎉<br>Hier ist deine Überraschung: <a href='${songLink}' target='_blank'>Klicke hier für deinen Song</a>`;
passwordDiv.style.display='none';
} else {
pwMsg.textContent='Falsches Wort! Versuche es noch einmal.';
}
});


function createHearts(){
for(let i=0;i<4;i++){
const heart=document.createElement('div');
heart.style.cssText='position:absolute; width:25px; height:25px; background:red; transform:rotate(-45deg); animation:float 4s linear infinite;';
heart.style.left=Math.random()*90+'%';
const before=document.createElement('div');
before.style.cssText='content:""; position:absolute; width:25px; height:25px; background:red; border-radius:50%; top:-12px; left:0;';
const after=document.createElement('div');
after.style.cssText='content:""; position:absolute; width:25px; height:25px; background:red; border-radius:50%; top:0; left:12px;';
heart.appendChild(before); heart.appendChild(after);
document.body.appendChild(heart);
setTimeout(()=>heart.remove(),4000);
}
}


// HEART ANIMATION KEYFRAMES
const styleEl = document.createElement('style');
styleEl.textContent = '@keyframes float {0%{transform:translateY(0) rotate(-45deg); opacity:1;} 100%{transform:translateY(-400px) rotate(-45deg); opacity:0;}}';
document.head.appendChild(styleEl);


showText();