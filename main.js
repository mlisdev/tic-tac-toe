/*----- constants -----*/
const players = { 
    '1' : 'purple', 
    '-1' : 'green', 
    'null' : 'black'
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
]

/*----- app's state (variables) -----*/
let board; 
let turn; 
let winner; 

/*----- cached element references -----*/
const boxes = document.querySelectorAll('td div'); 
const winMsg = document.querySelector('h2'); 

/*----- event listeners -----*/
document.querySelector('#board').addEventListener('click', handleClick); 
//document.querySelector('button').addEventListener('click', init); 

/*----- functions -----*/
//init(); 

function handleClick(event){ 
    const idx = parseInt(event.target.id.replace('bx', '')); 
}