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

// Stores chosen hero into variable and changes to next view
var hero;
var enemy;
$(".hero").click(function() {
	hero = this.id;
  $(".chooseHeroView").fadeOut( "slow", function() {});
  $(".chooseEnemyView").fadeIn( "slow", function() {});
});

// Stores chosen enemy into variable and changes to next view
$(".enemy").click(function() {
	enemy = this.id;
  $(".chooseEnemyView").fadeOut( "slow", function() {});
  $(".chosenHero").attr("id", hero);
  $(".chosenEnemy").attr("id", enemy);
  $(".battleView").fadeIn( "slow", function() {
  	$(".fight").addClass('animated flip');
  });
});

// Animations for attack button and generates random number for enemy health
var enemyHealth = 100;
var heroHealth = 100;
$('.attackBtn').click(function(){
   enemyHealth = Number(enemyHealth) - Number(Math.floor(Math.random()*30));
   heroHealth = Number(heroHealth) - Number(Math.floor(Math.random()*15));
   $(".arrowOne").animate({ 
         left: "+=925px",
     }, 1000 );
   $('.enemyTotal').text("HEALTH: "+enemyHealth);

   setTimeout(function () { 
    $('.chosenEnemy').addClass('animated shake');
    }, 1000);
    $(".arrowOne").animate({ 
         left: "+=-925px",
     }, 0 );  

    setTimeout(function () { 
    $('.chosenEnemy').removeClass('animated shake');
    }, 2000);

// enemy fights back 

    setTimeout(function () {
    $(".arrowTwo").delay(2000).animate({ 
         right: "+=925px",
     }, 1000 );
    $(".arrowTwo").animate({ 
         right: "+=-925px",
     }, 0 );  

    setTimeout(function () { 
    $('.chosenHero').addClass('animated shake');
    }, 3000);  
    
    setTimeout(function () { 
    $('.chosenHero').removeClass('animated shake');
    }, 4000); 

    $('.heroTotal').text("HEALTH: "+heroHealth);
    });

    if (heroHealth < 1) 
    {
      $(".battleView").hide( "slow", function() {});
      $(".loserView").fadeIn( "slow", function() {});
    } 

    if (enemyHealth < 1) 
    {
      $(".battleView").hide( "slow", function() {});
      $(".winnerView").fadeIn("slow", function() {});
    } 



    // if (enemyHealth < 1) {
  		// $(".battleView").hide( "slow", function() {});
  		// $(".winnerView").fadeIn( "slow", function() {
  		//   $(".youWin").addClass('animated bounceIn');
  		// });
    // };
});

//displays enemy health
$('.enemyTotal').text("HEALTH: " + enemyHealth); 
$('.heroTotal').text("HEALTH: " + heroHealth); 

// Clicking play again button resets game 
$(".playAgainBtn").click(function() {
  window.location.reload();
});





















