const model = {

   makeMove(output,move,iTag){
    if(move%2==1){
      if(iTag!==undefined){
        try {
          iTag.className = 'symbol fas fa-times';
          output.innerHTML = "Player Two's Turn"
        } catch (error) {
          console.log("error");          
        }
      }
    }
    else
    if(move%2==0)
     { 
       if(iTag!==undefined){
       try {
        iTag.className = 'symbol far fa-circle'; 
        output.innerHTML = "Player One's Turn";        
       } catch (error) {
         console.log("error");
       }
     }
    }            
   },

   checkWin2ModelRow(boxesArray){

    var rowMiddle = [1,4,7];
    
    for(let i=0; i<boxesArray.length; i++){
       for(let j=0; j<rowMiddle.length; j++){
         var num = rowMiddle[j];

         if(boxesArray[num].innerHTML=='<i class="symbol far fa-circle"></i>' && boxesArray[num-1].innerHTML=='<i class="symbol far fa-circle"></i>' && boxesArray[num+1].innerHTML=='<i class="symbol far fa-circle"></i>'){
              
              boxesArray[num].className = "board-elements new";
              boxesArray[num-1].className = "board-elements new";
              boxesArray[num+1].className = "board-elements new";

              boxesArray[num].firstChild.className = "symbol far fa-circle newI";
              boxesArray[num-1].firstChild.className = "symbol far fa-circle newI";
              boxesArray[num+1].firstChild.className = "symbol far fa-circle newI";

              var span = document.querySelector("#text");
              span.innerHTML = "Player Two Wins !!";
              span.className = "span";

              return;
         }
         else
         if(boxesArray[num].innerHTML=='<i class="symbol fas fa-times"></i>' && boxesArray[num-1].innerHTML=='<i class="symbol fas fa-times"></i>' && boxesArray[num+1].innerHTML=='<i class="symbol fas fa-times"></i>'){
          boxesArray[num].className = "board-elements new";
          boxesArray[num-1].className = "board-elements new";
          boxesArray[num+1].className = "board-elements new";

          boxesArray[num].firstChild.className = "symbol fas fa-times newI";
          boxesArray[num-1].firstChild.className = "symbol fas fa-times newI";
          boxesArray[num+1].firstChild.className = "symbol fas fa-times newI";

          var span = document.querySelector("#text");
          span.innerHTML = "Player One Wins !!";
          span.className = "span";

          return;
         }
       }
    }

   }, 

   checkWin2ModelColumn(boxesArray){

    var colMiddle = [3,4,5];
    
    for(let i=0; i<boxesArray.length; i++){
       for(let j=0; j<colMiddle.length; j++){
         var num = colMiddle[j];

         if(boxesArray[num].innerHTML=='<i class="symbol far fa-circle"></i>' && boxesArray[num-3].innerHTML=='<i class="symbol far fa-circle"></i>' && boxesArray[num+3].innerHTML=='<i class="symbol far fa-circle"></i>'){
              
              boxesArray[num].className = "board-elements new";
              boxesArray[num-3].className = "board-elements new";
              boxesArray[num+3].className = "board-elements new";

              boxesArray[num].firstChild.className = "symbol far fa-circle newI";
              boxesArray[num-3].firstChild.className = "symbol far fa-circle newI";
              boxesArray[num+3].firstChild.className = "symbol far fa-circle newI";

              var span = document.querySelector("#text");
              span.innerHTML = "Player Two Wins !!";
              span.className = "span";

              return;
         }
         else
         if(boxesArray[num].innerHTML=='<i class="symbol fas fa-times"></i>' && boxesArray[num-3].innerHTML=='<i class="symbol fas fa-times"></i>' && boxesArray[num+3].innerHTML=='<i class="symbol fas fa-times"></i>'){
          boxesArray[num].className = "board-elements new";
          boxesArray[num-3].className = "board-elements new";
          boxesArray[num+3].className = "board-elements new";

          boxesArray[num].firstChild.className = "symbol fas fa-times newI";
          boxesArray[num-3].firstChild.className = "symbol fas fa-times newI";
          boxesArray[num+3].firstChild.className = "symbol fas fa-times newI";

          var span = document.querySelector("#text");
          span.innerHTML = "Player One Wins !!";
          span.className = "span";

          return;
         }
       }
    }
     
   },

   checkWin2ModelDiagonal(boxesArray){

    var diagonal = [4];
    
    for(let i=0; i<boxesArray.length; i++){
       for(let j=0; j<diagonal.length; j++){
         var num = diagonal[j];

         if(boxesArray[num].innerHTML=='<i class="symbol far fa-circle"></i>' && boxesArray[num-4].innerHTML=='<i class="symbol far fa-circle"></i>' && boxesArray[num+4].innerHTML=='<i class="symbol far fa-circle"></i>')
         {
              
              boxesArray[num].className = "board-elements new";
              boxesArray[num-4].className = "board-elements new";
              boxesArray[num+4].className = "board-elements new";

              boxesArray[num].firstChild.className = "symbol far fa-circle newI";
              boxesArray[num-4].firstChild.className = "symbol far fa-circle newI";
              boxesArray[num+4].firstChild.className = "symbol far fa-circle newI";

              var span = document.querySelector("#text");
              span.innerHTML = "Player Two Wins !!";
              span.className = "span";

              return;
         }
         else
         if(boxesArray[num].innerHTML=='<i class="symbol fas fa-times"></i>' && boxesArray[num-4].innerHTML=='<i class="symbol fas fa-times"></i>' && boxesArray[num+4].innerHTML=='<i class="symbol fas fa-times"></i>')
         {
          boxesArray[num].className = "board-elements new";
          boxesArray[num-4].className = "board-elements new";
          boxesArray[num+4].className = "board-elements new";

          boxesArray[num].firstChild.className = "symbol fas fa-times newI";
          boxesArray[num-4].firstChild.className = "symbol fas fa-times newI";
          boxesArray[num+4].firstChild.className = "symbol fas fa-times newI";

          var span = document.querySelector("#text");
          span.innerHTML = "Player One Wins !!";
          span.className = "span";

          return;
         }
         else
         if(boxesArray[num].innerHTML=='<i class="symbol far fa-circle"></i>' && boxesArray[num-2].innerHTML=='<i class="symbol far fa-circle"></i>' && boxesArray[num+2].innerHTML=='<i class="symbol far fa-circle"></i>')
         {
          boxesArray[num].className = "board-elements new";
          boxesArray[num-2].className = "board-elements new";
          boxesArray[num+2].className = "board-elements new";

          boxesArray[num].firstChild.className = "symbol far fa-circle newI";
          boxesArray[num-2].firstChild.className = "symbol far fa-circle newI";
          boxesArray[num+2].firstChild.className = "symbol far fa-circle newI";

          var span = document.querySelector("#text");
          span.innerHTML = "Player Two Wins !!";
          span.className = "span";

          return;
         }
         else
         if(boxesArray[num].innerHTML=='<i class="symbol fas fa-times"></i>' && boxesArray[num-2].innerHTML=='<i class="symbol fas fa-times"></i>' && boxesArray[num+2].innerHTML=='<i class="symbol fas fa-times"></i>')
         {
          boxesArray[num].className = "board-elements new";
          boxesArray[num-2].className = "board-elements new";
          boxesArray[num+2].className = "board-elements new";

          boxesArray[num].firstChild.className = "symbol fas fa-times newI";
          boxesArray[num-2].firstChild.className = "symbol fas fa-times newI";
          boxesArray[num+2].firstChild.className = "symbol fas fa-times newI";

          var span = document.querySelector("#text");
          span.innerHTML = "Player One Wins !!";
          span.className = "span";

          return;
         }
         
       }
    }
    
   },

}

