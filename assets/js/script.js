document.addEventListener("DOMContentLoaded", function() { 
const questionArray = [
    {questionNumber:1,
    difficultyScore:1,
    questionContent: "What does BBC stand for?" ,
    updateA: "British Broadcasting Colour" ,
     updateB: "British Boys Club",
      updateC : "British Badminton Corporation",
       updateD :"British BroadCasting Company",
        correctAnswer : "D"}, {

        },
        {
            questionNumber: 2,
            difficultyScore: 1,
            questionContent: "What is it called when your body doesn't have enough water?",
            updateA: "Exhaustion",
            updateB: "Dehydration",
            updateC: "Malnutrition",
            updateD: "Hypothermia",
            correctAnswer: "B"
          },
          {
            questionNumber: 3,
            difficultyScore: 1,
            questionContent: "What is the capital of France?",
            updateA: "Rome",
            updateB: "Berlin",
            updateC: "Paris",
            updateD: "Madrid",
            correctAnswer: "C"
          },
          {
            questionNumber: 4,
            difficultyScore: 2,
            questionContent: "Which planet is known as the Red Planet?",
            updateA: "Venus",
            updateB: "Mars",
            updateC: "Jupiter",
            updateD: "Saturn",
            correctAnswer: "B"
          },
          {
            questionNumber: 5,
            difficultyScore: 1,
            questionContent: "Which animal is known as the King of the Jungle?",
            updateA: "Elephant",
            updateB: "Tiger",
            updateC: "Lion",
            updateD: "Giraffe",
            correctAnswer: "C"
          },
          {
            questionNumber: 6,
            difficultyScore: 2,
            questionContent: "Which fruit is known as the King of Fruits?",
            updateA: "Apple",
            updateB: "Banana",
            updateC: "Durian",
            updateD: "Grapes",
            correctAnswer: "C"
          },
          {
            questionNumber: 7,
            difficultyScore: 1,
            questionContent: "What is the main ingredient in guacamole?",
            updateA: "Tomatoes",
            updateB: "Peppers",
            updateC: "Avocado",
            updateD: "Onions",
            correctAnswer: "C"
          },
          {
            questionNumber: 8,
            difficultyScore: 1,
            questionContent: "What is the primary language spoken in Brazil?",
            updateA: "Spanish",
            updateB: "English",
            updateC: "Portuguese",
            updateD: "French",
            correctAnswer: "C"
          },
          {
            questionNumber: 9,
            difficultyScore: 1,
            questionContent: "What is the tallest mountain in the world?",
            updateA: "K2",
            updateB: "Mount Everest",
            updateC: "Kangchenjunga",
            updateD: "Lhotse",
            correctAnswer: "B"
          },
          {
            questionNumber: 10,
            difficultyScore: 2,
            questionContent: "Who painted the Mona Lisa?",
            updateA: "Vincent Van Gogh",
            updateB: "Pablo Picasso",
            updateC: "Leonardo da Vinci",
            updateD: "Michelangelo",
            correctAnswer: "C"
          },
          {
            questionNumber: 11,
            difficultyScore: 1,
            questionContent: "What is the capital of Japan?",
            updateA: "Seoul",
            updateB: "Beijing",
            updateC: "Tokyo",
            updateD: "Osaka",
            correctAnswer: "C"
          },
          {
            questionNumber: 12,
            difficultyScore: 2,
            questionContent: "Which ocean is the largest?",
            updateA: "Atlantic Ocean",
            updateB: "Indian Ocean",
            updateC: "Arctic Ocean",
            updateD: "Pacific Ocean",
            correctAnswer: "D"
          },
          {
            questionNumber: 13,
            difficultyScore: 1,
            questionContent: "What is the name of the fairy tale character who leaves a glass slipper at a royal ball?",
            updateA: "Sleeping Beauty",
            updateB: "Cinderella",
            updateC: "Snow White",
            updateD: "Rapunzel",
            correctAnswer: "B"
          },
          {
            questionNumber: 14,
            difficultyScore: 2,
            questionContent: "What is the primary ingredient in a traditional Greek salad?",
            updateA: "Lettuce",
            updateB: "Cucumber",
            updateC: "Tomatoes",
            updateD: "Carrots",
            correctAnswer: "C"
          },
          {
            questionNumber: 15,
            difficultyScore: 1,
            questionContent: "Which country is known as the Land of the Rising Sun?",
            updateA: "China",
            updateB: "South Korea",
            updateC: "Japan",
            updateD: "Vietnam",
            correctAnswer: "C"
          },
          {
            questionNumber: 16,
            difficultyScore: 2,
            questionContent: "What is the name of the Disney character known for leaving a trail of breadcrumbs?",
            updateA: "Snow White",
            updateB: "Cinderella",
            updateC: "Hansel",
            updateD: "Peter Pan",
            correctAnswer: "C"
          },
          {
            questionNumber: 17,
            difficultyScore: 2,
            questionContent: "What is the boiling point of water?",
            updateA: "100°C",
            updateB: "212°F",
            updateC: "0°C",
            updateD: "32°F",
            correctAnswer: "A"
          },
          {
            questionNumber: 18,
            difficultyScore: 1,
            questionContent: "What is the main ingredient in hummus?",
            updateA: "Yogurt",
            updateB: "Chickpeas",
            updateC: "Lentils",
            updateD: "Black Beans",
            correctAnswer: "B"
          },
          {
            questionNumber: 19,
            difficultyScore: 2,
            questionContent: "Which planet is known as the Earth's twin due to its similar size?",
            updateA: "Mars",
            updateB: "Jupiter",
            updateC: "Venus",
            updateD: "Saturn",
            correctAnswer: "C"
          },
          {
            questionNumber: 20,
            difficultyScore: 2,
            questionContent: "What is the primary language spoken in Australia?",
            updateA: "Spanish",
            updateB: "English",
            updateC: "French",
            updateD: "German",
            correctAnswer: "B"
          },
          {
            questionNumber: 21,
            difficultyScore: 1,
            questionContent: "What is the main ingredient in chocolate?",
            updateA: "Cocoa",
            updateB: "Vanilla",
            updateC: "Strawberries",
            updateD: "Cherries",
            correctAnswer: "A"
        },
        {
            questionNumber: 22,
            difficultyScore: 1,
            questionContent: "What is the primary color of the UN flag?",
            updateA: "Red",
            updateB: "Blue",
            updateC: "Green",
            updateD: "Yellow",
            correctAnswer: "B"
        },
        {
            questionNumber: 23,
            difficultyScore: 1,
            questionContent: "In which country is the Eiffel Tower located?",
            updateA: "Italy",
            updateB: "Germany",
            updateC: "France",
            updateD: "Spain",
            correctAnswer: "C"
        },
        {
            questionNumber: 24,
            difficultyScore: 2,
            questionContent: "Which is the largest mammal?",
            updateA: "Elephant",
            updateB: "Whale",
            updateC: "Giraffe",
            updateD: "Kangaroo",
            correctAnswer: "B"
        },
        {
            questionNumber: 25,
            difficultyScore: 1,
            questionContent: "What is the name of the toy cowboy in Toy Story?",
            updateA: "Buzz",
            updateB: "Woody",
            updateC: "Jessie",
            updateD: "Slinky",
            correctAnswer: "B"
        },
        {
            questionNumber: 26,
            difficultyScore: 9,
            questionContent: "Which day is celebrated as World Environment Day?",
            updateA: "June 5",
            updateB: "April 22",
            updateC: "March 21",
            updateD: "July 28",
            correctAnswer: "A"
        },
        {
            questionNumber: 27,
            difficultyScore: 2,
            questionContent: "Which bird is known as the symbol of peace?",
            updateA: "Eagle",
            updateB: "Dove",
            updateC: "Sparrow",
            updateD: "Owl",
            correctAnswer: "B"
        },
        {
            questionNumber: 28,
            difficultyScore: 7,
            questionContent: "What is the capital of Canada?",
            updateA: "Toronto",
            updateB: "Vancouver",
            updateC: "Ottawa",
            updateD: "Montreal",
            correctAnswer: "C"
        },
        {
            questionNumber: 29,
            difficultyScore: 6,
            questionContent: "What is the smallest prime number?",
            updateA: "0",
            updateB: "1",
            updateC: "2",
            updateD: "3",
            correctAnswer: "C"
        },
        {
            questionNumber: 30,
            difficultyScore: 2,
            questionContent: "Which element has the chemical symbol 'O'?",
            updateA: "Gold",
            updateB: "Oxygen",
            updateC: "Silver",
            updateD: "Iron",
            correctAnswer: "B"
        },
        ];

// Going to make a tally function so that i can see how much of each difficulty is present 
function difficultyTally(questionArray) {
    const difficultyTally = {1: 0 , 2:0 , 3:0 , 4:0 ,5:0 ,6 :0 , 7:0 , 8:0 ,9:0 ,10:0 };

    for (let i=0 ; i < questionArray.length; i++) {
        const difficultyScore = questionArray[i].difficultyScore;
        difficultyTally[difficultyScore]++;
    }
       return difficultyTally;
    }


console.log(difficultyTally(questionArray));

let displayQuestion = document.getElementById("question-space");
document.getElementById("A-text").addEventListener('click',function() {  selectA ('A') ; }
);
document.getElementById("B-text").addEventListener('click',function() {  selectB ('B') ; }
);
document.getElementById("C-text").addEventListener('click',function() {  selectC ('C') ; }
);
document.getElementById("D-text").addEventListener('click',function() {  selectD ('D') ; }
);

});