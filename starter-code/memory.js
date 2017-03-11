 var theGame;

var MemoryGame = function() {
  this.Cards = [
  		{ name: "aquaman",         img: "aquaman.jpg" },
  		{ name: "batman",          img: "batman.jpg" },
  		{ name: "captain america", img: "captain-america.jpg" },
  		{ name: "fantastic four",  img: "fantastic-four.jpg" },
  		{ name: "flash",           img: "flash.jpg" },
      { name: "green arrow",     img: "green-arrow.jpg" },
  		{ name: "green lantern",   img: "green-lantern.jpg" },
  		{ name: "ironman",         img: "ironman.jpg" },
  		{ name: "spiderman",       img: "spiderman.jpg" },
  		{ name: "superman",        img: "superman.jpg" },
  		{ name: "the avengers",    img: "the-avengers.jpg" },
  		{ name: "thor",            img: "thor.jpg" },
      { name: "aquaman",         img: "aquaman.jpg" },
  		{ name: "batman",          img: "batman.jpg" },
  		{ name: "captain america", img: "captain-america.jpg" },
      { name: "fantastic four",  img: "fantastic-four.jpg" },
  		{ name: "flash",           img: "flash.jpg" },
  		{ name: "green arrow",     img: "green-arrow.jpg" },
  		{ name: "green lantern",   img: "green-lantern.jpg" },
  		{ name: "ironman",         img: "ironman.jpg" },
  		{ name: "spiderman",       img: "spiderman.jpg" },
  		{ name: "superman",        img: "superman.jpg" },
  		{ name: "the avengers",    img: "the-avengers.jpg" },
  		{ name: "thor",            img: "thor.jpg" },
  	];
  this.pickedCards  = [];
  this.pairsGuessed = [];
  this.pairsClicked = 0;
  this.shuffleCard();
};
// ---------------_> PROGRAM UNIVERSE  <--------------------

// ------- Method to shuffle the cards


MemoryGame.prototype.shuffleCard = function() {
  var counter = this.Cards.length, j, temp;

  while (--counter > 0) {
    j = Math.floor(Math.random() * (counter+1));
    temp = this.Cards[j];
    this.Cards[j] = this.Cards[counter];
    this.Cards[counter] = temp;
  }
};


// ------- Method to shuffle the cards   ENDS


  $( document ).ready(function() {


var theGame = new MemoryGame();

    // Your code here.

console.log(theGame.Cards);

var card1 = theGame.pickedCards[0];
var card2 = theGame.pickedCards[1];


// ------- FUNCTION THAT MATCHS CARDS


  // this.shuffleCard
// };

// ------- FUNCTION THAT MATCHS CARDS   ENDS



// ------- FUNCTION  WIN WIN WIN WIN  A R E A




// ------- FUNCTION  WIN WIN WIN WIN  A R E A  ENDS
// ---------------_> USER UNIVERSE  <--------------------

theGame.shuffleCard();
$('.pic').append('<img class="target ocult" src="#">');
for (var i = 0; i < theGame.Cards.length; i++) {
  $('.pic img').eq(i).attr('src', 'img/' + theGame.Cards[i].img);
}



//Cards
var count = 0;

var firstImage;
var firstRight;

var secondRight;
var secondImage;


//Intents
var intentsCount = 0 ;
var intents = $('#intents').text(intentsCount);

// Fliped cards
var sumFliped = 0 ;
var flipedCards = $('#fliped').text(sumFliped);


$('.pic').on('click',function(e) {

  count++;
  if (count === 1) {
    //Intents
    intentsCount++;
    $(this).intents = $('#intents').text(intentsCount);


    theGame.pickedCards.push($(this).children().attr('src'));
    firstRight = $(this);
    firstImage = $(this).children().toggle();
    firstRight.addClass("avoidClicks");
  }


  // if (count === 2 && $(this).children() === theGame.pickedCards[0] ) {
  //   //prevent all clicks
  //   firstRight.addClass("avoidClicks");
  //   secondRight.addClass("avoidClicks");
  // }


  if (count === 2 && $(this).children() != theGame.pickedCards[0]) {
    //Intents
    intentsCount++;
    $(this).intents = $('#intents').text(intentsCount);

    theGame.pickedCards.push($(this).children().attr('src'));
    secondRight = $(this);
    secondImage = $(this).children().toggle();
    secondRight.addClass("avoidClicks");

    firstRight.removeClass("avoidClicks");



     if (theGame.pickedCards[0] === theGame.pickedCards[1]) {
       //prevent all clicks
       firstRight.addClass("avoidClicks");
       secondRight.addClass("avoidClicks");

       // Fliped cards
       sumFliped += 2;
       $(this).flipedCards = $('#fliped').text(sumFliped);


       $(this).children().show();
       count = 0;
       theGame.pickedCards = [];
      //  theGame.pickedCards.push($(this).children().attr('src'));
     }
     if (theGame.pickedCards[0] !== theGame.pickedCards[1]) {

      setTimeout(function(){ secondRight.removeClass("avoidClicks");}, 500);

      //  $(this).children().show();
       setTimeout(function(){ secondImage.toggle();}, 500);
      //  $(this).children().toggle();
      setTimeout(function(){  firstImage.toggle();}, 500);

      count = 0;

      theGame.pickedCards = [];

     }
}




  if ($("#fliped").text() >= 24) {
    setTimeout(function(){  alert("Victory");}, 2000);
  }





console.log('Count: ', count);
console.log(theGame.pickedCards);

});





});
