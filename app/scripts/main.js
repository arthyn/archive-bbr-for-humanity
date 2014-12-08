var cardPhrases = ['Never change.', 'Live every day like Facebook is down.', 'Naughty / Nice', 'Wow.<br>You nailed it.', 'If real life were Yelp, I\'d give you: <span class="ss-icon">star star star star star</span>', 'Surprise your friends by using your phone as a phone.', 'Be the wo/man you want to Google.', 'You must be butter \'cause you\'re on a roll', 'Tell a millenial s/he\'s special, because Lord knows nobody else has.', 'How about instead, we pray the hate away?', 'DO THE HUSTLE! Do-do-do-da-do-da-do-do-do...', 'When life hands you Nickelback, put vodka in your lemonade.', 'Don\'t sweat the small stuff, unless you\'re eating a jalapeño popper or something.', 'Hello. You\'re amazing. That is all.', '<span class="ss-icon like">like</span>', '*slow clap*', 'You\'re the Who to my Dat.', 'You. Me. Mistletoe.', 'Awesomeville<br>Population:<br>You', '#NicelyDone', 'Dance like the NSA isn\'t watching.', 'Use your fancy text machine to call your parents.', '4 out of 5 dentists agree: Nice legs.', 'Killer fedora,<br>bro.', 'You\'re so cool, I\'m at a loss for emojis', 'Before you reply, ask, "What would Morgan Freeman do?"', 'I went ahead and cleared your browser history. You\'re welcome.', 'Spend as much time worrying as you do reading the iTunes user agreement.', 'This card entitles the recipient to one sarcasm-free conversation. Or does it?', 'Go Kanye West, young man. Go Kanye West.', 'I admit I was wrong-ish.', 'Thank you for being the anti-douchebag.', 'Less whining. More wine-ing.', 'H8Rs gonna H8.', 'You rock.', 'You make it look easy.', '¡Bueno!', 'You do you.', 'Zing!', 'Your skills make me question my own life choices.', 'Bruce Springsteen + Tony Danza. Still not as boss as you.'];
var ideaPhrases = ['<p>Write handwritten notes whenever possible. Whether just to say “hi” or as a “thank you,” notes always mean more than a phone call, text or email.</p><span class="author">Bria</span>', '<p>Let someone ELSE have the last slice of pizza.</p><span class="author">Burt</span>', '<p>Call your local animal shelter and see if you can play Santa Paws. Provide food, new blankets or other gifts to furry friends!</p><span class="author">Cali</span>', '<p>Keep your Sunday sacred. No work. No email. No social media. Spend it on family time, downtime and you-time.</p><span class="author">Cathi</span>', '<p class="long-card">Provide hope to one of the more than 600 Haitian abandoned and vulnerable children that reside at Pwoje ESPWA. Make a single online donation or sponsor a child monthly and help feed, cloth and educate a child — and change a life. <a href="http://www.freethekids.org/" target="_blank">freethekids.org</a></p><span class="author">Cherie</span>', '<p>Surprise someone with Cane’s.</p><span class="author">Christina</span>', '<p>Be excellent to each other.</p><span class="author">Daniel</span>', '<p>Let that next person into your lane.</p><span class="author">Eddie</span>', '<p class="long-card">Give gifts that give back - at the holidays and year round. Consider shopping for products that foster sustainable contributions - like at the <a href="http://www.accompanyus.com" target="_blank">ACCOMPANY</a> global marketplace or with <a href="http://shop.plywoodpeople.com/collections/all" target="_blank">Plywood People</a></p><span class="author">Emily</span>', '<p>Remember the friendly traffic “thank you” wave.</p><span class="author">Hailey</span>', '<p>If you’re tech-savvy, help those who aren’t set up their new gadgets, and if you’re not tech-savvy and need help, be patient and bake cookies.</p><span class="author">Hunter</span>', '<p>Smile and say “thank you” when someone does something nice for you. Gratitude inspires great attitude.</p><span class="author">Jaime</span>', '<p>Donate your hoard of hotel soaps and shampoos to help the homeless get a fresh start.</p><span class="author">Julie</span>', '<p>Leave candy canes in all the mailboxes on your street.</p><span class="author">Kellie</span>', '<ul class="long-card"><li>Return your grocery cart...into the store.</li><li>Take a moonbath.</li><li>Celebrate an old person.</li><li>End blaming.</li><li>Take a nourishing nap.</li><li>Schedule Soulful times.</li></ul><span class="author">Kim</span>', '<p>Compliment a stranger on their smile/hair/outfit. It will make their day!</p><span class="author">Lauren</span>', '<p>Share a laugh with a stranger.</p><span class="author">Logan</span>', '<p>Loan a stranger your charger when their phone runs out of juice.</p><span class="author">Maggie</span>', '<p>When someone is coming up a bit short on cash in front of you at the store, give them the extra cash they need to get their items.</p><span class="author">Monica</span>', '<p>Pick up the tab of the person behind you in the drive thru. Pay it backward. Speed off afterward.</p><span class="author">Patrick</span>', '<p>Inspiration is contagious. Be a part of positive organizations like <a href="http://www.girlsontherunsola.org/" target="_blank">Girls on the Run</a> that encourage you (and young girls) to shine.</p><span class="author">Samantha</span>', '<p>Share some holiday “sparkle” by cleaning out and donating your old jewelry to the needy!</p><span class="author">Stephanie</span>', '<p>Donate your time. It’s much more valuable than money.</p><span class="author">Rodney</span>', '<p>Give really good hugs during the holidays.  Not those fake-o compulsory hugs, but really genuine hugs that use your heart muscle too!</p><span class="author">Sara</span>', '<p class="long-card">Return a missed call. Hold, name five things out loud you are grateful for during this time. Receive, voice or message? The person you called answered.<br>Throughout the conversation, the caller conveys empathy using her seven rules:</p><ol class="long-card"><li>Yes Sir.</li><li>No Sir.</li><li>Yes Ma\'am</li><li>No Ma\'am.</li><li>Please.</li><li>Thank You.</li><li>You\'re Welcome.</li></ol><span class="author">Taylor</span>', '<p>First seek to understand, then seek to be understood. Also, share your Netflix login.</p><span class="author">Tim</span>'];
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
var smallLayout;
var page;
var outputCards = {};
var hammerInstances = [];

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

	that.getImageNumber = function () {
		return spec.image || 1;
	}

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
	var cards = $('.card');
	if(!smallLayout) {
		for (var i = 0;i<3;i++){
			$(cards[i]).addClass('nav-card');
		}
		$(cards[0]).addClass('home-card');
		$(cards[1]).addClass('info-card');
		$(cards[2]).addClass('ideas-card');
		$(cards[3]).addClass('diy-card');
	}

	smallHomeCard = card({html: '<h1><span class="green">Holiday</span><br> Cards<br> for<br> Humanity</h1><img class="bbr" src="images/icon-bbr.png"><p class="hashtag">#ForGoodnessSake</p><p class="hashtag">#BBRForHumanity</p><div class="swipe-more"><img class="swipe" src="images/icon-finger.png" alt="right"><p>swipe for more</p></div>', position: 1, locked: true});
	homeCard = card({html: '<h1><span class="green">Holiday</span><br> Cards<br> for<br> Humanity</h1><a href="index.html"></a><img src="images/icon-bbr.png"><p class="hashtag">#ForGoodnessSake</p><p class="hashtag">#BBRForHumanity</p>', position: 1, locked: true});
	infoCard = card({html: '<h3>Our gift to you is your gift to give...</h3><p class="copy">for a job well done or to butter up your boss. Give props to your peeps, or just make someone\'s day a little brighter. Deck the halls and plaster friends\' walls by sending an e-card. Or print out your own stack and, heck, stock some stalls.</p><br><p class="copy">From the heart is where it\'s at&#8211;so spread some <span class="goodness">good for goodness\' sake.</span><br><div id="shuffle-button"><p><img src="images/icon-shuffle.png"> shuffle cards</p></div>', position: 2, locked: true});
	ideaCard = card({html: '<h2>Ideas<br>For Humanity</h2><a href="ideas.html"><img src="images/icon-ideas.png"></a>', position: 3});
	diyCard = card({html: '<h2>DIY<br>For Humanity</h2><div><img src="images/icon-cut.png"></div>', position: 4});
	//<img src="images/shuffle.png" alt="shuffle">
	//ecardsCard = card({html: '<h2>Ecards for Humanity</h2>', position: 4});
}

function generateRandomCards(smallLayout, page) {
	var cardData = page ? ideaPhrases : cardPhrases;
	var numCardsToGenerate = smallLayout ? cardData.length : cardSlots - 4;
	var numCardOptions = cardData.length;
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
		var phrase = cardData[random];
		console.log("Phrase: " + phrase + " Position: " + random);
		cardChoices[random] = phrase;
		var newCard = card({html: (page ? phrase : generateCardHTML(phrase)), position: smallLayout ? i + 2 : i + 5, image: random + 1});
		console.log(newCard.getHTML());
		//newCard.changePosition(outputCards, cardSlots);
		console.log(newCard.getPosition());
		outputCards[newCard.getPosition()] = newCard;
	}

	console.log(outputCards);
	return outputCards;
}

function roundedRect(ctx,x,y,width,height,radius){
  ctx.beginPath();
  ctx.moveTo(x,y+radius);
  ctx.lineTo(x,y+height-radius);
  ctx.quadraticCurveTo(x,y+height,x+radius,y+height);
  ctx.lineTo(x+width-radius,y+height);
  ctx.quadraticCurveTo(x+width,y+height,x+width,y+height-radius);
  ctx.lineTo(x+width,y+radius);
  ctx.quadraticCurveTo(x+width,y,x+width-radius,y);
  ctx.lineTo(x+radius,y);
  ctx.quadraticCurveTo(x,y,x,y+radius);
  ctx.fill();
}

function sendToFB(element) {
	var pictureURL = $(element).attr('st_image');
	console.log('sending to facebook'); 
	FB.ui({
		method: 'feed',
		link: 'http://www.bbrforhumanity.bbrcreativehost.com',
		redirect_uri: 'http://www.bbrforhumanity.bbrcreativehost.com',
		caption: 'Good for goodness sake.',
		picture: pictureURL,
	}, function(response) {});
}

function convertCardToCanvas(element) {
	//var url = $(element).find('.st_facebook_large').attr('st_image');
	//$(element).find('.st_facebook_large').removeAttr('st_image');
	//$('meta[property="og:image"]').attr('content', url);
	/*var dataURL;
	html2canvas(element, {
		onrendered: function(canvas) {
			dataURL = canvas.toDataURL();
			$('meta[property="og:image"]').attr('content', dataURL);
		},
		allowTaint: true,
		height: 300,
		width: 180,
		logging: true
	});*/
	/*w = 180;
	h = 300;
	canvas.width = w;
	canvas.height = h;
	canvas.id = 'card-canvas';
	var context = canvas.getContext('2d');
	roundedRect(context,0,0,180,300,15);*/
}

function setupSmallLayout(back) {
	var cards = $('.card');
	gutterWidth = cardWidth / 8;
	var leftOffset = cardWidth + (gutterWidth * 2);

	for(var i=1; i<cards.length; i++) {
		i === 3 || $(cards[i]).removeClass('animate');
		$(cards[i]).css('position', 'absolute')
				   .css('height', cardHeight + 'px')
				   .css('left', '-' + (leftOffset * i) + 'px');
		if(i === 1 && back) {
			$(cards[i]).css('top', '20px');
		}
		else {
			$(cards[i]).css('top', '0');
		}
		i === 3 || $(cards[i]).addClass('animate');
	}
}

function insertCardHTML(source, load) {
	var cards = $('.card .face');
	var backs = $('.card .back');
	for(var i = 0; i<cards.length; i++) {
		var number = source[i+1].getImageNumber();
		$(cards[i]).empty().append(source[i+1].getHTML());
		if(load) {
			$(backs[i]).empty().append('<h2>Share</h2><div class="social"><span class="facebook_large" st_image="http://www.bbrforhumanity.bbrcreativehost.com/images/' + number + '.png" displayText="Facebook"></span><span class="st_twitter_large" st_title="BBR For Humanity" st_url="http://www.bbrforhumanity.bbrcreativehost.com" st_image="http://www.bbrforhumanity.bbrcreativehost.com/images/' + number + '.png" displayText="Tweet"></span><span class="st_pinterest_large" st_title="BBR For Humanity" st_url="http://www.bbrforhumanity.bbrcreativehost.com" st_image="http://www.bbrforhumanity.bbrcreativehost.com/images/' + number + '.png" displayText="Pinterest"></span></div>');
			if(i === 3){
				$(backs[i]).empty().append('<p>Click to download a printable deck.</p><div><a href="diyforhumanity.pdf" target="_blank"><img src="images/icon-print.png"></a></div>');
			}
		}
	}
}
function bindClickFlip() {
	$('.card').not($('.nav-card')).on('click', function() {
		
		var nop3d = $('html').hasClass('no-transformstylepreserve3d');
		var currentStyles = nop3d ? $(this).children('.back').css('transform') : $(this).attr('style');
		var newStyles = '';
		var rotated = /.*\s-*rotateY\(180deg\);\s.*/;

		if(currentStyles.match(rotated) || currentStyles == 'matrix3d(-1, 0, 0, 0, 0, 1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1)') {
			if(nop3d) {
				$(this).children('.face').css('display', 'none');
				$(this).children('.back').css('transform', 'rotateY(0deg)');
				//console.log("no preserve-3d");
			}
			else {
				newStyles = currentStyles.replace('scale3d(1, 1, 1) rotateY(180deg);', 'scale3d(1, 1, 1) rotateY(20deg);');
				//console.log("preserve-3d");
			}
		} else {
			if(nop3d) {
				$(this).children('face').css('display', 'block');
				$(this).children('back').css('transform', 'rotateY(-180deg)');
				//console.log("no preserve-3d");
			}
			else {
				newStyles = currentStyles.replace('scale3d(1, 1, 1) rotateY(20deg);', 'scale3d(1, 1, 1) rotateY(180deg);');
				//console.log("preserve-3d");
			}
		}

		$(this).attr('style', newStyles);
		//console.log($(this).attr('style'));
	});
}

function bindHoverFlip() {
	$('.card').not($('.nav-card')).hover(function () {
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
		var START_Y = 0;

		var cards = $('.card');
		var cardWidth = $(cards[0]).width();
		var gutterWidth = cardWidth / 8;

		var ticking = false;
		var transform;
		var timer;

		var mc = new Hammer.Manager(el);
		hammerInstances.push(mc);
		mc.add(new Hammer.Pan({ threshold: 0, pointers: 0 }));
		mc.add(new Hammer.Swipe({velocity: 0.333})).recognizeWith(mc.get('pan'));
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
		    //console.log(ev.type);
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
		    var value = [
    	        'translate3d(' + transform.translate.x + 'px, 0, 0)',
    	        'scale(' + transform.scale + ', ' + transform.scale + ')',
    	        'rotate3d('+ transform.rx +','+ transform.ry +','+ transform.rz +','+  transform.angle + 'deg)'
    	    ];

		    value = value.join(" ");
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
		        x: START_X + ev.deltaX
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
			    $(newActive).removeClass('animate').addClass('animate');
			    newActive.style.position = 'relative';
			    newActive.style.left = '0';
			    newActive.style.top = '0';
			    
			    var cardList = document.querySelector('#card-list');
			    var oldCard = cards[0];
			    oldCard.style.position = 'absolute';
			    oldCard.style.left = cardWidth + gutterWidth + 'px';
			    oldCard.style.top = '0';
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
			    
			    setupSmallLayout(false);
			}
			else if(outputCards.pointer !== 1 && ev.direction & Hammer.DIRECTION_LEFT) {
				el.id = '';
				var cards = document.getElementsByClassName('card');
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

				setupSmallLayout(true);
			}

			clearTimeout(timer);
		    timer = setTimeout(function () {
		        resetElement();
		    }, 600);

    	    logEvent(ev);
    	    requestElementUpdate();
		}

		function onTap(ev) {
		    transform.ry = 1;
		    transform.angle = 180;

		    /*clearTimeout(timer);
		    timer = setTimeout(function () {
		        resetElement();
		    }, 200);*/

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
		$('#shuffle-button').on('click', $.proxy(this.onShuffle, this));
		this.$el.on('removed.shuffle', function (evt, $collection, shuffle) {
			if (!hasConsole) {
				return;
			}

			console.log(this, evt, $collection, shuffle);
		});
	};

	Shuffler.prototype.onShuffle = function () {
		outputCards = generateRandomCards(smallLayout, page);
		insertCardHTML(outputCards, false);
		this.$el.shuffle('sort', {randomize: true});
		$('#shuffle-button').on('click', $.proxy(this.onShuffle, this));
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

function populateLargeLayout(page) {
	var screenWidth = window.innerWidth - 14;
	var screenHeight = window.innerHeight;
	var widthInCards = Math.floor((screenWidth + (cardWidth/1.2)) / (cardWidth + gutterWidth));
	//$('.container').css('width', (widthInCards * (cardWidth + gutterWidth)) + 'px');
	console.log("Width in cards: " + widthInCards);
	console.log("Card + gutter: " + (cardWidth + gutterWidth));
	var numCards = widthInCards * Math.floor((screenHeight + (cardHeight/1.5) + gutterWidth) / (cardHeight + gutterWidth));
	console.log(numCards);
	var card = (document.getElementsByClassName('card'))[3];
	card = card.cloneNode(true);
	$(card).removeClass('nav-card');
	$(card).removeClass('diy-card');
	card.firstChild.innerHTML = '';
	var cardList = document.getElementById('card-list');

	if(page) {
		if(numCards - 4 > ideaPhrases.length) {
			numCards = ideaPhrases.length + 4;
		}
	}
	else {
		if(numCards - 4 > cardPhrases.length) {
			numCards = cardPhrases.length + 4;
		}
	}

	for(var i=0;i<numCards - 4;i++){
		cardList.appendChild(card.cloneNode(true));
	}
};
function layoutCards() {
	var viewWidth = window.innerWidth;
	page = window.location.pathname == '/ideas.html';
	smallLayout = !(viewWidth > 560);
	initializeCards();
	var card = $('.card')[0]
	cardWidth = $(card).width();
	cardHeight = $(card).height();
	gutterWidth = smallLayout ? cardWidth / 8 : 3;

	if(hammerInstances.length > 0) {
		for(var i=0;i<hammerInstances.length;i++){
			hammerInstances[i].destroy();
		}
	}

	if(!smallLayout) {
		populateLargeLayout(page);
		cardSlots = document.getElementsByClassName('card').length;
		console.log('Cardslots: ' + cardSlots);
		bindHoverFlip();
		bindClickFlip();
	}
	else {
		cardSlots = cardPhrases.length;
		setupSmallLayout(false);
		var cards = document.getElementsByClassName('card');
		for(var i = 0;i<cards.length;i++) {
			setupHammer(cards[i]);
		}
	}
	
	outputCards = generateRandomCards(smallLayout, page);
	outputCards['pointer'] = 1;
	insertCardHTML(outputCards, true);
	if(!smallLayout) {
		new window.Shuffler(document.getElementById('card-list'));
	}
	$('.facebook_large').on('click', function () {
		console.log('click event');
		sendToFB(this);
	});
}
$(document).ready(function () {
	var mql = window.matchMedia("(orientation: portrait)");
	layoutCards();

	mql.addListener(function (m) {
		layoutCards();
	});
});