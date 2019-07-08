var n1 = document.getElementById('numberModule1');
var n2 = document.getElementById('numberModule2');
var n3 = document.getElementById('numberModule3');
var n4 = document.getElementById('numberModule4');
var n5 = document.getElementById('numberModule5');
var n6 = document.getElementById('numberModule6');
var n7 = document.getElementById('numberModule7');
var p1 = document.getElementById('p1');
var btnGen = document.getElementById('btnGen');


var n1max = numMod(n1);
var n2max = numMod(n2);
var extraNum = numMod(n5);
var n3max = numMod(n6);
var n4max = numMod(n7);
var nPosition = numMod(n3);
var nRepeat = numMod(n4);

btnGen.addEventListener('click', function(){    

    var maxN = parseInt(n1max.num + '' +  n2max.num);    
    var extraMaxN = parseInt(n3max.num + '' +  n4max.num); 

    console.log(nPosition.num + ' | ' + maxN + ' | ' + extraNum.num + ' | ' + 
    extraMaxN + ' | ' + nRepeat.num);
    var txt = '';
    if(nRepeat.num > 1){    
        
        for(var i = 0; i < nRepeat.num; i++){       
            if(extraNum.num > 0){
                txt += rndNum(nPosition.num, maxN) + ' / ' + 
                rndNum(extraNum.num, extraMaxN) + '\n';
            }else{
                txt += rndNum(nPosition.num, maxN) + '\n';  
            }                             
        }
        p1.innerText = txt;
    }else{
        if(extraNum.num > 0){
            txt += rndNum(nPosition.num, maxN) + ' / ' + 
            rndNum(extraNum.num, extraMaxN);
        }else{
            txt += rndNum(nPosition.num, maxN);  
        } 
        p1.innerText = txt;
    }
})

