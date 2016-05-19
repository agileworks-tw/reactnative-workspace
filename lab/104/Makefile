test:
	adb shell screencap -p /sdcard/screencap.png
	adb pull /sdcard/screencap.png
	adb shell rm /sdcard/screencap.png

resize:
	convert screencap.png -resize 1024x600 -gravity center -background transparent -extent 1024x600 screencap.png