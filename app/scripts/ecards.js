function convertToCanvas() {
	var caption = document.getElementById('card-input').value;
	if(caption.length <= 80 && $('.card-custom:empty')){
		$('#card-toolong').remove();
		var card = $('#card-custom');
		card.css('display', 'block');
		$('.card-display canvas').remove();
		card.empty();
		card.append('<p>' + caption + '</p>');
		html2canvas(document.getElementById('card-custom'), {
			onrendered: function(canvas) {
				document.getElementsByClassName('card-display')[0].appendChild(canvas);
				card.css('display', 'none');
			}
		});
		
	}	
	else {
		console.log('Too long.');
		document.getElementById('card-toolong') || $('#card-create').after('<p id="card-toolong">Caption too long.</p>');
	}	
}

function createCanvas() {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');

	var data = '<svg xmlns="http://www.w3.org/2000/svg" width="150" height="250">' +
	           '<foreignObject width="100%" height="100%">' +
	           '<div xmlns="http://www.w3.org/1999/xhtml" style="border-radius: 15px;' +
	           'height: 250px;width: 150px; background: black;">' +
	           '<span style="color: white; font-size: 1em;  font-family: Helvetica, sans-serif;">test</span>' +
	           '</div>' +
	           '</foreignObject>' +
	           '</svg>';

	var DOMURL = window.URL || window.webkitURL || window;

	var img = new Image();
	var svg = new Blob([data], {type: 'image/svg+xml;charset=utf-8'});
	var url = DOMURL.createObjectURL(svg);

	img.onload = function () {
	  ctx.drawImage(img, 0, 0);
	  DOMURL.revokeObjectURL(url);
	}

	img.src = url;
}

function attachCardCreator() {
	$('#card-create').on('click', convertToCanvas);
}

$(document).ready(function () {
	attachCardCreator();
	createCanvas();
});