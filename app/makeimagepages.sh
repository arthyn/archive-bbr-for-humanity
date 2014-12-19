#!/bin/bash
for i in `seq 1 48`;
do
	sed -i '' s/"http:\/\/bbrforhumanity\.com\/index[0-9]*\.html\/images\/BBR-FB-Holiday-graphic\.png"/"http:\/\/bbrforhumanity.com\/images\/$i.png"/ index$i.html
done