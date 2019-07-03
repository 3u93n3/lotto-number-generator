var n1 = document.getElementById('numberModule1');
var n2 = document.getElementById('numberModule2');
var n3 = document.getElementById('numberModule3');
var n4 = document.getElementById('numberModule4');
var p1 = document.getElementById('p1');
var btnGen = document.getElementById('btnGen');


var n1max = numMod(n1);
var n2max = numMod(n2);
var nPosition = numMod(n3);
var nRepeat = numMod(n4);

btnGen.addEventListener('click', function(){
    

    var maxN = parseInt(n1max.num + '' +  n2max.num);    
    
    if(nRepeat.num > 1){    
        var txt = '';
        for(var i = 0; i < nRepeat.num; i++){            
            txt += rndNum(nPosition.num, maxN) + '\n';            
        }

        p1.innerText = txt;
    }else{
        p1.innerText = rndNum(nPosition.num, maxN);
    }
})

// btnGen.addEventListener('mousedown', function(){
//     btnGen.style.margin = '2px';
//     btnGen.style.boxShadow = '0 0 5px black';
// });