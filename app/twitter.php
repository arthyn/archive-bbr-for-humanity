<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" lang="en"> <![endif]-->
<!--[if IE 9]>         <html class="no-js lt-ie10" lang="en"> <![endif]-->
<!--[if gt IE 9]>      <html class="no-js" lang="en"> <![endif]-->
    <head>
        <meta charset="utf-8">
        <script type="text/javascript">
        	var url = '<?php echo $_GET["url"];?>';
        	window.location.replace(/.*/g, 'twitter://' + url);

        	setTimeout(function (){
        		if(document.webkitHidden === false) {
        			window.location.replace(/.*/g, 'http://twitter/intent/tweet' + url);
        		}
        	}, 100);
        </script>
    </head>
    <body></body>
</html>