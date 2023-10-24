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
        },{
            questionNumber: 52,
            difficultyScore: 2,
            questionContent: "Which superhero is known as the 'Caped Crusader'?",
            updateA: "Superman",
            updateB: "Iron Man",
            updateC: "Batman",
            updateD: "Spider-Man",
            correctAnswer: "C"
        },
        {
            questionNumber: 53,
            difficultyScore: 1,
            questionContent: "Which superhero has a shield with a star?",
            updateA: "Thor",
            updateB: "Captain America",
            updateC: "Iron Man",
            updateD: "Hulk",
            correctAnswer: "B"
        },
        {
            questionNumber: 54,
            difficultyScore: 3,
            questionContent: "What is the recommended amount of sleep for adults?",
            updateA: "6-7 hours",
            updateB: "7-9 hours",
            updateC: "9-11 hours",
            updateD: "5-6 hours",
            correctAnswer: "B"
        },
        {
            questionNumber: 55,
            difficultyScore: 3,
            questionContent: "What vitamin is produced when the skin is exposed to sunlight?",
            updateA: "Vitamin A",
            updateB: "Vitamin B",
            updateC: "Vitamin C",
            updateD: "Vitamin D",
            correctAnswer: "D"
        },
        {
            questionNumber: 56,
            difficultyScore: 3,
            questionContent: "Which superhero is known as the 'Man of Steel'?",
            updateA: "Batman",
            updateB: "Superman",
            updateC: "Iron Man",
            updateD: "Thor",
            correctAnswer: "B"
        },
        {
            questionNumber: 57,
            difficultyScore: 3,
            questionContent: "Which superhero has a mythical hammer called Mjolnir?",
            updateA: "Thor",
            updateB: "Superman",
            updateC: "Iron Man",
            updateD: "Batman",
            correctAnswer: "A"
        },
        {
            questionNumber: 58,
            difficultyScore: 4,
            questionContent: "What is the normal body temperature for adults?",
            updateA: "97°F (36.1°C)",
            updateB: "98.6°F (37°C)",
            updateC: "100°F (37.8°C)",
            updateD: "101°F (38.3°C)",
            correctAnswer: "B"
        },
        {
            questionNumber: 59,
            difficultyScore: 6,
            questionContent: "What is the common name for ascorbic acid?",
            updateA: "Vitamin A",
            updateB: "Vitamin B",
            updateC: "Vitamin C",
            updateD: "Vitamin D",
            correctAnswer: "C"
        },
        {
            questionNumber: 61,
            difficultyScore: 3,
            questionContent: "Who is credited with inventing the light bulb?",
            updateA: "Thomas Edison",
            updateB: "Nikola Tesla",
            updateC: "Alexander Graham Bell",
            updateD: "Michael Faraday",
            correctAnswer: "A"
        },
        {
            questionNumber: 62,
            difficultyScore: 4,
            questionContent: "Who invented the telephone?",
            updateA: "Alexander Graham Bell",
            updateB: "Guglielmo Marconi",
            updateC: "John Logie Baird",
            updateD: "Nikola Tesla",
            correctAnswer: "A"
        },
        {
            questionNumber: 63,
            difficultyScore: 10,
            questionContent: "Who is known for inventing the World Wide Web?",
            updateA: "Bill Gates",
            updateB: "Tim Berners-Lee",
            updateC: "Vint Cerf",
            updateD: "Steve Jobs",
            correctAnswer: "B"
        },
        {
            questionNumber: 64,
            difficultyScore: 7,
            questionContent: "Who invented the phonograph?",
            updateA: "Thomas Edison",
            updateB: "Nikola Tesla",
            updateC: "Alexander Graham Bell",
            updateD: "Michael Faraday",
            correctAnswer: "A"
        },
        {
            questionNumber: 65,
            difficultyScore: 7,
            questionContent: "Who is credited with the invention of the radio?",
            updateA: "Thomas Edison",
            updateB: "Nikola Tesla",
            updateC: "Guglielmo Marconi",
            updateD: "Michael Faraday",
            correctAnswer: "C"
        },
        {
            questionNumber: 66,
            difficultyScore: 2,
            questionContent: "What invention allows us to see bacteria?",
            updateA: "Telescope",
            updateB: "Microscope",
            updateC: "Stethoscope",
            updateD: "Periscope",
            correctAnswer: "B"
        },
        {
            questionNumber: 67,
            difficultyScore: 9,
            questionContent: "Who invented the mechanical television?",
            updateA: "John Logie Baird",
            updateB: "Phil Farnsworth",
            updateC: "Vladimir Zworykin",
            updateD: "Thomas Edison",
            correctAnswer: "A"
        },
        {
            questionNumber: 68,
            difficultyScore: 4,
            questionContent: "What was invented to measure atmospheric pressure?",
            updateA: "Thermometer",
            updateB: "Barometer",
            updateC: "Hygrometer",
            updateD: "Anemometer",
            correctAnswer: "B"
        },
        {
            questionNumber: 69,
            difficultyScore: 8,
            questionContent: "Who is credited with inventing the sewing machine?",
            updateA: "Isaac Singer",
            updateB: "Elias Howe",
            updateC: "Thomas Saint",
            updateD: "James Dyson",
            correctAnswer: "C"
        },
        {
            questionNumber: 70,
            difficultyScore: 3,
            questionContent: "Who invented the first successful airplane?",
            updateA: "The Wright Brothers",
            updateB: "Leonardo da Vinci",
            updateC: "Henry Ford",
            updateD: "Samuel Langley",
            correctAnswer: "A"
        },
        {
            questionNumber: 71,
            difficultyScore: 6,
            questionContent: "Who is credited with inventing the steam engine?",
            updateA: "James Watt",
            updateB: "Thomas Newcomen",
            updateC: "Heron of Alexandria",
            updateD: "Michael Faraday",
            correctAnswer: "A"
        },
        {
            questionNumber: 72,
            difficultyScore: 9,
            questionContent: "Who invented dynamite?",
            updateA: "Alfred Nobel",
            updateB: "Marie Curie",
            updateC: "Thomas Edison",
            updateD: "Nikola Tesla",
            correctAnswer: "A"
        },
        {
            questionNumber: 73,
            difficultyScore: 10,
            questionContent: "Who invented the first practical typewriter?",
            updateA: "Christopher Latham Sholes",
            updateB: "Samuel Morse",
            updateC: "Alexander Graham Bell",
            updateD: "Thomas Edison",
            correctAnswer: "A"
        },
        {
            questionNumber: 74,
            difficultyScore: 5,
            questionContent: "Who invented the electric battery?",
            updateA: "Alessandro Volta",
            updateB: "Benjamin Franklin",
            updateC: "Michael Faraday",
            updateD: "Nikola Tesla",
            correctAnswer: "A"
        },
        {
            questionNumber: 75,
            difficultyScore: 9,
            questionContent: "Who invented the first programmable computer?",
            updateA: "Charles Babbage",
            updateB: "Alan Turing",
            updateC: "John von Neumann",
            updateD: "Konrad Zuse",
            correctAnswer: "A"
        },
        {
            questionNumber: 76,
            difficultyScore: 5,
            questionContent: "Who wrote 'To Kill a Mockingbird'?",
            updateA: "Harper Lee",
            updateB: "Ernest Hemingway",
            updateC: "Mark Twain",
            updateD: "Jane Austen",
            correctAnswer: "A"
        },
        {
            questionNumber: 77,
            difficultyScore: 5,
            questionContent: "Which author created the character Sherlock Holmes?",
            updateA: "Agatha Christie",
            updateB: "Arthur Conan Doyle",
            updateC: "Edgar Allan Poe",
            updateD: "Charles Dickens",
            correctAnswer: "B"
        },
        {
            questionNumber: 78,
            difficultyScore: 3,
            questionContent: "What is the title of the first Harry Potter book?",
            updateA: "Harry Potter and the Goblet of Fire",
            updateB: "Harry Potter and the Philosopher's Stone",
            updateC: "Harry Potter and the Chamber of Secrets",
            updateD: "Harry Potter and the Prisoner of Azkaban",
            correctAnswer: "B"
        },
        {
            questionNumber: 79,
            difficultyScore: 6,
            questionContent: "Who is the author of the epic poem 'Paradise Lost'?",
            updateA: "John Milton",
            updateB: "William Shakespeare",
            updateC: "Geoffrey Chaucer",
            updateD: "William Wordsworth",
            correctAnswer: "A"
        },
        {
            questionNumber: 80,
            difficultyScore: 2,
            questionContent: "What is the term for a word that is similar in meaning to another word?",
            updateA: "Antonym",
            updateB: "Synonym",
            updateC: "Homonym",
            updateD: "Acronym",
            correctAnswer: "B"
        },
        {
            questionNumber: 81,
            difficultyScore: 4,
            questionContent: "Who wrote the novel '1984'?",
            updateA: "George Orwell",
            updateB: "Aldous Huxley",
            updateC: "Ray Bradbury",
            updateD: "H.G. Wells",
            correctAnswer: "A"
        },
        {
            questionNumber: 82,
            difficultyScore: 9,
            questionContent: "In which Shakespearean play would you find the character Iago?",
            updateA: "Macbeth",
            updateB: "Romeo and Juliet",
            updateC: "Othello",
            updateD: "Hamlet",
            correctAnswer: "C"
        },
        {
            questionNumber: 83,
            difficultyScore: 7,
            questionContent: "Who is the author of 'The Road Not Taken'?",
            updateA: "Robert Frost",
            updateB: "Emily Dickinson",
            updateC: "Walt Whitman",
            updateD: "E.E. Cummings",
            correctAnswer: "A"
        },
        {
            questionNumber: 84,
            difficultyScore: 6,
            questionContent: "What is the name of the dystopian novel by Aldous Huxley?",
            updateA: "Brave New World",
            updateB: "Fahrenheit 451",
            updateC: "Animal Farm",
            updateD: "The Catcher in the Rye",
            correctAnswer: "A"
        },
        {
            questionNumber: 85,
            difficultyScore: 3,
            questionContent: "What is a Haiku?",
            updateA: "A type of poem",
            updateB: "A novel",
            updateC: "A play",
            updateD: "A song",
            correctAnswer: "A"
        },
        {
            questionNumber: 86,
            difficultyScore: 4,
            questionContent: "Who is the Greek god of war?",
            updateA: "Ares",
            updateB: "Zeus",
            updateC: "Apollo",
            updateD: "Hermes",
            correctAnswer: "A"
        },
        {
            questionNumber: 87,
            difficultyScore: 2,
            questionContent: "Which Norse god is known as the trickster?",
            updateA: "Thor",
            updateB: "Odin",
            updateC: "Loki",
            updateD: "Freyr",
            correctAnswer: "C"
        },
        {
            questionNumber: 88,
            difficultyScore: 6,
            questionContent: "In which folklore is Robin Hood a central figure?",
            updateA: "Irish",
            updateB: "English",
            updateC: "Scottish",
            updateD: "Welsh",
            correctAnswer: "B"
        },
        {
            questionNumber: 89,
            difficultyScore: 1,
            questionContent: "Who is the legendary King of Camelot?",
            updateA: "King Arthur",
            updateB: "King Edward",
            updateC: "King George",
            updateD: "King Henry",
            correctAnswer: "A"
        },
        {
            questionNumber: 90,
            difficultyScore: 3,
            questionContent: "What is the name of the winged horse in Greek mythology?",
            updateA: "Pegasus",
            updateB: "Minotaur",
            updateC: "Centaur",
            updateD: "Hydra",
            correctAnswer: "A"
        },
        {
            questionNumber: 91,
            difficultyScore: 2,
            questionContent: "What is the hammer of Thor called?",
            updateA: "Mjolnir",
            updateB: "Gungnir",
            updateC: "Bifrost",
            updateD: "Yggdrasil",
            correctAnswer: "A"
        },
        {
            questionNumber: 92,
            difficultyScore: 6,
            questionContent: "Who is the hero of the Trojan War?",
            updateA: "Odysseus",
            updateB: "Achilles",
            updateC: "Hercules",
            updateD: "Perseus",
            correctAnswer: "B"
        },
        {
            questionNumber: 93,
            difficultyScore: 4,
            questionContent: "Which mythical creature is half-man and half-horse?",
            updateA: "Minotaur",
            updateB: "Centaur",
            updateC: "Cyclops",
            updateD: "Harpy",
            correctAnswer: "B"
        },
        {
            questionNumber: 94,
            difficultyScore: 1,
            questionContent: "What is the name of the Norse god of thunder?",
            updateA: "Loki",
            updateB: "Odin",
            updateC: "Thor",
            updateD: "Freyr",
            correctAnswer: "C"
        },
        {
            questionNumber: 95,
            difficultyScore: 3,
            questionContent: "What is Excalibur?",
            updateA: "A legendary sword",
            updateB: "A mythical creature",
            updateC: "A heroic knight",
            updateD: "A magical spell",
            correctAnswer: "A"
        },
        {
            questionNumber: 96,
            difficultyScore: 4,
            questionContent: "Who is the Greek goddess of love and beauty?",
            updateA: "Athena",
            updateB: "Artemis",
            updateC: "Hera",
            updateD: "Aphrodite",
            correctAnswer: "D"
        },{
            questionNumber: 97,
            difficultyScore: 7,
            questionContent: "Which Greek mythological figure was doomed to continuously roll a boulder uphill?",
            updateA: "Prometheus",
            updateB: "Sisyphus",
            updateC: "Tantalus",
            updateD: "Icarus",
            correctAnswer: "B"
        },
        {
            questionNumber: 98,
            difficultyScore: 4,
            questionContent: "In Norse mythology, what is the name of the end-of-the-world event?",
            updateA: "Ragnarok",
            updateB: "Midgard",
            updateC: "Yggdrasil",
            updateD: "Asgard",
            correctAnswer: "A"
        },
        {
            questionNumber: 99,
            difficultyScore: 8,
            questionContent: "What is the name of the ferryman who carries souls across the River Styx in Greek mythology?",
            updateA: "Charon",
            updateB: "Hades",
            updateC: "Persephone",
            updateD: "Hermes",
            correctAnswer: "A"
        },
        {
            questionNumber: 100,
            difficultyScore: 1,
            questionContent: "Who is the Norse god of mischief and chaos, known to shape-shift and cause trouble among gods and humans?",
            updateA: "Loki",
            updateB: "Thor",
            updateC: "Odin",
            updateD: "Freyr",
            correctAnswer: "A"
        },
        {
            questionNumber: 101,
            difficultyScore:7,
            questionContent: "Which era of music history is characterized by the use of harpsichord and complex counterpoint?",
            updateA: "Baroque",
            updateB: "Classical",
            updateC: "Romantic",
            updateD: "Modern",
            correctAnswer: "A"
        },
        {
            questionNumber: 102,
            difficultyScore: 6,
            questionContent: "What are the opening lyrics to 'Bohemian Rhapsody' by Queen?",
            updateA: "Is this the real life? Is this just fantasy?",
            updateB: "We will, we will rock you!",
            updateC: "I see a little silhouetto of a man",
            updateD: "Buddy, you're a boy, make a big noise",
            correctAnswer: "A"
        },
        {
            questionNumber: 103,
            difficultyScore: 5,
            questionContent: "Which band is known for their album 'Dark Side of the Moon'?",
            updateA: "Led Zeppelin",
            updateB: "Pink Floyd",
            updateC: "The Beatles",
            updateD: "The Rolling Stones",
            correctAnswer: "B"
        },
        {
            questionNumber: 104,
            difficultyScore: 6,
            questionContent: "In which music genre is improvisation a key element?",
            updateA: "Jazz",
            updateB: "Classical",
            updateC: "Pop",
            updateD: "Country",
            correctAnswer: "A"
        },
        {
            questionNumber: 105,
            difficultyScore: 7,
            questionContent: "What is the name of the large drum used in orchestral music?",
            updateA: "Snare drum",
            updateB: "Bass drum",
            updateC: "Timpani",
            updateD: "Bongo",
            correctAnswer: "C"
        },
        {
            questionNumber: 106,
            difficultyScore: 8,
            questionContent: "Who composed the music for the ballet 'The Rite of Spring', which caused a riot at its premiere in 1913?",
            updateA: "Claude Debussy",
            updateB: "Igor Stravinsky",
            updateC: "Johann Sebastian Bach",
            updateD: "Ludwig van Beethoven",
            correctAnswer: "B"
        },
        {
            questionNumber: 107,
            difficultyScore: 3,
            questionContent: "Which musician is known as the 'King of Pop'?",
            updateA: "Michael Jackson",
            updateB: "Elvis Presley",
            updateC: "Frank Sinatra",
            updateD: "Prince",
            correctAnswer: "A"
        },
        {
            questionNumber: 108,
            difficultyScore: 7,
            questionContent: "What is the term for a fast, upbeat, and usually optimistic style of music that originated in the Caribbean?",
            updateA: "Reggae",
            updateB: "Salsa",
            updateC: "Ska",
            updateD: "Calypso",
            correctAnswer: "D"
        },
        {
            questionNumber: 109,
            difficultyScore: 6,
            questionContent: "What is the name of the scale used in traditional Indian classical music?",
            updateA: "Pentatonic Scale",
            updateB: "Harmonic Scale",
            updateC: "Raga",
            updateD: "Diatonic Scale",
            correctAnswer: "C"
        },
        {
            questionNumber: 110,
            difficultyScore: 5,
            questionContent: "Which famous composer became deaf later in life, yet continued to compose music?",
            updateA: "Wolfgang Amadeus Mozart",
            updateB: "Johann Sebastian Bach",
            updateC: "Ludwig van Beethoven",
            updateD: "Franz Schubert",
            correctAnswer: "C"
        } ,{
            questionNumber: 111,
            difficultyScore: 6,
            questionContent: "Which hero is known for his twelve labors?",
            updateA: "Perseus",
            updateB: "Theseus",
            updateC: "Hercules",
            updateD: "Achilles",
            correctAnswer: "C"
        },
        {
            questionNumber: 112,
            difficultyScore: 3,
            questionContent: "Which mythical creature has the head of a human and the body of a lion?",
            updateA: "Sphinx",
            updateB: "Minotaur",
            updateC: "Centaur",
            updateD: "Medusa",
            correctAnswer: "A"
        }
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