function triangle(x1 ,y1 , x2, y2, x3, y3, fillStyle){
    //console.log("Draw Triangle Hit!");
    //console.log("Fill Style: " + fillStyle);


    var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    //fillStyle = "#FF0000";
    ctx.fillStyle = fillStyle;



    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.fill();
  }
}

function random(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min; 
}



function rgb(r, g, b){
    r = Math.floor(r);
    g = Math.floor(g);
    b = Math.floor(b);
    return ["rgb(",r,",",g,",",b,")"].join("");
}

function Tree(treeCentreX, treeBranchLevels, treeHeight){
    var canvas = document.getElementById('canvas');
    let height = canvas.height;




    this.treeBranchLevels    = treeBranchLevels;
    this.treeCentreX         = treeCentreX;
    this.treeHeight          = treeHeight;


    this.trunkRed    = random(80, 120);
    this.trunkBlue   = random(40, 60);
    this.trunkGreen  = random(40, 60);
    this.trunkColor  = rgb(this.trunkRed, this.trunkBlue, this.trunkGreen);
    
    let trunkWidth  = (random(10, 20) );
    
    this.branchRed   = random(40, 110); 
    this.branchBlue  = random(40, 110); 
    this.branchGreen = random(80, 220); 


    let groundY = height - 10;

    this.draw = function () {

        
     let fill = rgb(this.trunkRed, this.trunkGreen, this.trunkBlue);
      triangle( (this.treeCentreX - trunkWidth), groundY, //left
                (this.treeCentreX + trunkWidth), groundY, // right
                this.treeCentreX, ((height - ( treeHeight) )  ),
                fill );//top
      
      //branches
      let treeBranchHeightStart = 50;
      let branchWidth = 120;
      
      //Branch Color
      let branchRedLevel   = this.branchRed ;
      let branchBlueLevel  = this.branchBlue;
      let branchGreenLevel = this.branchGreen;
      
      fill = rgb(branchRedLevel, branchGreenLevel, branchBlueLevel);
      triangle( treeCentreX - (branchWidth/2), groundY - treeBranchHeightStart,
                treeCentreX + (branchWidth/2), groundY - treeBranchHeightStart,
                treeCentreX, groundY - treeHeight, 
                fill);
    
      for(i =0; i < (treeBranchLevels -1); i++){
        treeBranchHeightStart += ((treeHeight - treeBranchHeightStart)/ treeBranchLevels) ;
        branchWidth -= ((branchWidth)/ (treeBranchLevels + 5) );
        branchRedLevel   += 10;
        branchGreenLevel += 20;
        branchBlueLevel  += 10;
        fill = rgb(branchRedLevel, branchGreenLevel, branchBlueLevel);
        triangle( treeCentreX - (branchWidth/2), groundY - treeBranchHeightStart,
                  treeCentreX + (branchWidth/2), groundY - treeBranchHeightStart,
                  treeCentreX, groundY - treeHeight, 
                  fill);
      }


    }

}
/*
function tree(treeCentreX, treeBranchLevels, treeHeight){
  treeBranchLevels = treeBranchLevels;
  treeHeight = treeHeight;
  treeCentreX = treeCentreX;

  
  treeBranchLevels = 3;
  treeHeight = 180;
  treeCentreX = 160;
  
  trunkRed    = Math.random(100, 140); 
  trunkBlue   = Math.random(50, 80); 
  trunkGreen  = Math.random(50, 80); 
  trunkColor  = rgb(trunkRed, trunkBlue, trunkGreen);
  
  trunkWidth  = Math.random(20, 40);
  
  branchRed   = Math.random(40, 120); 
  branchBlue  = Math.random(40, 120); 
  branchGreen = Math.random(120, 255); 
};
*/

function draw(){
    let t = new Tree(100, 3, 200);
    t.draw() ;
}

// $(function () {
//     // console.log will log a message or object to the browser developer console
//     console.log("Loaded tree.js ...");
//     draw();
  
// });
