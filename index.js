
const currentyear=new Date().getFullYear();
const nextyear=currentyear+1;
document.getElementById('year').innerHTML=nextyear;
let newyeartime = new Date(`January 01 ${nextyear} 00:00:00`);

function update()
{
    let currenttime=new Date();
    let diff=newyeartime-currenttime;
    var d = Math.floor(diff / (1000 * 60 * 60 * 24));
    var h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var s = Math.floor((diff % (1000 * 60)) / 1000);
   
    document.getElementById('days').innerHTML=d < 10 ? "0" + d : d;
    document.getElementById('hours').innerHTML=h < 10 ? "0" + h : h;
    document.getElementById('minutes').innerHTML=m < 10 ? "0" + m : m;
    document.getElementById('seconds').innerHTML=s < 10 ? "0" + s : s;
}
setInterval(update,1);