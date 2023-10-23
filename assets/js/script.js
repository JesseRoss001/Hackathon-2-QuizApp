document.addEventListener("DOMContentLoaded", function() { 
const questionArray = [
    {questionNumber:1,
    difficultyScore:1,
    questionContent: "What does BBC stand for?" ,
    updateA: "British Broadcasting Colour" , updateB: "British Boys Club", updateC : "British Badminton Corporation", updateD :"British BroadCasting Company", correctAnswer : "D"} , {}];
let displayQuestion = document.getElementById("question-space");
document.getElementById("A-text").addEventListener('click',function() {  selectA ('A') ; }
);
document.getElementById("B-text").addEventListener('click',function() {  selectB ('B') ; }
);
document.getElementById("C-text").addEventListener('click',function() {  selectC ('C') ; }
);
document.getElementById("D-text").addEventListener('click',function() {  selectD ('D') ; }
);















}