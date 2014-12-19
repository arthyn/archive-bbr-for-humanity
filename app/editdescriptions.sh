#!/bin/bash
for i in `seq 1 48`;
do
	sed -i '' s/Sake/Sake\"\/>/ index$i.html
done