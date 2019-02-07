
var move = 1;
var boxes = document.getElementsByClassName("board-elements");
window.addEventListener("load",bindEvents);

function bindEvents(){
 document.querySelector("#labelOne").addEventListener("click",displayBoard);
 document.querySelector("#labelTwo").addEventListener("click",displayBoard);
 document.querySelector("#home").addEventListener("click",home);
 document.querySelector("#reset").addEventListener("click",reset);
}

function home(){
    // console.log("home");
    document.querySelector("#radios").style.display = "block";
    document.querySelector("#board-container").style.display = "none";
    document.querySelector("#text").className = "text";
    for(let i=0;i<boxes.length;i++){
        boxes[i].innerHTML = "";
        move = 1;
        boxes[i].className = 'board-elements';
        boxes[i].onmouseover = function(){
            this.style.cursor = "pointer";
        }
    }
}

function reset(){
    // console.log("reset");
    document.querySelector("#text").className = "text";
    for(let i=0;i<boxes.length;i++){
        boxes[i].innerHTML = "";
        boxes[i].className = 'board-elements';
        boxes[i].onmouseover = function(){
            this.style.cursor = "pointer";
        }
    }
    if(document.querySelector("#text").innerHTML=="Player One's Turn" || document.querySelector("#text").innerHTML=="Player Two's Turn" || document.querySelector("#text").innerHTML=="Player Two Wins !!" || document.querySelector("#text").innerHTML=="Player One Wins !!" || document.querySelector("#text").innerHTML=="It's a Tie")
    {
        document.querySelector("#text").innerHTML = "Player One's Turn";
        move = 1;
        for(let i=0;i<boxes.length;i++){
            boxes[i].innerHTML = "";
        }
        oneTexts();
    }
    else
    if(document.querySelector("#text").innerHTML=="User's Turn" || document.querySelector("#text").innerHTML=="Computer's Turn"){
        document.querySelector("#text").innerHTML = "User's Turn";   
        twoTexts();
    }
}


function displayBoard(){
    // console.log("board");
    document.querySelector("#radios").style.display = "none";
    document.querySelector("#board-container").style.display = "block";
    console.log();
    var playerInfo = event.srcElement.parentElement.id;
    var output = document.querySelector("#text");
    if(playerInfo=="twoP"){
       output.innerHTML = "Player One's Turn";
       oneTexts();
    }
    else
    if(playerInfo=="oneP"){
        output.innerHTML = "User's Turn";
        console.log("one p");
        twoTexts();
    }
}


 function oneTexts(){
    //  console.log("texts");
     
     for(let i=0; i<boxes.length;i++){
        //  console.log("for");

         boxes[i].addEventListener("click",oneCode);
         
         function oneCode(){
                //  console.log("click");

                    var output = document.querySelector("#text");
                    // console.log("aaa",boxes[i].childNodes[0]);

                    if(boxes[i].childNodes[0]==undefined){
                        var iTag = document.createElement("i");
                        boxes[i].appendChild(iTag);
                        // console.log("made");
                    }
                    

                    var symbol = boxes[i].childNodes[0].className;
                    if(symbol == "symbol fas fa-times" || symbol=="symbol far fa-circle"){
                        return;
                    }
                    else{
                        // console.log("makemove");
                        model.makeMove(output,move,iTag);
                        move++;
                        checkWin2Controller();
                        checkOutput();
                    }
                 
         }
     }
}

function twoTexts(){
    console.log("hewwwwww");
    move = Infinity;
    
    
    
    // do here AI 



}


function checkWin2Controller(){
  var boxesArray = [];

  for(let i=0; i<boxes.length; i++){
      boxesArray.push(boxes[i]);
  }

//   var faClass = this.event.srcElement.childNodes[0].className;  
  model.checkWin2ModelRow(boxesArray);  
  model.checkWin2ModelColumn(boxesArray);
  model.checkWin2ModelDiagonal(boxesArray);
  draw();
}

function checkOutput(){
    for (let i=0; i<boxes.length;i++){
        if(document.querySelector("#text").innerHTML=="Player One Wins !!" || document.querySelector("#text").innerHTML=="Player Two Wins !!"){
            boxes[i].onmouseover = function(){
                this.style.cursor = "default";
                move = Infinity;
            }
        }
    }
}

function draw(){
//     for(let i=0;i<boxes.length;i++){
//         console.log(boxes[i].childNodes[0]);

//     }
    // console.log(this.event.srcElement.className);
    if(move=='10' && this.event.srcElement.className!="board-elements new"){
        document.querySelector("#text").innerHTML = "It's a Tie";
        document.querySelector("#text").className = "span";

    }
}






