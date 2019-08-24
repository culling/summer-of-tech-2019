

function random(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min; 
}

function createTreeArray(numTrees){
    var canvas  = document.getElementById('canvas');
    let height  = canvas.height - (canvas.height /8);
    let width   = canvas.width;

    console.log("Width: " + width);

    let trees = new Array();
    let treeSpacing = (4* width)/numTrees;
    const MAX_BRANCHES = 10;
    const MIN_HEIGHT = height /3;
    const MAX_HEIGHT = height;
    for(let i = 0; i < numTrees; i++){
        let treeCenterX = random(0, width );
        let treeBranches = (Math.random() * MAX_BRANCHES) + 1;
        let treeHeight = (Math.random() * MAX_HEIGHT) + MIN_HEIGHT;
        let tree = new Tree(treeCenterX, treeBranches, treeHeight);
        trees[i] = tree;
    } 

    return trees;    
}


function Background(){
    let width = $(".canvas-container").width();
    let canvas  = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    ctx.canvas.width = width;

    const MAX_TREES = 100;
    let trees = new Array();
    trees = createTreeArray(MAX_TREES);

    this.drawTrees = function drawTrees(treesToDraw){
        for(let i =0 ; i < treesToDraw; i++){
            let tree = trees[i];
            tree.draw();
        }
    }    
}



$(function () {
    // console.log will log a message or object to the browser developer console
    console.log("Loaded background.js ...");
    let background = new Background();
    background.drawTrees(5);
  
});
