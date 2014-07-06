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
  $(".battleView").fadeIn( "slow", function() {
  	$("h1").addClass('animated flip');
  });
});

// $(function(){
// $(".attackBtn").on("click", function(){
//     $(".arrowOne").animate({ 
//         left: "+=925px",
//     }, 900 );
//     setTimeout(function () {
//     $(".chosenEnemy").addClass('animated shake');
// 		}, 900
// 		setTimeout(function () {
//     $('.arrowOne').addClass('arrowTwo');
// 		}, 1800
		  
// );
// });
// });

var enemyHealth = 100;
var heroHealth = 100;
$('.attackBtn').click(function(){
   enemyHealth = Number(enemyHealth) - Number(10);
   $(".arrowOne").animate({ 
         left: "+=925px",
     }, 1000 );
   $('.total').text("HEALTH: "+enemyHealth);

   setTimeout(function () { 
    $('.chosenEnemy').addClass('animated shake');
    }, 1000);
    $(".arrowOne").animate({ 
         left: "+=-925px",
     }, 0 );  

    setTimeout(function () { 
    $('.chosenEnemy').removeClass('animated shake');
    }, 2000);
           
});

$('.total').text("HEALTH: "+enemyHealth);   






















