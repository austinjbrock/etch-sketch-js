//establish a variable so we can change it later
let color = 'black'
let input = document.querySelector('input')

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
   this.style.backgroundColor = color;
   
};

//based on which button is clicked, this will pass in our color choice for the stylebox function
function changeDrawColor (choice){
   color = choice;
}

// this function is called in the html structure
function changeSize(input){
   if(input >=2 && input <=100){
      buildBoard(input);
   }else {
      alert('Enter a number from 2 - 100')
   }
}

function resetBoard(){
   buildBoard()
   input.value = ''
}

reset.addEventListener('click',resetBoard)

buildBoard(16);