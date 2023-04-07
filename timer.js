function pause(howLong) {
var timer = getTime();
while (((getTime() - timer) < howLong)){}
}