// const render = function () {
//
// };
//
console.log('myq')

let player1 = true;
let squareEmpty = true;

//Set all squares to by "empty"
const empty = function (el) {
  if (!$(".button").hasClass("x") || !$(".button").hasClass("o")) {
    squareEmpty = true;
  };
};

//Is the row complete?

$(document).ready(function () {

  //When you click on an empty square(anything with the id of button)
  $(".button").on("click", function () {
    //If it is player 1's turn
    // debugger;
    empty(this);
    if (player1 && squareEmpty) {
      //If the square hasn't been clicked yet
        //add class of x for player 1
        $(this).addClass("x");
        player1 = false;

    } else if (!player1 && squareEmpty) {
        //add class of o for player 2
        $(this).addClass("o");
        player1 = true;
    };

    // tictactoe.playerTurn();
    // console.log("clicked");
    //Who's turn is it ?
    // playerTurn();
    // if(player1turn) {
    // $(".button").addClass("x");
    // } else {
    //   $("#button").addClass("o");
    // };
    // //Add x or o class to it
    // $("#button").addClass("x");
  });
});
