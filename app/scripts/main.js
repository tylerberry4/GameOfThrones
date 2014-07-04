// CONSTRUCTORS

function Player(name) {
    this.name = name;

  }

function Monster(options) {
    options = options || {};
    this.name = options.name;
  }


// GLOBAL VARIABLES
// You'll also want to create variables for the specific players and monsters.
// e.g. var purplePeopleEater = new Monster();
// e.g. var tinaFey = new Player();
// e.g. var attackMode = function(target){ Some code that produces an attack - pew, pew! };

//Players
var playerOne = new Player({
  name: "Tyrion_Lannister"
});

var playerTwo = new Player({
  name: "Ned_Stark"
});

var playerThree = new Player({
  name: "Arya_Stark"
});

//Monsters
var monterOne = new Monster({
  name: "Joffrey_Baratheon"
});

var monterTwo = new Monster({
  name: "White_Walker"
});

var monterOne = new Monster({
  name: "Tywin_Lannister"
});


// ACTIONS
// This is where jQuery will come into play and where you'll set a lot of your
// interactions for players and monsters. (e.g. player selection, attack interactions)
// e.g. $('.purple-people-eater').click(function () { Some code that attacks the monster! };

// Initially hides views 2, 3, 4
$(".hidden").hide()

// 1st view click action choosing hero and showing 2nd view
// $(".heroOne").click(function() {
// 	$(this).appendTo(".chosenHero")
//   $(".chooseHeroView").fadeOut( "slow", function() {});
//   $(".chooseEnemyView").fadeIn( "slow", function() {});
// });
var hero;
var enemy;
$(".hero").click(function() {
	hero = this.id;
  $(".chooseHeroView").fadeOut( "slow", function() {});
  $(".chooseEnemyView").fadeIn( "slow", function() {});
});

$(".enemy").click(function() {
	enemy = this.id;
  $(".chooseEnemyView").fadeOut( "slow", function() {});
  $(".chosenHero").attr("id", hero);
  $(".chosenEnemy").attr("id", enemy);
  $(".battleView").fadeIn( "slow", function() {});
});

$(".chosenEnemy").click(function() {
	$(this).toggleClass('animated shake');
});






















