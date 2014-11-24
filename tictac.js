window.onload = function() {


  //This tests js
  //alert("javascript working");

  var boxes = {};
  //define each div in the html as a squared
  boxes.box0 = document.getElementById("squareZero");
  boxes.box1 = document.getElementById("squareOne");
  boxes.box2 = document.getElementById("squareTwo");
  boxes.box3 = document.getElementById("squareThree");
  boxes.box4 = document.getElementById("squareFour");
  boxes.box5 = document.getElementById("squareFive");
  boxes.box6 = document.getElementById("squareSix");
  boxes.box7 = document.getElementById("squareSeven");
  boxes.box8 = document.getElementById("squareEight");
  var resetButton = document.getElementById("reset");
  var turn = 1;
  // create an undefined array with 9 slots, one for each block.
  var moves = [];


  if(turn % 2 === 0) {
    var sign = "O";
    alert("Player 2: It's your turn - You are O's");
  }

  else {
    var sign = "X";
    alert("Player 1:It's your turn - You are X's");
  }

  var playBox = function(box) {
  //doesn't let them add another character


    if (box.innerHTML === "X" || box.innerHTML === "O")
  {
    alert("seat's taken...can't sit here.");
  }

  else
  {
    box.innerHTML = box.innerHTML + sign;

    if (box.innerHTML === "X") {
      box.classList.add("Red");
      }
      else
      box.classList.add("Blue");
      moves[0] = sign;
  }

  if((moves[0] === "X" && moves[1] === "X" && moves[2] === "X")
      ||(moves[3] === "X" && moves[4] === "X" && moves[5] === "X")
      ||(moves[6] === "X" && moves[7] === "X" && moves[8] === "X")
      ||(moves[0] === "X" && moves[3] === "X" && moves[6] === "X")
      ||(moves[1] === "X" && moves[4] === "X" && moves[7] === "X")
      ||(moves[2] === "X" && moves[5] === "X" && moves[8] === "X")
      ||(moves[0] === "X" && moves[4] === "X" && moves[8] === "X")
      ||(moves[2] === "X" && moves[4] === "X" && moves[6] === "X"))
      {
      endOfGame = prompt("You win, Player One!");

      }
      
      //check to see if x is a winner - array positions represent 8 winning combos
      else if((moves[0] === "O" && moves[1] === "O" && moves[2] === "O")
      ||(moves[3] === "O" && moves[4] === "O" && moves[5] === "O")
      ||(moves[6] === "O" && moves[7] === "O" && moves[8] === "O")
      ||(moves[0] === "O" && moves[3] === "O" && moves[6] === "O")
      ||(moves[1] === "O" && moves[4] === "O" && moves[7] === "O")
      ||(moves[2] === "O" && moves[5] === "O" && moves[8] === "O")
      ||(moves[0] === "O" && moves[4] === "O" && moves[8] === "O")
      ||(moves[2] === "O" && moves[4] === "O" && moves[6] === "O"))
      {
      endOfGame = confirm("You win, Player Two!");

      }


     if(sign === "O") {
    sign ="X";
  }
     else {
   sign = "O";
  }




   turn += turn + 1;

  };

  var setClickHandler = function (box) {
    box.onclick = function () {
      playBox(box);
    }
  };
  for (var i = 0; i < 9; i += 1) {
    var box = boxes["box" + i];
    setClickHandler(box);
  }

  // //selection on squareZero
  // boxes.box0.onclick = function () {
  //   playBox(boxes.box0);
  // };

  // boxes.box1.onclick = function () {
  //   playBox(boxes.box1);
  // };

  // boxes.box2.onclick = function () {
  //   playBox(boxes.box2);
  // };

  // boxes.box3.onclick = function () {
  //   playBox(boxes.box3);
  // };

  // boxes.box4.onclick = function () {
  //   playBox(boxes.box4);
  // };

  // boxes.box5.onclick = function () {
  //   playBox(boxes.box5);
  // };
  //sel
  resetButton.onclick=function() {
  	document.location.reload(true);
  }




};






//possible combinations
//





