let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat6');
let ha = document.querySelector('.ha');

window.onload = function() {
    window.scroll(0, 0);
};

window.onscroll = function() {
    let scrollValue = scrollY;
    if(scrollValue==0)
        ha.innerHTML='';
    else {
        ha.innerHTML='&lt;H.A&gt;'; 
        ha.style.fontSize = scrollValue + 'px';
        ha.style.position = 'fixed';
    }
    console.log(scrollValue)
    if(scrollValue >= 80){
        ha.style.fontSize = 80 +"px";
        if(scrollValue >= 350)
            ha.style.display = 'none';
        else
        ha.style.display = 'block';
    }
    stars.style.left = scrollValue + 'px';
    moon.style.top = scrollValue  * 4 + 'px';
    mountains3.style.top = scrollValue * 2 + 'px';
    mountains4.style.top = scrollValue * 1.5 + 'px';
    river.style.top = scrollValue  + 'px';
    boat.style.top = scrollValue  + 'px';
    boat.style.left = scrollValue * 3 + 'px';
    
    //Day Mood
    if(scrollValue>=90)
        document.querySelector('.main').style.background = 'linear-gradient(#376281,#10001f)';
    else
        document.querySelector('.main').style.background = 'linear-gradient(to top,#200016,transparent)';
}
function getSalutation(id){
    
    document.getElementById('salutation').style.display = 'block'
    if(id == 'Day' || id =='Night')
        document.getElementById('salutation').innerHTML = 'Have a Nice ' + id + ' !';
    if(id == 'Night')
        document.getElementById('salutation').style.background = 'rgb(111, 2, 111)';
    else
    document.getElementById('salutation').style.background = '#095185';
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
}

    