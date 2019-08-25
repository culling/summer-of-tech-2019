

function random(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function createTreeArray(numTrees){
    var canvas  = document.getElementById('canvas');
    //let canvas  = $('.canvas');
    let height  = canvas.height - (canvas.height /8);
    let width   = canvas.width;

    //console.log("Width: " + width);

    let trees = new Array();
    const MAX_BRANCHES = 4;
    const MIN_HEIGHT = height /2;
    const MAX_HEIGHT = height;
    for(let i = 0; i < numTrees; i++){
        let treeCenterX = random(0, width );
        let treeBranches = (random(2, MAX_BRANCHES));
        let treeHeight = (random(MIN_HEIGHT, MAX_HEIGHT)) ;
        let tree = new Tree(treeCenterX, treeBranches, treeHeight);
        trees[i] = tree;
    }

    return trees;
}


function Background(){
    let width = $(".questions").width();
    let canvas  = document.getElementById('canvas');
    let context = canvas.getContext('2d');
    context.canvas.width = width;

    const MAX_TREES = 100;
    let trees = new Array();
    trees = createTreeArray(MAX_TREES);

    this.drawTrees = function (treesToDraw){
        context.clearRect(0, 0, canvas.width, canvas.height);
        //console.log("Draw Trees");
        for(let i =0 ; i < treesToDraw; i++){
            let tree = trees[i];
            tree.draw();
        }
    }
}


/*
$(function () {
    // console.log will log a message or object to the browser developer console
    console.log("Loaded background.js ...");
    let background = new Background();
    background.drawTrees(5);
});
*/
