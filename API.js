let inputVal = document.getElementById('inp');
let xlm = new XMLHttpRequest();
let searchBtn = document.getElementById('search');
let apInterface = document.getElementById('api');
apInterface.innerHTML='';

searchBtn.addEventListener("click",function(e){
    e.preventDefault();
    apInterface.innerHTML='';
    var inpt = inputVal.value;
    if(inpt===''){
        alert('PLEASE TYPE ANY WORD!!!!');
    }
    else{
        let ur = 'https://g.tenor.com/v1/search?&limit=10&key=LBKTL4NN5LAY&q='+inpt;
        xlm.open('GET',ur)
        xlm.responseType='json';
        xlm.onreadystatechange = function(){        
            if(xlm.readyState === 4 && xlm.status ===200){
                let clck = xlm.response.results
                callOut(clck)
                }
        }
    xlm.send();
    }
})

function callOut(arc){
    for(let i=0;i<=arc.length;i++){
        let mediaGif = arc[i].media[0].gif.url;    
        var gif = document.createElement('img');    
        gif.setAttribute('src',mediaGif)
        gif.setAttribute('alt','SORRY!!GIF DIDNT WORK')    
        gif.innerHTML = mediaGif
        apInterface.appendChild(gif)
    }
}
//WORKED DONE!!!