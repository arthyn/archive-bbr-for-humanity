var cardPhrases = ['Never change.', 'Live every day like Facebook is down.', '☐ Naughty<br>☒ Nice', 'Wow.<br>You nailed it.', 'If real life were Yelp, I\'d give you: <span class="ss-icon">star star star star star</span>', 'Surprise your friends by using your phone as a phone.', 'Be the wo/man you want to Google.', 'You must be butter \'cause you\'re on a roll.', 'Tell a millenial s/he\'s special, because Lord knows nobody else has.', 'How about instead, we pray the hate away?', 'DO THE HUSTLE! Do-do-do-da-do-da-do-do-do...', 'When life hands you Nickelback, put vodka in your lemonade.', 'Don\'t sweat the small stuff, unless you\'re eating a jalapeño popper or something.', 'Hello. You\'re amazing. That is all.', '<span class="ss-icon like">like</span>', '*slow clap*', 'You\'re the Who to my Dat.', 'You. Me. Mistletoe.', 'Awesomeville<br>Population:<br>You', '#NicelyDone', 'Dance like the NSA isn\'t watching.', 'Use your fancy text machine to call your parents.', '4 out of 5 dentists agree: Nice legs.', 'Killer fedora,<br>bro.', 'You\'re so cool, I\'m at a loss for emojis.', 'Before you reply, ask, "What would Morgan Freeman do?"', 'I went ahead and cleared your browser history. You\'re welcome.', 'Spend as much time worrying as you do reading the iTunes user agreement.', 'This card entitles the recipient to one sarcasm-free conversation. Or does it?', 'Go Kanye West, young man. Go Kanye West.', 'I admit I was wrong-ish.', 'Thank you for being the anti-douchebag.', 'Less whining. More wine-ing.', 'H8Rs gonna H8.', 'You rock.', 'You make it look easy.', '¡Bueno!', 'You do you.', 'Zing!', 'Your skills make me question my own life choices.', 'Bruce Springsteen + Tony Danza. Still not as boss as you.'];
var ideaPhrases = ['<p>Write handwritten notes whenever possible. Whether just to say “hi” or as a “thank you,” notes always mean more than a phone call, text or email.</p><a href="http://www.bbrcreative.com/agency/team-bria-wheeler.php" class="author">Bria</a>', '<p>Let someone ELSE have the last slice of pizza.</p><a href="http://www.bbrcreative.com/agency/team-burt-durand.php" class="author">Burt</a>', '<p>Call your local animal shelter and see if you can play Santa Paws. Provide food, new blankets or other gifts to furry friends!</p><a href="http://www.bbrcreative.com/agency/team-cali-comeaux.php" class="author">Cali</a>', '<p>Keep your Sunday sacred. No work. No email. No social media. Spend it on family time, downtime and you-time.</p><a href="http://www.bbrcreative.com/agency/team-cathi-pavy.php" class="author">Cathi</a>', '<p class="long-card">Provide hope to one of the more than 600 Haitian abandoned and vulnerable children that reside at Pwoje ESPWA. Make a single online donation or sponsor a child monthly and help feed, cloth and educate a child — and change a life. <a href="http://www.freethekids.org/" target="_blank">freethekids.org</a></p><a href="http://www.bbrcreative.com/agency/team-cherie-hebert.php" class="author">Cherie</a>', '<p>Surprise someone with Cane’s.</p><a href="" class="author">Christina</a>', '<p>Be excellent to each other.</p><a href="http://www.bbrcreative.com/agency/team-daniel-kedinger.php" class="author">Daniel</a>', '<p>Let that next person into your lane.</p><a href="http://www.bbrcreative.com/agency/team-eddie-talbot.php" class="author">Eddie</a>', '<p class="long-card">Give gifts that give back - at the holidays and year round. Consider shopping for products that foster sustainable contributions - like at the <a href="http://www.accompanyus.com" target="_blank">ACCOMPANY</a> global marketplace or with <a href="http://shop.plywoodpeople.com/collections/all" target="_blank">Plywood People</a></p><a href="http://www.bbrcreative.com/agency/team-emily-burke2.php" class="author">Emily</a>', '<p>Remember the friendly traffic “thank you” wave.</p><a href="http://www.bbrcreative.com/agency/team-hailey-vincent.php" class="author">Hailey</a>', '<p>If you’re tech-savvy, help those who aren’t set up their new gadgets, and if you’re not tech-savvy and need help, be patient and bake cookies.</p><a href="" class="author">Hunter</a>', '<p>Smile and say “thank you” when someone does something nice for you. Gratitude inspires great attitude.</p><a href="" class="author">Jamie</a>', '<p>Donate your hoard of hotel soaps and shampoos to help the homeless get a fresh start.</p><a href="http://www.bbrcreative.com/agency/team-julie-gauthier.php" class="author">Julie</a>', '<p>Leave candy canes in all the mailboxes on your street.</p><a href="http://www.bbrcreative.com/agency/team-kellie-viola.php" class="author">Kellie</a>', '<ul class="long-card"><li>Return your grocery cart...into the store.</li><li>Take a moonbath.</li><li>Celebrate an old person.</li><li>End blaming.</li><li>Take a nourishing nap.</li><li>Schedule Soulful times.</li></ul><a href="http://www.bbrcreative.com/agency/team-kim-neustrom2.php" class="author">Kim</a>', '<p>Compliment a stranger on their smile/hair/outfit. It will make their day!</p><a href="http://www.bbrcreative.com/agency/team-lauren-ducote.php" class="author">Lauren</a>', '<p>Share a laugh with a stranger.</p><a href="" class="author">Logan</a>', '<p>Loan a stranger your charger when their phone runs out of juice.</p><a href="" class="author">Maggie</a>', '<p>When someone is coming up a bit short on cash in front of you at the store, give them the extra cash they need to get their items.</p><a href="http://www.bbrcreative.com/agency/team-monica-hebert.php" class="author">Monica</a>', '<p>Pick up the tab of the person behind you in the drive thru. Pay it backward. Speed off afterward.</p><a href="" class="author">Patrick</a>', '<p>Inspiration is contagious. Be a part of positive organizations like <a href="http://www.girlsontherunsola.org/" target="_blank">Girls on the Run</a> that encourage you (and young girls) to shine.</p><a href="http://www.bbrcreative.com/agency/team-sam-rebowe.php" class="author">Samantha</a>', '<p>Share some holiday “sparkle” by cleaning out and donating your old jewelry to the needy!</p><a href="" class="author">Stephanie</a>', '<p>Donate your time. It’s much more valuable than money.</p><a href="http://www.bbrcreative.com/agency/team-rodney-hess.php" class="author">Rodney</a>', '<p>Give really good hugs during the holidays.  Not those fake-o compulsory hugs, but really genuine hugs that use your heart muscle too!</p><a href="http://www.bbrcreative.com/agency/team-sara-ashy.php" class="author">Sara</a>', '<p class="extra-long-card">Return a missed call. Hold, name five things out loud you are grateful for during this time. Receive, voice or message? The person you called answered.<br>Throughout the conversation, the caller conveys empathy using her seven rules:</p><ol class="extra-long-card"><li>Yes Sir.</li><li>No Sir.</li><li>Yes Ma\'am</li><li>No Ma\'am.</li><li>Please.</li><li>Thank You.</li><li>You\'re Welcome.</li></ol><a href="" class="author">Taylor</a>', '<p>First seek to understand, then seek to be understood. Also, share your Netflix login.</p><a href="http://www.bbrcreative.com/agency/team-tim-landry.php" class="author">Tim</a>'];
var homeCard;
var smallHomeCard;
var infoCard;
var ideasInfoCard;
var smallIdeasCard;
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
		if(page) {
			$(cards[2]).addClass('info-card');
			$(cards[1]).addClass('ideas-card');
		}
		else {
			$(cards[1]).addClass('info-card');
			$(cards[2]).addClass('ideas-card');
		}
		$(cards[3]).addClass('diy-card');
	}
	else {
		$(cards[0]).addClass('nav-card');
		$(cards[1]).addClass('nav-card');
	}

	smallHomeCard = card({html: '<h1><span class="green">Holiday</span><br> Cards<br> for<br> Humanity</h1><div class="brand-hash"><a href="http://www.bbrcreative.com"><img class="bbr" src="images/icon-bbr.png"></a><p class="hashtag"><a href="https://tagboard.com/forgoodnesssake/search">#ForGoodnessSake</a></p><p class="hashtag"><a href="https://tagboard.com/bbrforhumanity/search">#BBRForHumanity</a></p></div><div class="swipe-more"><p>swipe for more</p><img class="swipe" src="images/icon-finger.png" alt="right"></div>', position: 1, locked: true});
	homeCard = card({html: '<a href="index.html"><h1><span class="green">Holiday</span><br> Cards<br> for<br> Humanity</h1></a><a href="http://www.bbrcreative.com"><img class="bbr" src="images/icon-bbr.png"></a><p class="hashtag"><a href="https://tagboard.com/forgoodnesssake/search">#ForGoodnessSake</a></p><p class="hashtag"><a href="https://tagboard.com/bbrforhumanity/search">#BBRForHumanity</a></p>', position: 1, locked: true});
	infoCard = card({html: '<h3>Our gift to you is your gift to give...</h3><p class="copy">for a job well done or to butter up your boss. Give props to your peeps, or just make someone\'s day a little brighter. Deck the halls and plaster friends\' walls by sending an e-card. Or print out your own stack and, heck, stock some stalls.</p><br><p class="copy">From the heart is where it\'s at&#8211;so spread some <span class="goodness">good for goodness\' sake.</span><br><div id="shuffle-button"><p><img src="images/icon-shuffle.png"> shuffle cards</p></div>', position: 2, locked: true});
	ideasInfoCard = card({html: '<h3>Our gift to you is your gift to give...</h3><p class="copy">for a job well done or to butter up your boss. Give props to your peeps, or just make someone\'s day a little brighter. Deck the halls and plaster friends\' walls by sending an e-card. Or print out your own stack and, heck, stock some stalls.</p><br><p class="copy">From the heart is where it\'s at&#8211;so spread some <span class="goodness">good for goodness\' sake.</span><br><div id="shuffle-button"><p><img src="images/icon-shuffle.png"> shuffle cards</p></div>', position: (smallLayout ? 2 : 3)});
	smallIdeasCard = card({html: '<h2><span class="green">Ideas</span><br>For Humanity</h2><div><img src="images/icon-ideas.png"></div><div class="brand-hash"><a href="http://www.bbrcreative.com"><img class="bbr" src="images/icon-bbr.png"></a><p class="hashtag"><a href="https://tagboard.com/forgoodnesssake/search">#ForGoodnessSake</a></p><p class="hashtag"><a href="https://tagboard.com/bbrforhumanity/search">#BBRForHumanity</a></p></div><div class="swipe-more"><p>swipe for more</p><img class="swipe" src="images/icon-finger.png" alt="right"></div>', position: 1, locked: true});
	ideaCard = card({html: ('<h2>Ideas<br>For Humanity</h2><a href="ideas.html"><img src="images/icon-ideas.png"></a>'), position: (page ? 2 : 3)});
	diyCard = card({html: '<h2>DIY<br>For Humanity</h2><div><img src="images/icon-cut.png"></div>', position: 4});
}

function generateRandomCards(smallLayout, page) {
	var cardData = page ? ideaPhrases : cardPhrases;
	var numCardsToGenerate = smallLayout ? cardData.length : cardSlots - 4;
	var numCardOptions = cardData.length;
	var outputCards = {};

	if(!smallLayout) {
		outputCards[homeCard.getPosition()] = homeCard;
		if(page){
			outputCards[ideasInfoCard.getPosition()] = ideasInfoCard;
		}
		else {
			outputCards[infoCard.getPosition()] = infoCard;
		}
		outputCards[ideaCard.getPosition()] = ideaCard;
		outputCards[diyCard.getPosition()] = diyCard;
	}
	else {
		if(page){
			outputCards[smallIdeasCard.getPosition()] = smallIdeasCard;
			outputCards[ideasInfoCard.getPosition()] = ideasInfoCard;
		}
		else {
			outputCards[smallHomeCard.getPosition()] = smallHomeCard;
			outputCards[infoCard.getPosition()] = infoCard;
		}
	}

	var cardChoices = {};
	for(var i = 0; i<numCardsToGenerate; i++) {
		var random = getRandomInt(0,numCardOptions);

		while(cardChoices[random]) {
			random = getRandomInt(0,numCardOptions);
		}
		var phrase = cardData[random];
		//console.log("Phrase: " + phrase + " Position: " + random);
		cardChoices[random] = phrase;
		var newCard = card({html: (page ? phrase : generateCardHTML(phrase)), position: smallLayout ? i + 3 : i + 5, image: page ? 'idea' + (random + 1) : random + 1});
		//console.log(newCard.getHTML());
		//console.log(newCard.getPosition());
		outputCards[newCard.getPosition()] = newCard;
	}

	//console.log(outputCards);
	return outputCards;
}

function insertCardHTML(source, load) {
	var cards = $('.card .face');
	var backs = $('.card .back');
	for(var i = 0; i<cards.length; i++) {
		var number = source[i+1].getImageNumber();
		$(cards[i]).empty().append(source[i+1].getHTML());
		if(load) {
			$(backs[i]).empty().append('<h2>Share</h2><div class="social"><span class="facebook" st_image="http://www.bbrforhumanity.bbrcreativehost.com/images/' + number + '.png" displayText="Facebook"></span><a href="https://twitter.com/home?status=Make%20someone%27s%20day%20brighter%20with%20Holiday%20Cards%20for%20Humanity%20http://bbrforhumanity.com%20%23BBRforHumanity%20%23ForGoodnessSake%20" class="twitter" displayText="Twitter" target="_blank"></a><a href="https://pinterest.com/pin/create/button/?url=http://www.bbrforhumanity.bbrcreativehost.com&media=http://www.bbrforhumanity.bbrcreativehost.com/images/1.png&description=Good%20for%20goodness%20sake!" class="pinterest" displayText="Pinterest" target="_blank"></a></div>');
			if(i === 3 && !smallLayout){
				$(backs[i]).empty().append('<p>Click to download a printable deck.</p><div><a href="diyforhumanity.pdf" target="_blank"><img src="images/icon-print.png"></a></div>');
			}
		}
	}
	if(smallLayout){
		$('#shuffle-button').remove();
	}
}

function insertCard(position){
	var cards = $('.card');
	var card = cards[4].cloneNode(true);

	$(card).find('.face').empty().append(outputCards[position].getHTML());
	$(card).find('.back').empty().append('<h2>Share</h2><div class="social"><span class="facebook" st_image="http://www.bbrforhumanity.bbrcreativehost.com/images/' + outputCards[position].getImageNumber() + '.png" displayText="Facebook"></span><a href="https://twitter.com/home?status=Make%20someone%27s%20day%20brighter%20with%20Holiday%20Cards%20for%20Humanity%20http://bbrforhumanity.com%20%23BBRforHumanity%20%23ForGoodnessSake%20" class="twitter" displayText="Twitter" target="_blank"></a><a href="https://pinterest.com/pin/create/button/?url=http://www.bbrforhumanity.bbrcreativehost.com&media=http://www.bbrforhumanity.bbrcreativehost.com/images/1.png&description=Good%20for%20goodness%20sake!" class="pinterest" displayText="Pinterest" target="_blank"></a></div>')

	return card;
}

function updateCards(){
	var owl = $('.owl-carousel').data('owlCarousel');
	var previous = owl.prevItem;
	console.log(previous);
	var current = owl.currentItem;
	console.log(current);
	/*var numItems = Object.keys(outputCards).length - 1;
	//console.log(numItems);
	var direction = previous < current ? 1 : -1;
	console.log(direction);

	if(direction === 1) {
		if(outputCards.pointer < numItems - 3){
			owl.addItem(insertCard(outputCards.pointer+3));
			owl.removeItem(current-2);
		}
		outputCards.pointer += 1;
	}
	else {
		if(outputCards.pointer > 3) {
			owl.addItem(insertCard(outputCards.pointer-3), 0);
			owl.removeItem();
		}
		outputCards.pointer -= 1;
	}
	console.log(outputCards.pointer);*/
	var cards = $('.card');
	$(cards[current]).addClass('active-card');
	$(cards[previous]).removeClass('active-card');
}

function sendToFB(element) {
	var pictureURL = $(element).attr('st_image');
	//console.log('sending to facebook'); 
	FB.ui({
		method: 'feed',
		link: 'http://www.bbrforhumanity.bbrcreativehost.com',
		redirect_uri: 'http://www.bbrforhumanity.bbrcreativehost.com',
		caption: 'Good for goodness sake.',
		description: 'Holiday Cards For Humanity',
		picture: pictureURL,
	}, function(response) {});
}

function populateLayout(smallLayout, page) {
	var cards = $('.card');
	if(smallLayout) {
		var numCards = (page ? ideaPhrases.length : cardPhrases.length) - cards.length + 2;
	}
	else{
		var screenWidth = window.innerWidth - 14;
		var screenHeight = window.innerHeight;
		var widthInCards = Math.floor((screenWidth + (cardWidth/1.2)) / (cardWidth + gutterWidth));
		//$('.container').css('width', (widthInCards * (cardWidth + gutterWidth)) + 'px');
		//console.log("Width in cards: " + widthInCards);
		//console.log("Card + gutter: " + (cardWidth + gutterWidth));
		var numCards = widthInCards * Math.floor((screenHeight + (cardHeight/1.5) + gutterWidth) / (cardHeight + gutterWidth));
		//console.log(numCards);
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
	}
	
	var card = (document.getElementsByClassName('card'))[3];
	card = card.cloneNode(true);
	$(card).removeClass('nav-card');
	$(card).removeClass('diy-card');
	card.firstChild.innerHTML = '';
	var cardList = document.getElementById('card-list');

	for(var i=0;i<numCards - 4;i++){
		cardList.appendChild(card.cloneNode(true));
	}

	cardSlots = numCards;
};

function bindClickFlip() {
	$('.card').not($('.nav-card')).on('click', function() {
		
		var nop3d = $('html').hasClass('no-transformstylepreserve3d');
		//console.log(nop3d);
		var currentStyles = nop3d ? $(this).children('.back').css('transform') : $(this).attr('style') || '';
		var newStyles = '';
		var rotated = /.*\s-*rotateY\(180deg\);\s.*/;
		console.log(currentStyles);
		console.log("Match: " + currentStyles.match(rotated));
		console.log("Matrix: " + (currentStyles == 'matrix3d(-1, 0, 0, 0, 0, 1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1)'));
		if(currentStyles.match(rotated) || currentStyles == 'matrix3d(-1, 0, 0, 0, 0, 1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1)') {
			if(nop3d) {
				$(this).children('.face').css('display', 'none');
				$(this).children('.back').css('transform', 'rotateY(0deg)');
			}
			else if(smallLayout) {
				newStyles = 'transform: rotateY(0deg); -webkit-transform: rotateY(0deg); -moz-transform: rotateY(0deg);';
			}
			else {
				newStyles = currentStyles.replace('scale3d(1, 1, 1) rotateY(180deg);', 'scale3d(1, 1, 1) rotateY(20deg);');
			}
		} else {
			if(nop3d) {
				$(this).children('.face').css('display', 'block');
				$(this).children('.back').css('transform', 'rotateY(180deg)');
			}
			else if(smallLayout) {
				newStyles = 'transform: rotateY(180deg); -webkit-transform: rotateY(180deg); -moz-transform: rotateY(180deg);';
			}
			else {
				newStyles = currentStyles.replace('scale3d(1, 1, 1) rotateY(20deg);', 'scale3d(1, 1, 1) rotateY(180deg);');
			}
		}
		if(newStyles !== ''){
			$(this).attr('style', newStyles);
		}
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

function layoutDIY() {
	var cards = $('.owl-item');
	var card = cards[0].cloneNode(true);
	$(cards).remove();
	$(card).find('.card').addClass('diy-card');
	$('.brand .green').removeClass('green');
	$('.idea .green').removeClass('green');
	$('.diy a').addClass('green');
	var html = diyCard.getHTML().replace('DIY', '<span class="green">DIY</span>');
	$(card).find('.face').empty().append(html);
	$(card).find('.back').empty().append('<p>Click to download a printable deck.</p><div><a href="diyforhumanity.pdf" target="_blank"><img src="images/icon-print.png"></a></div>');
	$(card).addClass('active-card');
	$('.owl-wrapper').append(card);
	var owl = $('.owl-carousel').data('owlCarousel');
	owl.reinit({
			singleitem: true,
			slideSpeed: 150,
			paginationSpeed: 200,
			pagination: false,
			rewindNav: true,
			touchDrag: false
		});
	bindClickFlip();
}

function layoutCards() {
	var viewWidth = window.innerWidth;
	page = window.location.pathname == '/ideas.html';
	smallLayout = !(viewWidth > 560);
	var card = $('.card')[0]
	cardWidth = $(card).width();
	cardHeight = $(card).height();
	gutterWidth = smallLayout ? cardWidth / 8 : 3;
	initializeCards();

	if(!smallLayout) {
		$('#card-list').removeClass('owl-carousel');
	}
	
	populateLayout(smallLayout, page);
	outputCards = generateRandomCards(smallLayout, page);
	outputCards['pointer'] = 1;
	insertCardHTML(outputCards, true);

	if(!smallLayout) {
		new window.Shuffler(document.getElementById('card-list'));
		bindHoverFlip();
	}
	else{
		//console.log("owl");
		$('#card-list').owlCarousel({
			singleitem: true,
			slideSpeed: 150,
			paginationSpeed: 200,
			pagination: false,
			rewindNav: true,
			afterMove: updateCards
		});
	}

	bindClickFlip();
	$('.facebook').on('click', function () {
		//console.log('click event');
		sendToFB(this);
	});
}
$(document).ready(function () {
	layoutCards();
});