document.addEventListener("DOMContentLoaded", function(){
    //要素の表示、円周上に表示させる
    let num = ["も","ぽ","ぜ"];

    //HTMLから取得
    let roulette = document.getElementById("roulette");

    /*円形に並べる手順*/
    let item_length = num.length;

    //rouletteの半径を計算
    let r = roulette.clientWidth/2;

    //360度÷配置要素数
    let deg = 360.0/item_length;

    //さっきの角度をラジアンに変更
    let rad = (deg*Math.PI/180.0);
    

    //要素追加して表示させる
    for(var i = 0; i < num.length; i++ ){
        //div要素の追加
        let div = document.createElement('div');
        div.className = "cil";
        div.id = "cil"+ i;
        div.innerHTML= num[i] ;
        const x = Math.cos(rad * i) * r + r;
        const y = Math.sin(rad * i) * r + r;
        let circle = roulette.appendChild(div);
        circle.style.left = x + "px";
        circle.style.top = y + "px";
       // console.log(x);
    }    

    //ルーレットする
    let interval;//インターバル
    let first = false;//フラグ
    let number = 1;
    let grid =0; 

    function start_set(){//start状態
        document.getElementById("start").disabled = true;
        document.getElementById("stop").disabled = false;
        document.getElementById("reset").disabled = false;
        if(first === false){
            interval = setInterval(start_go,100);
            first = true;
        }         
    }

    function start_go(){//start押下
        for(var k = 0; k < item_length; k++){
            let div_number = document.getElementById('cil'+[k]);//表示上のidの取得
            div_number.classList.remove('red');//.redを消す
        }
        grid = Math.floor(Math.random()*num.length);
        number = num[grid];//.redをつけるためのランダムな数字を選択
        if(number == "も"){
            number = 0
        };
        if(number == "ぽ"){
            number = 1
        };
        if(number == "ぜ"){
            number = 2
        };
        div_number = document.getElementById('cil'+ number);

        div_number.classList.add('red');
    }
    function stop_set(){//stop押下
        for(var k = 0; k < item_length; k++){
            let div_number = document.getElementById('cil'+[k]);//表示上のidの取得
            div_number.classList.remove('red');//.redを消す
        }
        grid = Math.floor(Math.random()*100);
        tmp = grid
        if(tmp<100){
            grid = 0
        }
        if(tmp<90){
            grid = 2
        }
        if(tmp<80){
            grid = 1
        }
        console.log(grid);
        number = num[grid];//.redをつけるためのランダムな数字を選択
        if(number == "も"){
            number = 0
        };
        if(number == "ぽ"){
            number = 1
        };
        if(number == "ぜ"){
            number = 2
        };
        div_number = document.getElementById('cil'+ number);

        div_number.classList.add('red');
        document.getElementById("stop").disabled = true;
        document.getElementById("start").disabled = false;
        clearInterval(interval);
        first = false;

        let red_number = document.querySelector('.red');//.redクラスのついているものを取得
        //console.log(grid);  
        num.splice(grid,1);//配列からred_numberのところを1つ削除     
        //console.log(num);    
        red_number.classList.remove('red');
        red_number.classList.add("pink");

        if(num.length === 0){
        document.getElementById("start").disabled = true;
        }
    }

    function reset_set(){//リセット押下
        clearInterval(interval);
        first = false;
        document.getElementById("start").disabled = false;

        for(var j = 0; j < 3 ; j++){
            let all = document.getElementById("cil" + j);
            all.classList.remove('pink');
            all.classList.remove('red');
        }
       num = ["も","ぽ","ぜ"];
    }
        const starter = document.getElementById("start");
        const stopper = document.getElementById("stop");
        const resetter = document.getElementById("reset");

        starter.addEventListener("click",start_set,false);
        stopper.addEventListener("click",stop_set,false);
        resetter.addEventListener("click",reset_set,false);
        document.getElementById("stop").disabled = true;
        document.getElementById("reset").disabled = true;

})
