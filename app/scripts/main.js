var cardPhrases = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
var homeCard;
var infoCard;
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

	that.changePosition = function (cards, potentialSlots) {
		!(spec.locked) && (spec.position = generateUniquePosition(cards, potentialSlots));
	};

	that.getPosition = function () {
		return spec.position;
	};

	function generateUniquePosition(cards, potentialSlots) {
		var random = getRandomInt(2, potentialSlots+2);
		if (cards[random]) {
			var position = generateUniquePosition(cards, potentialSlots);
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
	homeCard = card({html: '<h2><span class="green">Holiday</span><br> Cards<br> for<br> Humanity</h2>', position: 1, locked: true});
	infoCard = card({html: '<p>info</p>', position: 2});
	ideaCard = card({html: '<h2>Ideas for Humanity</h2>', position: 3});
	diyCard = card({html: '<h2>DIY for Humanity</h2>', position: 4});
	//ecardsCard = card({html: '<h2>Ecards for Humanity</h2>', position: 4});
}

function generateRandomCards(smallLayout) {
	var numCardsToGenerate = smallLayout ? cardPhrases.length : cardSlots - 4;
	var numCardOptions = cardPhrases.length;
	var outputCards = {};

	outputCards[homeCard.getPosition()] = homeCard;
	//outputCards[ecardsCard.getPosition()] = ecardsCard;
	if(!smallLayout) {
		outputCards[infoCard.getPosition()] = infoCard;
		outputCards[ideaCard.getPosition()] = ideaCard;
		outputCards[diyCard.getPosition()] = diyCard;
	}

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
		newCard.changePosition(outputCards, cardSlots);
		console.log(newCard.getPosition());
		outputCards[newCard.getPosition()] = newCard;
	}

	console.log(outputCards);
	return outputCards;
}



function setupSmallLayout() {
	outputCards['pointer'] = 1;
	var cards = $('.card');
	var cardWidth = $(cards[0]).width();
	var gutterWidth = cardWidth / 8;

	for(var i=1; i<cards.length; i++) {
		$(cards[i]).css('position', 'absolute')
				.css('left', '-' + ((cardWidth + gutterWidth) * i) + 'px')
				.css('top', '0');
	}
}

function insertCardHTML(source, smallLayout) {
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

function setupHammer(element) {
	var reqAnimationFrame = (function () {
		    return window[Hammer.prefixed(window, 'requestAnimationFrame')] || function (callback) {
		        window.setTimeout(callback, 1000 / 60);
		    };
		})();

		var area = document.querySelector(".shuffle");
		var el = element;

		var START_X = Math.round((area.offsetWidth - el.offsetWidth) / 2);
		var START_Y = Math.round((area.offsetHeight - el.offsetHeight) / 2);

		var ticking = false;
		var transform;
		var timer;

		var mc = new Hammer.Manager(el);

		mc.add(new Hammer.Pan({ threshold: 0, pointers: 0 }));
		mc.add(new Hammer.Swipe()).recognizeWith(mc.get('pan'));
		mc.add(new Hammer.Tap());

		mc.on("panstart panmove", onPan);
		mc.on("swipe", onSwipe);
		mc.on("tap", onTap);

		mc.on("hammer.input", function(ev) {
		    if(ev.isFinal) {
		        resetElement();
		    }
		});

		function logEvent(ev) {
		    //el.innerText = ev.type;
		}

		function resetElement() {
		    el.className = 'card shuffle-item animate';
		    transform = {
		        translate: { x: START_X, y: START_Y },
		        scale: 1,
		        angle: 0,
		        rx: 0,
		        ry: 0,
		        rz: 0
		    };
		    requestElementUpdate();
		}

		function updateElementTransform() {
		    var value = 'translate3d(' + transform.translate.x + 'px, 0, 0)';
		    el.style.webkitTransform = value;
		    el.style.mozTransform = value;
		    el.style.transform = value;
		    ticking = false;
		}

		function requestElementUpdate() {
		    if(!ticking) {
		        reqAnimationFrame(updateElementTransform);
		        ticking = true;
		    }
		}

		function onPan(ev) {
		    el.className = "card shuffle-item";
		    transform.translate = {
		        x: START_X + ev.deltaX,
		    };

		    logEvent(ev);
		    requestElementUpdate();
		}

		function onSwipe(ev) {
		    
		    
		    var oldCard = el;
		    el.id = '';
		    var newActive = document.getElementsByClassName('shuffle-item')[1];
		    newActive.id = 'active-card';
		    setupHammer(newActive);
		    newActive.style.position = 'relative';
		    newActive.style.left = '0';
		    var cardList = document.querySelector('#card-list');
		    oldCard.className = "card shuffle-item";
		    oldCard = cardList.removeChild(oldCard);
		    cardList.appendChild(oldCard);
		    oldCard.removeAttribute('style');
		    setupSmallLayout();

		    

    	    logEvent(ev);
    	    requestElementUpdate();
		}

		function onTap(ev) {
		    transform.rx = 1;
		    transform.angle = 25;

		    clearTimeout(timer);
		    timer = setTimeout(function () {
		        resetElement();
		    }, 200);

		    logEvent(ev);
		    requestElementUpdate();
		}

		resetElement();
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
			gutterWidth: 2
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

function populateLargeLayout() {};

$(document).ready(function () {
	var viewWidth = window.innerWidth;
	var smallLayout = !(viewWidth > 560);
	initializeCards();

	if(!smallLayout) {
		populateLargeLayout();
		new window.Shuffler(document.getElementById('card-list'));
		cardSlots = document.getElementsByClassName('card').length;
		console.log('Cardslots: ' + cardSlots);
	}
	else {
		cardSlots = cardPhrases.length;
		setupSmallLayout();
		setupHammer(document.querySelector('#active-card'));
	}
	
	output = generateRandomCards(smallLayout);
	insertCardHTML(output);
	bindClickFlip();
	bindHoverFlip();
});