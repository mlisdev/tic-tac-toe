/*----- constants -----*/
const players = { 
    '1' : 'goldenrod', 
    '-1' : 'olivedrab', 
    'null' : 'white'
};

const WINNING_COMBOS = [ 
    [ 0, 1, 2 ], 
    [ 3, 4, 5 ], 
    [ 6, 7, 8 ], 
    [ 0, 3, 6 ], 
    [ 1, 4, 7 ], 
    [ 2, 5, 8 ], 
    [ 0, 4, 8 ], 
    [ 2, 4, 6 ]
];

/*----- app's state (variables) -----*/
let board; 
let turn; 
let winner; 


/*----- cached element references -----*/
const boxes = document.querySelectorAll('td div'); 
const winMsg = document.querySelector('h2'); 

/*----- event listeners -----*/
document.querySelector('#board').addEventListener('click', handleMove); 
document.querySelector('button').addEventListener('click', init); 

/*----- functions -----*/
init(); 


function handleMove(event){ 
    // check event listener
    //console.log("what up"); 
    // define index, replace exisiting style in elements with id "bx"
    const idx = parseInt(event.target.id.replace('bx', '')); 
    // if box played or if game winner, return here and skip turn advance
    if (board[idx] || winner) return; 
    // if board or box not played and no winner, proceed with turn advance and fill in board array 
    board[idx] = turn; 
    turn *= -1; 
    // test for win 
    winner = getWin(); 
    render(); 
}; 

// function to text for win 
function getWin() {  
      let winner = null;
      // trying my hand at ternary's 
      // uses forEach to check winning_combos array for winning combinations 
      WINNING_COMBOS.forEach(function(comboArr, idx) {
        if (board[comboArr[0]] && board[comboArr[0]] === board[comboArr[1]] && board[comboArr[0]] === board[comboArr[2]]) {
          winner = board[comboArr[0]];
        }
      });
        if (winner) { 
          return winner
        }
        else if (board.includes(null)) {
          return null; }
        else { 
          return 'tie'
        }
  };


// renders board changes and message changes for each turn and game outcomes
function render() {
  board.forEach(function(bx, idx) {
    boxes[idx].style.background = players[bx];
  });
  if (winner === 'tie') {
    winMsg.innerHTML = 'It is a tie!';
  } else if (winner) {
    winMsg.innerHTML = `Congrats, you are a winner, baby!`;
  } else {
    winMsg.innerHTML = `Go: ${players[turn]}`;
  }
}

// initialize function, starts with null array for board and begins with player 1, with no winner. 
function init() {
    //console.log("cowabunga")
  board = [null, null, null, null, null, null, null, null, null];
  turn = 1;
  winner = null;
  render();
}


