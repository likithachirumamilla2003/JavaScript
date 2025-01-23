KAREL CHESS BOARD
function main(){
   beepersRight();
   goUpTurnLeft();
   beepersLeft();
   goUpTurnRight();
      beepersRight();
   goUpTurnLeft();
   beepersLeft();
   goUpTurnRight();
      beepersRight();
}
 
function goUpTurnRight() {
   turnRight();
   move();
   turnRight();
}
 
function goUpTurnLeft() {
   turnLeft();
   move();
   turnLeft();
}
 
function beepersRight() {
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   move();
   putBeeper();  
}
 
function beepersLeft() {
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   move();
}


LIFE IN WEEKS
function lifeInWeeks(age) {
    
    function lifeinweeks(age){
    var yearsremaining=90-age;
    var days=yearsremaining*365;
    var weeks=yearsremaining*52;
    var months=yearsremaining*12;
   
console.log("you have " +days+" days", +weeks+" weeks, " +months+"  months left");
}
lifeinweeks(21);
}

BMI CACULATOR
function bmicalculatore(weight,height)
{
    var bmi=weight/(height*height);
    return bmi;
}

LEAP YEAR:
function isLeap(year) {

    function isleap(year){
    if(year%4===0){
        if(year%100===0){
            if(year%400==0){
                return " leap year"
            }
            else{
                return "not leap year"
            }
            
        }else{
            return"leap year"
        }
        
    }
    else{
        return"not leap year";
    }
}
}
FIBONACCI SERIES

function fibonacciGenerator (n) {
var output = [];
if (n === 1) {
output = [0];
}
else if (n === 2) {
output = [0, 1];
}
else {
output = [0, 1];
for (var i=2; i < n; i++) {
output.push(output [output.length - 2] +
output [output.length - 1]);
}
}
return output;
}
output fibonacciGenerator(2);
console.log(output)

