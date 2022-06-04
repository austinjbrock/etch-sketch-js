//establish a variable so we can change it later
let color = 'black'
let input = document.querySelector('input')
const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']; 


//Rest Board size
resetBtn = document.getElementById('reset')
//Builds the board
function buildBoard(size){
   //Board outline
   let board = document.querySelector('.board')
   board.style.gridTemplateColumns = `repeat(${size},1fr)`;
   board.style.gridTemplateRows = `repeat(${size},1fr)`;


  // internal divs where the colors will change
for(let i =0; i <256; i++){
   let square = document.createElement('div')
   square.style.backgroundColor="white";
   board.insertAdjacentElement('beforeend',square)
   square.addEventListener('mouseover', styleBox)
}
}// End build board function


//default is black until button on html is clicked
function styleBox(){
   //generates a random color
   if(color == 'random'){
   let hex = '#';
   //loop through the hex table and return a 6 digit hex number
   for(let i =0; i <6; i++){  
   const index = Math.floor(Math.random()* hexValues.length)
   hex += hexValues[index]
}
   this.style.backgroundColor = hex
}
   else {
      this.style.backgroundColor = color;
   }
}

//based on which button is clicked, this will pass in our color choice for the stylebox function
function changeDrawColor (choice){
   color = choice;
}


//sets div cube size
function changeSize(input){
   if(input >=2 && input <=20){
      buildBoard(input);
   }else {
      alert('Enter a number from 2 - 20')
   }
}

//reset block dimensions
function resetBoard(){
   buildBoard(16)
   input.value = ''
}

reset.addEventListener('click',resetBoard)

//default board size
buildBoard(16);