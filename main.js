/*----- constants -----*/
const players = { 
    '1' : 'purple', 
    '-1' : 'green', 
    'null' : 'null'
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
document.querySelector('#btnReset').addEventListener('click', init); 

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
    // index = 0, then iterates over WINNING_COMBOS array to check for winning combo and returns winning player if found 
  for (let i = 0; i < WINNING_COMBOS.length; i++) {
    if (Math.abs(board[WINNING_COMBOS[i][0]] + board[WINNING_COMBOS[i][1]] + board[WINNING_COMBOS[i][2]]) === 3) return board[WINNING_COMBOS[i][0]]; 
  }
  // if boxes remain empty, game continues play 
  if (board.includes(null)) return null;
  return 'true';
}

// renders board changes and message changes for each turn and game outcomes
function render() {
  board.forEach(function(bx, idx) {
    boxes[idx].style.background = players[bx];
  });
  if (winner === 'true') {
    winMsg.innerHTML = 'Sashay away!';
  } else if (winner) {
    winMsg.innerHTML = `Congrats, you are a winner, baby!`;
  } else {
    winMsg.innerHTML = `${players[turn]}'s Turn`;
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
