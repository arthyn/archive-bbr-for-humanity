var cardPhrases = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
var homeCard;
var ideaCard;
var diyCard;
var ecardsCard;
var cardSlots;
var outputCards = {};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var card = function (spec) {
	var that = {};

	that.getHTML = function () {
		return spec.html;
	};

	that.changePosition = function (potentialSlots, cards) {
		!(spec.locked) && (spec.position = generateUniquePosition(cards, potentialSlots));
	};

	that.getPosition = function () {
		return spec.position;
	};

	function generateUniquePosition(cardList, potentialSlots) {
		var random = getRandomInt(2, potentialSlots);
		if (cardList[random]) {
			var position = generateUniquePosition(cardList, potentialSlots);
			return position;
		} else {
			return random;
		}
	}

	return that;
};

function generateCardHTML(phrase) {
	return '<p>' + phrase + '</p>';
}
function initializeCards() {
	homeCard = card({html: '<h1>BBR</h1>', position: 1, locked: true});
	ideaCard = card({html: '<h2>Ideas for Humanity</h2>', position: 2});
	diyCard = card({html: '<h2>DIY for Humanity</h2>', position: 3});
	ecardsCard = card({html: '<h2>Ecards for Humanity</h2>', position: 4});
}

function generateRandomCards(numberOfStaticCards) {
	var numCardsToGenerate = cardSlots - numberOfStaticCards;
	var numCardOptions = cardPhrases.length;
	var outputCards = {};

	outputCards[homeCard.getPosition()] = homeCard;
	outputCards[ecardsCard.getPosition()] = ecardsCard;
	outputCards[ideaCard.getPosition()] = ideaCard;
	outputCards[diyCard.getPosition()] = diyCard;

	var cardChoices = {};
	for(var i = 0; i<numCardsToGenerate; i++) {
		var random = getRandomInt(0,numCardOptions);

		while(cardChoices[random]) {
			random = getRandomInt(0,numCardOptions);
		}
		var phrase = cardPhrases[random];
		cardChoices[random] = phrase;
		var newCard = card({html: generateCardHTML(phrase)});
		console.log(newCard.getHTML());
		newCard.changePosition(cardSlots+1, outputCards);
		console.log(newCard.getPosition());
		outputCards[newCard.getPosition()] = newCard;
	}

	console.log(outputCards);
	return outputCards;
}

function insertCardHTML(source) {
	var cards = $('.card .face');

	for(var i = 0; i<cards.length; i++) {
		$(cards[i]).empty().append(source[i+1].getHTML());
	}
}
function bindClickFlip() {
	$('.card').on('click', function() {
		var currentStyles = $(this).attr('style');
		var rotated = /.*\srotateY\(180deg\);\s.*/;
		console.log(rotated.test(' rotateY(180deg); '));
		if(currentStyles.match(rotated)) {
			var newStyles = currentStyles.replace('scale3d(1, 1, 1) rotateY(180deg);', 'scale3d(1, 1, 1) rotateY(20deg);');
		} else {
			var newStyles = currentStyles.replace('scale3d(1, 1, 1) rotateY(20deg);', 'scale3d(1, 1, 1) rotateY(180deg);');
		}

		$(this).attr('style', newStyles);
	});
}

function bindHoverFlip() {
	$('.card').hover(function () {
			var currentStyles = $(this).attr('style');
			var newStyles = currentStyles.replace('scale3d(1, 1, 1);', 'scale3d(1, 1, 1) rotateY(20deg);');
			$(this).attr('style', newStyles);
		},
		function () {
			var currentStyles = $(this).attr('style');
			var newStyles = currentStyles.replace('scale3d(1, 1, 1) rotateY(20deg);', 'scale3d(1, 1, 1);');
			$(this).attr('style', newStyles);
		}
	);
}

window.Shuffler = (function ($) {
	'use strict';

	var hasConsole = window.console && typeof window.console.log === 'function';

	var Shuffler = function (element) {
		this.$el = $(element);
		this.init();

		this.addToEnd = true;
		this.sequentialDelay = true;
	};

	Shuffler.prototype.init = function () {
		this.initShuffle();
		this.setupEvents();
	};

	Shuffler.prototype.initShuffle = function () {
		this.$el.shuffle({
			itemSelector: '.shuffle-item',
			speed: 400,
			easing: 'ease',
			columnWidth: 150,
			gutterWidth: function (containerWidth) {
				return 0.0235765 * containerWidth;
			}
		});

		this.shuffle = this.$el.data('shuffle');
	};

	Shuffler.prototype.setupEvents = function () {
		$('#shuffle').on('click', $.proxy(this.onShuffle, this));
		this.$el.on('removed.shuffle', function (evt, $collection, shuffle) {
			if (!hasConsole) {
				return;
			}

			console.log(this, evt, $collection, shuffle);
		});
	};

	Shuffler.prototype.onShuffle = function () {
		var output = generateRandomCards(4);
		insertCardHTML(output);
		this.$el.shuffle('sort', {randomize: true});
	};

	return Shuffler;

}(jQuery));

$(document).ready(function () {
	new window.Shuffler(document.getElementById('card-list'));
	cardSlots = document.getElementsByClassName('card').length;
	console.log('Cardslots: ' + cardSlots);
	initializeCards();
	output = generateRandomCards(4);
	insertCardHTML(output);
	bindClickFlip();
	bindHoverFlip();
});