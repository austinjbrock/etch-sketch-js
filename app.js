let userColor = prompt('enter Color')





//Builds
function buildBoard(size){
   let board = document.querySelector('.board')
board.style.gridTemplateColumns = `repeat(${size},1fr)`;
board.style.gridTemplateRows = `repeat(${size},1fr)`;

for(let i =0; i <256; i++){
   let square = document.createElement('div')
   square.addEventListener('mouseover', () =>{
      square.style.backgroundColor = userColor//This uses the user color choice. // instead of a preset like "red"
   });

   square.style.backgroundColor="white";
   board.insertAdjacentElement('beforeend',square)


}

}// End build board function




// this function is called in the html structure
function changeSize(input){
   if(input >=2 && input <=100){
      buildBoard(input)
   }else {
      alert('Enter a number from 2 - 100')
   }
}



function chooseColor (){



}

chooseColor()

buildBoard(16)