function makeBubble(){
var clutter = "";

for(var i=1;i<=160;i++)
{
    var a = Math.floor(Math.random()*10);
    clutter +=   `<div class="bubble">${a}</div>`;
}

document.querySelector(".pbottom").innerHTML=clutter;

}

var sc=0;
var timer =60;
var hitnum=0;
function runtimer(){
   var final =  setInterval(function(){
        if(timer>0)
        {
        timer--;
        document.querySelector("#settime").textContent=timer;
        }else
        {
            clearInterval(final);
            document.querySelector(".pbottom").innerHTML="";
           var a= document.querySelector(".pbottom");
           a.innerHTML=`your score : ${sc}`
           a.style.color ="red";
           a.style.fontSize = "50px"
            
        }

    },1000);

}

function hitbutton(){
   hitnum = Math.floor(Math.random()*10);
   document.querySelector("#hitme").textContent=hitnum;
}
function incscore(){
    sc += 10; 
    document.querySelector("#scoreval").textContent = sc;
}
function decscore(){
   sc -= 5;
   document.querySelector("#scoreval").textContent=sc;
}

document.querySelector(".pbottom").addEventListener("click",function(dets){
var clickednum = Number(dets.target.textContent);
if(clickednum === hitnum)
{
incscore();
makeBubble();
hitbutton();
}
else{
    decscore();
}
});

// incscore();
hitbutton();
makeBubble();
runtimer();