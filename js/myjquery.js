// const render = function () {
//
// };
//
// console.log('myq')





let player1 = true;
let squareEmpty = true;
let turnCounter = 0;
let checkWinX = false;
let checkWinO = false;

//Set all squares to by "empty"
const empty = function (el) {
  if (!$(".box").hasClass("x") || !$(".box").hasClass("o")) {
    squareEmpty = true;
  };
};

const checkWinOrDraw = function () {
  if (turnCounter === 9) {
    console.log("DRAW!");
    checkDraw = true;
  };
  //Check Row1-X
  if ($(".row1.playedX, .row2.playedX, .row3.playedX, .col1.playedX, .col2.playedX, .col3.playedX  ").length === 3) {
    // console.log("You have won!");
    checkWinX = true;
  };
  //Check Row1-0
  if ($(".row1.playedO, .row2.playedO, .row3.playedO, .col1.playedO, .col2.playedO, .col3.playedO").length === 3) {
    checkWinO = true;
  };
  // //Check Row2-X
  // if ($(".row2.playedX").length === 3) {
  //   // console.log("You have won!");
  //   checkWinX = true;
  // };
  // //Check Row2-0
  // if ($(".row2.playedO").length === 3) {
  //   checkWinO = true;
  // };
  // //Check Row3-X
  // if ($(".row3.playedX").length === 3) {
  //   // console.log("You have won!");
  //   checkWinX = true;
  // };
  // //Check Row3-0
  // if ($(".row3.playedO").length === 3) {
  //   checkWinO = true;
  // };

  // //Column 1 X
  // if ($(".col1.playedX").length === 3) {
  //   checkWinX = true;
  // // };
  // //Column 1 O
  // if ($(".col1.playedO").length === 3) {
  //   checkWinO = true;
  // };
  // // //Column 2 X
  // if ($(".col2.playedX").length === 3) {
  //   checkWinX = true;
  // };
  //Column 2 O
  // if ($(".col2.playedO").length === 3) {
  //   checkWinO = true;
  // };
  // //Column 3 X
  // if ($(".col3.playedX").length === 3) {
  //   checkWinX = true;
  // };
  //Column 3 O
  if ($(".col3.playedO").length === 3) {
    checkWinO = true;
  };

  //Column1
  //Column2
  //Column3

  //Diag1
  //Diag2

};

// // Print the result to screen
// const printResult = function () {
//   if (checkWinX ) {
//
//   };
// };

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

const winnerImage = function () {
  //if checkWinX --> display X winner image
  //if checkWinO --> display O winner image
  //else display draw image
};
//Is the row complete?

$(document).ready(function () {

  //When you click on an empty square(anything with the id of box)
  $(".box").on("click", function () {
    //If it is player 1's turn
    // debugger;
    empty(this);
    if (player1 && squareEmpty) {
      //If the square hasn't been clicked yet
        //add class of x for player 1
        $(this).addClass("x playedX");
        player1 = false;
        turnCounter++;

    } else if (!player1 && squareEmpty) {
        //add class of o for player 2
        $(this).addClass("o playedO");
        player1 = true;
        turnCounter++;
    };

    checkWinOrDraw();
  });

  $(".player1").on("click", function () {
    player1 = true;
  });

  $(".player2").on("click", function () {
    player1 = false;
  });
});
