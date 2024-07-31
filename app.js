const gameBoard = document.querySelector("#gameboard")
const playerDisplay = document.querySelector("#player")
const infoDisplay = document.querySelector("#info-display")
const body = document.body;
const width = 8

const startPieces = [
    rook, knight, bishop, queen, king, bishop, knight, rook,
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    '', '', '', '', '', '', '', '', 
    '', '', '', '', '', '', '', '', 
    '', '', '', '', '', '', '', '', 
    '', '', '', '', '', '', '', '', 
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    rook, knight, bishop, queen, king, bishop, knight, rook,
]


function createBoard()
{
    console.log("How u doin")
    startPieces.forEach((sP, i)=>{
        const square = document.createElement('div')
        square.classList.add('square')
        square.innerHTML = sP
        square.firstChild && square.firstChild.setAttribute('draggable', true)

        square.setAttribute('square-id', i)
        // square.classList.add('beige')
        const row = Math.floor(( 63 - i )/ 8) + 1;
        if(row % 2 === 0)
        {
            square.classList.add(i % 2 === 0 ? 'beige' : 'brown');
        }
        else
        {
            square.classList.add(i % 2 === 0 ? 'brown' : 'beige');

        }
        gameBoard.append(square)
        if( i <= 15)
        {
            square.firstChild.firstChild.classList.add('black')
        }
        if(i >= 48)
        {
            square.firstChild.firstChild.classList.add('white')

        }
        
    })
}

createBoard()

const allSquares = document.querySelectorAll("#gameboard .square")

allSquares.forEach((piece)=>{
    piece.addEventListener('dragstart', dragstart)
//    piece.addEventListener('drag', onDrag)
    piece.addEventListener('dragover', dragover)
    piece.addEventListener('drop', dragdrop)
    piece.addEventListener('dragend', dragend)
})

let startPositionId 
let draggedElement

// function onDragging(e)
// {
//     console.log("hello");
//     console.log(e.target);

// }
// function onDrag(e)
// {
//     document.body.style.cursor="grabbing !important";
//     document.body.style.backgroundColor="pink";
// }


function dragstart(e)
{
    e.dataTransfer.effectAllowed = "copyMove";
    startPositionId = e.target.parentNode.getAttribute('square-id')
    e.target.style.cursor='grabbing !important'
    e.dataTransfer.effectAllowed = "move"
    draggedElement = e.target

    
    document.body.style.cursor = 'grabbing !important';

}

function dragover(e)
{
    e.preventDefault();
    // console.log(e.target)
}

function dragdrop(e)
{
    e.stopPropagation();
    // e.target.parentNode.append(draggedElement);
    e.target.append(draggedElement);
}
function dragend(e)
{
    // Reset the cursor back to default after dragging
    document.body.style.cursor = 'default';
    document.body.style.backgroundColor="white";

}