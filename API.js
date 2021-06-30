let inputVal = document.getElementById('inp');
let searchBtn = document.getElementById('search');
let apInterface = document.getElementById('api');
let inpt = ''
//console.log(apInterface)

searchBtn.addEventListener("click",function(e){
    e.preventDefault();
    //inputVal.innerHTML='';
    var inpt = inputVal.value;
    if(inpt===''){
        alert('PLEASE TYPE ANY WORD!!!!');
    }
    else{
        click(inpt)
    }

    function click(type){
        let ur = 'https://g.tenor.com/v1/search?&limit=10&key=LBKTL4NN5LAY&q='+type;
        var xlm = new XMLHttpRequest();
        xlm.open('GET',ur)
        xlm.responseType='json';

        xlm.onreadystatechange = function(){        
        if(xlm.readyState === 4 && xlm.status ===200){
            const click = xlm.response
            for(let i=0;i<click.results.length;i++){
                let mediaGif = click.results[i].media[0].gif.url;    
                var gif = document.createElement('img');    
                gif.setAttribute('src', click.results[i].media[0].gif.url)
                gif.getAttribute('id','collection')
                apInterface.appendChild(gif)
                apInterface.setAttribute('alt','SORRY!!GIF DIDNT WORK')    
                
            }
            //console.log(gif)        
            }
        }
    xlm.send();
    }
})
function callOut(click){
    
}
///TTTTTTTTTRRRRRRRRRRYYYYYYYYYYYYYYY!!!