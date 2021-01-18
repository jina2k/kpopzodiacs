<?php

	//taken from stack overflow, link https://stackoverflow.com/questions/22012922/what-is-the-best-way-to-get-ogimage-meta-property
	$html = '';
	if (isset($_POST['url'])) {
		$html = $_POST['url'];
	}


	libxml_use_internal_errors(true);
	$doc = new DomDocument();
	$doc->loadHTML(file_get_contents($html));
	$xpath = new DOMXPath($doc);
	$query = '//*/meta[starts-with(@property, \'og:image\')]';
	$metas = $xpath->query($query);
	foreach ($metas as $meta) {
	    $property = $meta->getAttribute('property');
	    $content = $meta->getAttribute('content');
	    echo $content;
	    break;
	}
	//had multiple to show the dimensions of the image, for now only popping out the first (image link)
?>