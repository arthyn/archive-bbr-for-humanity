var cardPhrases = ['Never change.', 'Live every day like Facebook is down.', 'Naughty / Nice', 'Wow.<br>You nailed it.', 'If real life were Yelp, I\'d give you: <span class="ss-star"></span><span class="ss-star"></span><span class="ss-star"></span><span class="ss-star"></span><span class="ss-star"></span>', 'Surprise your friends by using your phone as a phone.', 'Be the wo/man you want to Google.', 'You must be butter \'cause you\'re on a roll', 'Tell a millenial s/he\'s special, because Lord knows nobody else has.', 'How about instead, we pray the hate away?', 'DO THE HUSTLE! Do-do-do-da-do-da-do-do-do...', 'When life hands you Nickelback, put vodka in your lemonade.', 'Don\'t sweat the small stuff, unless you\'re eating a jalapeño popper or something.', 'Hello. You\'re amazing. That is all.', '<span class="ss-like"></span>', '*slow clap*', 'You\'re the Who to my Dat.', 'You. Me. Mistletoe.', 'Awesomeville<br>Population:<br>You', '#NicelyDone', 'Dance like the NSA isn\'t watching.', 'Use your fancy text machine to call your parents.', '4 out of 5 dentists agree: Nice legs.', 'Killer fedora,<br>bro.', 'You\'re so cool, I\'m at a loss for emojis', 'Before you reply, ask, "What would Morgan Freeman do?"', 'I went ahead and cleared your browser history. You\'re welcome.', 'Spend as much time worrying as you do reading the iTunes user agreement.', 'This card entitles the recipient to one sarcasm-free conversation. Or does it?', 'Go Kanye West, young man. Go Kanye West.', 'I admit I was wrong-ish.', 'Thank you for being the anti-douchebag.', 'Less whining. More wine-ing.', 'H8Rs gonna H8.', 'You rock.', 'You make it look easy.', '¡Bueno!', 'You do you.', 'Zing!', 'Your skills make me question my own life choices.', 'Bruce Springsteen + Tony Danza. Still not as boss as you.'];
var homeCard;
var smallHomeCard;
var infoCard;
var ideaCard;
var diyCard;
var ecardsCard;
var cardSlots;
var gutterWidth = 3;
var footerHeight = 35;
var cardWidth;
var cardHeight;
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
		var random = getRandomInt(2, potentialSlots + 1);
		while(cards[random]){
			random = getRandomInt(2, potentialSlots + 1);
		}
		return random;
	}

	return that;
};

function generateCardHTML(phrase) {
	return '<p>' + phrase + '</p>';
}
function initializeCards() {
	smallHomeCard = card({html: '<h1><span class="green">Holiday</span><br> Cards<br> for<br> Humanity</h1><p class="swipe-more">swipe for more <span class="ss-right"></span></p>', position: 1, locked: true});
	homeCard = card({html: '<h1><span class="green">Holiday</span><br> Cards<br> for<br> Humanity</h1>', position: 1, locked: true});
	infoCard = card({html: '<h3>Our gift to you is your gift to give...</h3><p class="copy">for a job well done or to butter up your boss. Give props to your peeps, or just make someone\'s day a little brighter. Deck the halls and plaster friends\' walls by sending an e-card. Or print out your own stack and, heck, stock some stalls.</p><br><p class="copy">From the heart is where it\'s at&#8211;so spread some <span class="goodness">good for goodness\' sake.</span><br><div id="shuffle-button"><p><span class="ss-shuffle"></span> shuffle cards</p></div>', position: 2});
	ideaCard = card({html: '<h2>Ideas<br>For Humanity</h2>', position: 3});
	diyCard = card({html: '<h2>DIY<br>For Humanity</h2>', position: 4});
	//<img src="images/shuffle.png" alt="shuffle">
	//ecardsCard = card({html: '<h2>Ecards for Humanity</h2>', position: 4});
}

function generateRandomCards(smallLayout) {
	var numCardsToGenerate = smallLayout ? cardPhrases.length : cardSlots - 4;
	var numCardOptions = cardPhrases.length;
	var outputCards = {};


	outputCards[smallHomeCard.getPosition()] = smallHomeCard;
	//outputCards[ecardsCard.getPosition()] = ecardsCard;
	if(!smallLayout) {
		outputCards[homeCard.getPosition()] = homeCard;
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
		console.log("Phrase: " + phrase + " Position: " + random);
		cardChoices[random] = phrase;
		var newCard = card({html: generateCardHTML(phrase), position: smallLayout ? i + 2 : i + 5});
		console.log(newCard.getHTML());
		//newCard.changePosition(outputCards, cardSlots);
		console.log(newCard.getPosition());
		outputCards[newCard.getPosition()] = newCard;
	}

	console.log(outputCards);
	return outputCards;
}

function convertCardToCanvas() {
	var canvas = document.createElement('canvas');
	canvas.id = 'card-canvas';
	var context = canvas.getContext('2d');
}

function setupSmallLayout() {
	var cards = $('.card');
	var cardWidth = $(cards[0]).width();
	var cardHeight = $(cards[0]).height();
	var gutterWidth = cardWidth / 8;

	for(var i=1; i<cards.length; i++) {
		$(cards[i]).toggleClass('animate');
		$(cards[i]).css('position', 'absolute')
				   .css('top', '35px')
				   .css('height', cardHeight + 'px');
		if(i === 3) {
		 	$(cards[i]).css('left', cardWidth + gutterWidth + 'px');
		 			//.css('display', 'none');
		}else{
			$(cards[i]).css('left', '-' + ((cardWidth + gutterWidth) * i) + 'px');
		}
		$(cards[i]).toggleClass('animate');
	}
}

function insertCardHTML(source, smallLayout) {
	var cards = $('.card .face');
	var backs = $('.card .back');
	for(var i = 0; i<cards.length; i++) {
		$(cards[i]).empty().append(source[i+1].getHTML());
		$(backs[i]).empty().append('<h2>Share this: </h2><div class="social"><span class="st_facebook_large" displayText="Facebook"></span><span class="st_twitter_large" displayText="Tweet"></span><span class="st_pinterest_large" displayText="Pinterest"></span></div>');
	}
}
function bindClickFlip() {
	$('.card').on('click', function() {
		var nop3d = $('html').hasClass('no-transformstylepreserve3d');
		var currentStyles = nop3d ? $(this).children('.back').css('transform') : $(this).attr('style');
		var rotated = /.*\s-*rotateY\(180deg\);\s.*/;
		console.log(rotated.test(currentStyles));
		console.log(currentStyles);
		if(currentStyles.match(rotated) || currentStyles == 'matrix3d(-1, 0, 0, 0, 0, 1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1)') {
			if(nop3d) {
				$(this).children('.face').css('display', 'none');
				$(this).children('.back').css('transform', 'rotateY(0deg)');
				console.log("no preserve-3d");
			}
			else {
				var newStyles = currentStyles.replace('scale3d(1, 1, 1) rotateY(180deg);', 'scale3d(1, 1, 1) rotateY(20deg);');
				console.log("preserve-3d");
			}
		} else {
			if(nop3d) {
				$(this).children('face').css('display', 'block');
				$(this).children('back').css('transform', 'rotateY(-180deg)');
				console.log("no preserve-3d");
			}
			else {
				var newStyles = currentStyles.replace('scale3d(1, 1, 1) rotateY(20deg);', 'scale3d(1, 1, 1) rotateY(180deg);');
				console.log("preserve-3d");
			}
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

		var cards = $('.card');
		var cardWidth = $(cards[0]).width();
		var gutterWidth = cardWidth / 8;

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
		    
		    if(outputCards.pointer !== Object.keys(outputCards).length - 1 && ev.direction & Hammer.DIRECTION_RIGHT) {
			    el.id = '';
			    var cards = document.getElementsByClassName('shuffle-item');
			    var newActive = cards[1];
			    newActive.id = 'active-card';
			    newActive.style.position = 'relative';
			    newActive.style.left = '0';
			    newActive.style.top = '0';
			    var cardList = document.querySelector('#card-list');
			    var oldCard = cards[0];
			    oldCard.className = "card shuffle-item";
			    oldCard = cardList.removeChild(oldCard);
			    cardList.appendChild(oldCard);
			    var lastCard = document.querySelectorAll('.card .face')[2];
			    if(outputCards.pointer > 1  && outputCards.pointer < (Object.keys(outputCards).length - 3)) {
			    	lastCard.innerHTML = outputCards[outputCards.pointer + 3].getHTML();
			    	console.log(lastCard.innerHTML);
			    }
			    console.log(Object.keys(outputCards).length - 3);
			    if(outputCards.pointer < Object.keys(outputCards).length - 1) {
			    	outputCards.pointer += 1;
			    }
			    console.log(outputCards.pointer);
			    setupSmallLayout();
			}
			else if(outputCards.pointer !== 1 && ev.direction & Hammer.DIRECTION_LEFT) {
				el.id = '';
				var cards = document.getElementsByClassName('shuffle-item');
				var cardList = document.querySelector('#card-list');
				var newActive = cardList.removeChild(cards[3]);
				newActive.id = 'active-card';
				newActive.style.position = 'relative';
				newActive.style.left = '0';
				newActive.style.top = '0';
				cardList.insertBefore(newActive, cards[0]);
				var nextCard = document.querySelectorAll('.card .face')[3];
				if(outputCards.pointer > 2  && outputCards.pointer < (Object.keys(outputCards).length - 1)) {
					nextCard.innerHTML = outputCards[outputCards.pointer - 2].getHTML();
					console.log(nextCard.innerHTML);
				}
				console.log(Object.keys(outputCards).length - 3);
				if(outputCards.pointer > 1) {
					outputCards.pointer -= 1;
				}
				console.log(outputCards.pointer);
				setupSmallLayout();
			}
			
			clearTimeout(timer);
		    timer = setTimeout(function () {
		        resetElement();
		    }, 600);

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
			columnWidth: cardWidth,
			gutterWidth: gutterWidth
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

Modernizr.addValueTest = function(property,value){
    var testName= (property+value).replace(/-/g,'');
    Modernizr.addTest(testName , function () {
        var element = document.createElement('link');
        var body = document.getElementsByTagName('HEAD')[0];
        var properties = [];
        var upcaseProp = property.replace(/(^|-)([a-z])/g, function(a, b, c){ return c.toUpperCase(); });
        properties[property] = property;
        properties['Webkit'+upcaseProp] ='-webkit-'+property;
        properties['Moz'+upcaseProp] ='-moz-'+property;
        properties['ms'+upcaseProp] ='-ms-'+property;

        body.insertBefore(element, null);
        for (var i in properties) {
            if (element.style[i] !== undefined) {
                element.style[i] = value;
            }
        }
        //ie7,ie8 doesnt support getComputedStyle
        //so this is the implementation
        if(!window.getComputedStyle) {
            window.getComputedStyle = function(el, pseudo) {
                this.el = el;
                this.getPropertyValue = function(prop) {
                    var re = /(\-([a-z]){1})/g;
                    if (prop == 'float') prop = 'styleFloat';
                    if (re.test(prop)) {
                        prop = prop.replace(re, function () {
                            return arguments[2].toUpperCase();
                        });
                    }
                    return el.currentStyle[prop] ? el.currentStyle[prop] : null;
                };
                return this;
            };
        }

        var st = window.getComputedStyle(element, null),
            currentValue = st.getPropertyValue("-webkit-"+property) ||
                st.getPropertyValue("-moz-"+property) ||
                st.getPropertyValue("-ms-"+property) ||
                st.getPropertyValue(property);

        if(currentValue!== value){
            element.parentNode.removeChild(element);
            return false;
        }
        element.parentNode.removeChild(element);
        return true;
    });
}

Modernizr.addValueTest('transform-style', 'preserve-3d');

function populateLargeLayout() {
	var screenWidth = window.innerWidth - 14;
	var screenHeight = window.innerHeight;
	var widthInCards = Math.floor(screenWidth / (cardWidth + gutterWidth));
	//$('.container').css('width', (widthInCards * (cardWidth + gutterWidth)) + 'px');
	console.log("Width in cards: " + widthInCards);
	console.log("Card + gutter: " + (cardWidth + gutterWidth));
	var numCards = widthInCards * Math.floor((screenHeight + (cardHeight/1.5) + gutterWidth) / (cardHeight + gutterWidth));
	console.log(numCards);
	var card = (document.getElementsByClassName('card'))[3];
	card = card.cloneNode(true);
	card.firstChild.innerHTML = '';
	var cardList = document.getElementById('card-list');

	if(numCards - 4 > cardPhrases.length) {
		numCards = cardPhrases.length + 4;
	}

	for(var i=0;i<numCards - 4;i++){
		cardList.appendChild(card.cloneNode(true));
	}
};

$(document).ready(function () {
	var viewWidth = window.innerWidth;
	var smallLayout = !(viewWidth > 560);
	initializeCards();

	if(!smallLayout) {
		var card = $('.card')[0]
		cardWidth = $(card).width();
		cardHeight = $(card).height();
		populateLargeLayout();
		new window.Shuffler(document.getElementById('card-list'));
		cardSlots = document.getElementsByClassName('card').length;
		console.log('Cardslots: ' + cardSlots);
		bindHoverFlip();
	}
	else {
		cardSlots = cardPhrases.length;
		setupSmallLayout();
		var cards = document.getElementsByClassName('card');
		for(var i = 0;i<cards.length;i++) {
			setupHammer(cards[i]);
		}
	}
	
	outputCards = generateRandomCards(smallLayout);
	outputCards['pointer'] = 1;
	insertCardHTML(outputCards);
	bindClickFlip();
});