var randomSeq = [];
var playerSeq = [];
function sequence(array) {
  var number = Math.floor((Math.random())*3);
  switch (number) {
    case 0:
      array.push("green");

      break;

    case 1:
      array.push("red");

      break;

    case 2:
      array.push("yellow");

      break;

    case 3:
      array.push("blue");

      break;
    default:

  }
  console.log(randomSeq);

  $("#level-title").text("level "+(randomSeq.length-1).toString());
  $(("#"+randomSeq[randomSeq.length-1])).fadeTo(500,0).delay(120).fadeTo(500,1);
  playSound(randomSeq[randomSeq.length-1]);
}

function playSound(color){
  var blue = new Audio("sounds/blue.mp3");
  var green = new Audio("sounds/green.mp3");
  var red = new Audio("sounds/red.mp3");
  var yellow = new Audio("sounds/yellow.mp3");
  var wrong = new Audio("sounds/wrong.mp3")
  switch (color) {
    case "blue":
      blue.play();
      break;

    case "green":
      green.play();
      break;

    case "red":
      red.play();
      break;

    case "yellow":
      yellow.play()
      break;
    default:
    wrong.play();

  }

}

function check(index, key){
  if (key != randomSeq[index]){
    $("body").addClass("game-over");
    playSound("wrong");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 500);
    $("#level-title").text("Game over press a key to restart");
    newGame();
  }
  else{
    if (playerSeq.length===randomSeq.length){
      setTimeout(function () {
        sequence(randomSeq);
      }, 1000);
      playerSeq = [];
    }
  }
}

function newGame(){
  randomSeq.length = 0;
  playerSeq.length = 0;
  game = false;
}

function clickAnimate(button){
  $("#"+button).addClass("pressed");
  playSound(button);
  setTimeout(function () {
    $("#"+button).removeClass("pressed");
  }, 120);

}
var game = false;
$(document).keypress(function(){
  if (game === false){
    game = true;
    sequence(randomSeq);
  }
});
$(".btn").click(function () {
  playerSeq.push($(this).attr("id"));
  console.log(playerSeq)
  clickAnimate($(this).attr("id"));
  check(playerSeq.length - 1, $(this).attr("id"));
  }  );
