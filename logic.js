function NumberModul(){
    
    this.num = 0;
    this.up = function(){        
        if(this.num >= 9){
            this.num = 0;
        }else{
            this.num += 1;
        }                
    };
    
    this.down = function(){
        if(this.num <= 0){
            this.num = 9;
        }else{
            this.num -= 1;
        }        
    };    
}

function numMod(num){
    var mod = new NumberModul;
    var n = num.children[1];
    var up = num.children[0];
    var down = num.children[2];    
    
    up.addEventListener('click', function(){
        mod.up();
        n.innerText = mod.num;   
    });
    down.addEventListener('click', function(){
        mod.down();
        n.innerText = mod.num;       
    });    

    return mod;
}

function rndNum(n, maxN){
    var arr = [];

    for(var i = 0; arr.length < n; i++){
        var numPush = Math.floor(Math.random() * maxN) + 1;
        if(arr.indexOf(numPush) >= 0){
            continue;
            
        }else{
            arr.push(numPush);            
        }
    }

    arr.sort((a, b) => a - b);

    return arr;
}