let stats=document.querySelectorAll(".stat .data-goal");
let statSection=document.getElementById("stats");
let started=false;
function startCount(el){
    let goal=el.getAttribute('data-goal');
    console.log(goal);
    let count=setInterval(() => {
        el.textContent++;
        if(el.textContent==goal){
            clearInterval(count);
        }
    }, 2000/goal);
}

let up=document.getElementsByClassName("up")[0];

window.onscroll=function(){
    this.scrollY>=1000?up.classList.add("show"):up.classList.remove("show");
    if(window.scrollY >= statSection.offsetTop){
        if(!started){
            stats.forEach((stat) => startCount(stat));
        }
        started=true;
    }
}
up.onclick=function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    }
    )
};

let targetDate=new Date("Jun 1, 2022 23:59:59").getTime();
let counterDate=setInterval(()=>{
    let dateNow=new Date().getTime();
    let dateDiff=targetDate - dateNow;
    let days=Math.floor(dateDiff/(1000*60*60*24));
    let hours=Math.floor(dateDiff % (1000*60*60*24) / (1000*60*60));
    let minutes=Math.floor(dateDiff % (1000*60*60) / (1000*60));
    let seconds=Math.floor(dateDiff % (1000*60) / (1000));
    document.querySelector(".time .unit .days").innerHTML=days<10?`0${days}`:days;
    document.querySelector(".time .unit .hours").innerHTML=hours<10?`0${hours}`:hours;
    document.querySelector(".time .unit .minutes").innerHTML=minutes<10?`0${minutes}`:minutes;
    document.querySelector(".time .unit .seconds").innerHTML=seconds<10?`0${seconds}`:seconds;
    if(dateDiff<=0){
        clearInterval(counterDate);
    }
},1000);