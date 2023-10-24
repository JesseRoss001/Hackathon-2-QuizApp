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
        {
            questionNumber: 31,
            difficultyScore: 2,
            questionContent: "What is the color of an emerald?",
            updateA: "Red",
            updateB: "Blue",
            updateC: "Green",
            updateD: "Yellow",
            correctAnswer: "C"
        },
        {
            questionNumber: 32,
            difficultyScore: 1,
            questionContent: "What is the capital of Italy?",
            updateA: "Rome",
            updateB: "Milan",
            updateC: "Venice",
            updateD: "Florence",
            correctAnswer: "A"
        },
        {
            questionNumber: 33,
            difficultyScore: 1,
            questionContent: "What is the tallest animal on Earth?",
            updateA: "Elephant",
            updateB: "Giraffe",
            updateC: "Kangaroo",
            updateD: "Ostrich",
            correctAnswer: "B"
        },
        {
            questionNumber: 34,
            difficultyScore: 2,
            questionContent: "What is the name of the first man to step on the moon?",
            updateA: "Buzz Aldrin",
            updateB: "Neil Armstrong",
            updateC: "Michael Collins",
            updateD: "John Glenn",
            correctAnswer: "B"
        },
        {
            questionNumber: 35,
            difficultyScore: 5,
            questionContent: "Which of these are a herb?",
            updateA: "Pineapple",
            updateB: "Gauva",
            updateC: "Cinnamon ",
            updateD: "Banana ",
            correctAnswer: "D"
        },
        {
            questionNumber: 36,
            difficultyScore: 4,
            questionContent: "What is the square root of 64?",
            updateA: "6",
            updateB: "7",
            updateC: "8",
            updateD: "9",
            correctAnswer: "C"
        },
        {
            questionNumber: 37,
            difficultyScore: 4,
            questionContent: "What is the most recycled plastic?",
            updateA: "PC",
            updateB: "PET",
            updateC: " PVC",
            updateD: "LDPE",
            correctAnswer: "B"
        },
        {
            questionNumber: 38,
            difficultyScore: 3,
            questionContent: "Which planet is known as the Blue Planet?",
            updateA: "Mars",
            updateB: "Jupiter",
            updateC: "Earth",
            updateD: "Saturn",
            correctAnswer: "C"
        },
        {
            questionNumber: 39,
            difficultyScore: 1,
            questionContent: "What is the primary ingredient in a Caesar Salad?",
            updateA: "Lettuce",
            updateB: "Tomatoes",
            updateC: "Cucumbers",
            updateD: "Carrots",
            correctAnswer: "A"
        },
        {
            questionNumber: 40,
            difficultyScore: 2,
            questionContent: "Which continent is the Sahara Desert located?",
            updateA: "Asia",
            updateB: "Africa",
            updateC: "Australia",
            updateD: "North America",
            correctAnswer: "B"
        },
        {
            questionNumber: 41,
            difficultyScore: 1,
            questionContent: "What is the hardest natural substance on Earth?",
            updateA: "Gold",
            updateB: "Iron",
            updateC: "Diamond",
            updateD: "Platinum",
            correctAnswer: "C"
        },
        {
            questionNumber: 42,
            difficultyScore: 1,
            questionContent: "Which language is primarily spoken in Spain?",
            updateA: "French",
            updateB: "English",
            updateC: "Italian",
            updateD: "Spanish",
            correctAnswer: "D"
        },
        {
            questionNumber: 43,
            difficultyScore: 1,
            questionContent: "What is the currency of Japan?",
            updateA: "Dollar",
            updateB: "Euro",
            updateC: "Yen",
            updateD: "Pound",
            correctAnswer: "C"
        },
        {
            questionNumber: 44,
            difficultyScore: 7,
            questionContent: "What is the capital of Switzerland?",
            updateA: "Zurich",
            updateB: "Bern",
            updateC: "Geneva",
            updateD: "Basel",
            correctAnswer: "B"
        },
        {
            questionNumber: 45,
            difficultyScore: 3,
            questionContent: "What is the longest bone in the human body?",
            updateA: "Humerus",
            updateB: "Femur",
            updateC: "Tibia",
            updateD: "Fibula",
            correctAnswer: "B"
        },
        {
            questionNumber: 46,
            difficultyScore: 8,
            questionContent: "Which planet has the longest day of all the planets in our solar system?",
            updateA: "Earth",
            updateB: "Mars",
            updateC: "Venus",
            updateD: "Jupiter",
            correctAnswer: "C"
        },
        {
            questionNumber: 47,
            difficultyScore: 8,
            questionContent: "Who is known as the Father of Computers?",
            updateA: "Charles Babbage",
            updateB: "Alan Turing",
            updateC: "John von Neumann",
            updateD: "Bill Gates",
            correctAnswer: "A"
        },
        {
            questionNumber: 48,
            difficultyScore: 2,
            questionContent: "What is the chemical symbol for water?",
            updateA: "O2",
            updateB: "CO2",
            updateC: "H2O",
            updateD: "N2",
            correctAnswer: "C"
        },
        {
            questionNumber: 49,
            difficultyScore: 7,
            questionContent: "What is the capital of New Zealand?",
            updateA: "Sydney",
            updateB: "Auckland",
            updateC: "Wellington",
            updateD: "Christchurch",
            correctAnswer: "C"
        },
        {
            questionNumber: 50,
            difficultyScore: 4,
            questionContent: "Who discovered penicillin?",
            updateA: "Marie Curie",
            updateB: "Alexander Fleming",
            updateC: "Louis Pasteur",
            updateD: "Joseph Lister",
            correctAnswer: "B"
        },
        {
            questionNumber: 51,
            difficultyScore: 4,
            questionContent: "Which country is known as the Land of White Elephant?",
            updateA: "India",
            updateB: "Sri Lanka",
            updateC: "Thailand",
            updateD: "Myanmar",
            correctAnswer: "C"
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