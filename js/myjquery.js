let player1 = true;
let squareEmpty = true;
let turnCounter = 0;
let checkWinX = false;
let checkWinO = false;
let checkDraw = false;
let roundInPlay = true;

//Set all squares to by "empty"
const empty = function (el) {
  if (!$(".box").hasClass("x") || !$(".box").hasClass("o")) {
    squareEmpty = true;
  };
};

const checkWinOrDraw = function () {
  //Check Row1-X
  if ($(".row1.playedX").length === 3) {
    checkWinX = true;
    roundInPlay = false;
  };
  //Check Row1-0
  if ($(".row1.playedO").length === 3) {
    checkWinO = true;
    roundInPlay = false;
  };
  //Check Row2-X
  if ($(".row2.playedX").length === 3) {
    // console.log("You have won!");
    checkWinX = true;
    roundInPlay = false;
  };
  //Check Row2-0
  if ($(".row2.playedO").length === 3) {
    checkWinO = true;
    roundInPlay = false;
  };
  //Check Row3-X
  if ($(".row3.playedX").length === 3) {
    // console.log("You have won!");
    checkWinX = true;
    roundInPlay = false;
  };
  //Check Row3-0
  if ($(".row3.playedO").length === 3) {
    checkWinO = true;
    roundInPlay = false;
  };

  //Column 1 X
  if ($(".col1.playedX").length === 3) {
    checkWinX = true;
    roundInPlay = false;
  };
  //Column 1 O
  if ($(".col1.playedO").length === 3) {
    checkWinO = true;
    roundInPlay = false;
  };
  //Column 2 X
  if ($(".col2.playedX").length === 3) {
    checkWinX = true;
    roundInPlay = false;
  };
  //Column 2 O
  if ($(".col2.playedO").length === 3) {
    checkWinO = true;
    roundInPlay = false;
  };
  //Column 3 X
  if ($(".col3.playedX").length === 3) {
    checkWinX = true;
    roundInPlay = false;
  };
  //Column 3 O
  if ($(".col3.playedO").length === 3) {
    checkWinO = true;
    roundInPlay = false;
  };

  //Diag1 X
  if ($(".diag1.playedX").length === 3) {
    checkWinX = true;
    roundInPlay = false;
  };
  //Diag1 O
  if ($(".diag1.playedO").length === 3) {
    checkWinO = true;
    roundInPlay = false;
  };

  //Diag2 X
  if ($(".diag2.playedX").length === 3) {
    checkWinX = true;
    roundInPlay = false;
  };
  //Diag2 O
  if ($(".diag2.playedO").length === 3) {
    checkWinO = true;
    roundInPlay = false;
  };

  //Check if it's a draw
  if (turnCounter === 9 && !checkWinX && !checkWinO) {
    checkDraw = true;
    roundInPlay = false;
  };


};

// Print the result to screen
const printResult = function () {
  if (checkWinX ) {
    $("#winner").css("visibility", "visible");
    console.log("X Wins");
  } else if (checkWinO) {
    $("#winner").css("visibility", "visible");
    console.log("O Wins");
  };

  if (checkDraw) {
    $("#drawimg").css("visibility", "visible");
    console.log("CAT'S GAME");
  };
};

// const baloon = $('#baloon');
// function runIt() {
//        baloon.animate({top:'+=20'}, 1000);
//        baloon.animate({top:'-=20'}, 1000, runIt);
// };
//
// runIt();
//
// fade in winner/draw images ?
//
//

//Is the row complete?

$(document).ready(function () {

  //When you click on an empty square(anything with the id of box)
  $(".box").on("click", function () {
    //If it is player 1's turn
    // debugger;
    empty(this);
    if (player1 && squareEmpty && roundInPlay) {
      //If the square hasn't been clicked yet
        //add class of x for player 1
        $(this).addClass("x playedX");
        player1 = false;
        turnCounter++;

    } else if (!player1 && squareEmpty && roundInPlay) {
        //add class of o for player 2
        $(this).addClass("o playedO");
        player1 = true;
        turnCounter++;
    };

    checkWinOrDraw();
    printResult();
  });

  $(".player1").on("click", function () {
    player1 = true;
  });

  $(".player2").on("click", function () {
    player1 = false;
  });
});
