function Player(e){this.name=e}function Monster(e){e=e||{},this.name=e.name}var playerOne=new Player({name:"Tyrion_Lannister"}),playerTwo=new Player({name:"Ned_Stark"}),playerThree=new Player({name:"Arya_Stark"}),monterOne=new Monster({name:"Joffrey_Baratheon"}),monterTwo=new Monster({name:"White_Walker"}),monterOne=new Monster({name:"Tywin_Lannister"});$(".hidden").hide();var hero,enemy;$(".hero").click(function(){hero=this.id,$(".chooseHeroView").fadeOut("slow",function(){}),$(".chooseEnemyView").fadeIn("slow",function(){})}),$(".enemy").click(function(){enemy=this.id,$(".chooseEnemyView").fadeOut("slow",function(){}),$(".chosenHero").attr("id",hero),$(".chosenEnemy").attr("id",enemy),$(".battleView").fadeIn("slow",function(){$(".fight").addClass("animated flip")})});var enemyHealth=100;$(".attackBtn").click(function(){enemyHealth=Number(enemyHealth)-Number(Math.floor(21*Math.random())),$(".arrowOne").animate({left:"+=925px"},1e3),$(".total").text("HEALTH: "+enemyHealth),setTimeout(function(){$(".chosenEnemy").addClass("animated shake")},1e3),$(".arrowOne").animate({left:"+=-925px"},0),setTimeout(function(){$(".chosenEnemy").removeClass("animated shake")},2e3),1>enemyHealth&&($(".battleView").hide("slow",function(){}),$(".winnerView").fadeIn("slow",function(){$(".youWin").addClass("animated bounceIn")}))}),$(".total").text("HEALTH: "+enemyHealth);