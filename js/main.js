// variables
let theThumbnails = document.querySelectorAll('#buttonHolder img'),
    gameBoard = document.querySelector('.puzzle-board'),
    originalBox = document.querySelector('.puzzle-pieces')
    pzlPieces = document.querySelectorAll('.puzzle-pieces img'),
    dropZone = document.querySelectorAll('.drop-zone'),
    resetPieces = document.querySelector('.reset-pieces');

    topLeftPuzzlePiece = document.querySelector('#topLeft');
    topRightPuzzlePiece = document.querySelector('#topRight');
    bottomLeftPuzzlePiece = document.querySelector('#bottomLeft');
    bottomRightPuzzlePiece = document.querySelector('#bottomRight');

    topLeftPuzzlePiece = document.querySelector('#topLeft');
    topRightPuzzlePiece = document.querySelector('#topRight');
    bottomLeftPuzzlePiece = document.querySelector('#bottomLeft');
    bottomRightPuzzlePiece = document.querySelector('#bottomRight');

    
// functions
function changeImageSet() {
    gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgref}.jpg)`;

    topLeftPuzzlePiece.setAttribute("src", `images/topLeft${this.dataset.bgref}.jpg`);
    topRightPuzzlePiece.setAttribute("src", `images/topRight${this.dataset.bgref}.jpg`);
    bottomLeftPuzzlePiece.setAttribute("src", `images/bottomLeft${this.dataset.bgref}.jpg`);
    bottomRightPuzzlePiece.setAttribute("src", `images/bottomRight${this.dataset.bgref}.jpg`);

    topLeftPuzzlePiece.setAttribute("src", `images/topLeft${this.dataset.bgref}.jpg`);
    topRightPuzzlePiece.setAttribute("src", `images/topRight${this.dataset.bgref}.jpg`);
    bottomLeftPuzzlePiece.setAttribute("src", `images/bottomLeft${this.dataset.bgref}.jpg`);
    bottomRightPuzzlePiece.setAttribute("src", `images/bottomRight${this.dataset.bgref}.jpg`);


    pzlPieces.forEach(piece => originalBox.appendChild(piece));
}

function allowDrag(event) {
    console.log('started dragging an image');

    //adds the ID of the elemnt being dragged to the data transfer object
    // as 'draggedEl', so we can get it later
    event.dataTransfer.setData('draggedEl', this.id);
}

function allowDragOver(event) {
    event.preventDefault();
    console.log('dragging over a drop zone');
}

function allowDrop(event) {
    event.preventDefault();

    let dropZone = this;

    if (dropZone.children.length > 0) {
        return;
    }

    //gets the dragged element's ID from the data transfer object (using 'draggedEl')
    let droppedElId = event.dataTransfer.getData('draggedEl');    
    
    //gets the ACTUAL dragged element, using the ID
    let droppedEl = document.querySelector(`#${droppedElId}`);
    
    dropZone.appendChild(droppedEl);
}


// event listeners
theThumbnails.forEach(thumbnail => thumbnail.addEventListener('click', changeImageSet));
pzlPieces.forEach(piece => piece.addEventListener('dragstart', allowDrag));

dropZone.forEach(zone => {
    zone.addEventListener('dragover', allowDragOver);
    zone.addEventListener('drop', allowDrop);
});

