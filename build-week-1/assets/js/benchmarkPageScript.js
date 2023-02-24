const questions = [
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "What does CPU stand for?",
        correct_answer: "Central Processing Unit",
        incorrect_answers: [
            "Central Process Unit",
            "Computer Personal Unit",
            "Central Processor Unit",
        ],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
        correct_answer: "Final",
        incorrect_answers: ["Static", "Private", "Public"],
    },
    {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question: "The logo for Snapchat is a Bell.",
        correct_answer: "False",
        incorrect_answers: ["True"],
    },
    {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question:
            "Pointers were not used in the original C programming language; they were added later on in C++.",
        correct_answer: "False",
        incorrect_answers: ["True"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "What is the most preferred image format used for logos in the Wikimedia database?",
        correct_answer: ".svg",
        incorrect_answers: [".png", ".jpeg", ".gif"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "In web design, what does CSS stand for?",
        correct_answer: "Cascading Style Sheet",
        incorrect_answers: [
            "Counter Strike: Source",
            "Corrective Style Sheet",
            "Computer Style Sheet",
        ],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "What is the code name for the mobile operating system Android 7.0?",
        correct_answer: "Nougat",
        incorrect_answers: [
            "Ice Cream Sandwich",
            "Jelly Bean",
            "Marshmallow",
        ],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "On Twitter, what is the character limit for a Tweet?",
        correct_answer: "140",
        incorrect_answers: ["120", "160", "100"],
    },
    {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question: "Linux was first created as an alternative to Windows XP.",
        correct_answer: "False",
        incorrect_answers: ["True"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "Which programming language shares its name with an island in Indonesia?",
        correct_answer: "Java",
        incorrect_answers: ["Python", "C", "Jakarta"],
    },
];

const timer = document.getElementById('timer');
const timeLeft = document.getElementById('time-left');
const circle = document.querySelector('.timer-progress');
const radius = circle.r.baseVal.value;
const circumference = radius * 2 * Math.PI;
let timerInterval;
let duration;
const domanda = document.getElementById('domanda');
const primoDiv = document.getElementById('primoDiv');
const question = document.getElementById('questions');
var risposteEsatte = 0;
var indice = 0;

window.onload = stampaPrimaDomanda();

function stampaPrimaDomanda() {
    domanda.innerHTML = questions[indice].question;
    stampaPrimeRisposte();
    startTimer();
    question.innerHTML = `QUESTION ${indice+1}<span class="pink">  / 10</span>`;
}

function stampaPrimeRisposte() {
    //stampo risposta esatta
    let btnRisposta = document.createElement('button');
    btnRisposta.setAttribute('value', questions[indice].correct_answer);
    btnRisposta.setAttribute('onclick', 'verifica(value)');
    btnRisposta.setAttribute('name', 'button');
    btnRisposta.classList.add('risposta');
    btnRisposta.innerHTML = questions[indice].correct_answer;
    primoDiv.appendChild(btnRisposta);
    //stampo risposte errate
    questions[indice].incorrect_answers.forEach(element => {
        let btnRisposta = document.createElement('button');
        btnRisposta.setAttribute('value', element);
        btnRisposta.setAttribute('onclick', 'verifica(value)');
        btnRisposta.setAttribute('name', 'button');
        btnRisposta.classList.add('risposta');
        btnRisposta.innerHTML = element;
        primoDiv.appendChild(btnRisposta);
    })
}

//al click del bottone prosegui prendo il value della radio e la passo alla funzione di verifica, poi proseguo con le domande
function verifica(_buttonValue) {
    if (_buttonValue === questions[indice].correct_answer) {
        risposteEsatte++;
        console.log(risposteEsatte);
    }
    indice++;

    if(indice == questions.length){
        domanda.innerHTML = 'Test Completato!';
        primoDiv.innerHTML = '';
        question.innerHTML = '';
        document.getElementById('timer').style.display = "none";
        let prosegui = document.createElement('button');
        prosegui.classList.add('buttonColorato');
        prosegui.innerHTML = '<b>PROSEGUI<b>';
        let a = document.createElement('a');
        a.setAttribute('href','resultsPage.html');
        a.appendChild(prosegui);
        secondoDiv.appendChild(a);
        localStorage.setItem('punteggio',risposteEsatte);

    }else{
    stampaDomandaSuccessiva();
    question.innerHTML = `QUESTION ${indice+1}<span class="pink">  / 10</span>`;
    }
}

function stampaDomandaSuccessiva() {
    //pulisco div 
    primoDiv.innerHTML = '';
    //stampo domanda
    domanda.innerHTML = questions[indice].question;
    //stampo risposta corretta
    let btnRisposta = document.createElement('button');
    btnRisposta.setAttribute('value', questions[indice].correct_answer);
    btnRisposta.setAttribute('onclick', 'verifica(value)');
    btnRisposta.setAttribute('name', 'button');
    btnRisposta.classList.add('risposta');
    btnRisposta.innerHTML = questions[indice].correct_answer;
    primoDiv.appendChild(btnRisposta);
    //stampo risposte errate

    questions[indice].incorrect_answers.forEach(element => {
        let btnRisposta = document.createElement('button');
        btnRisposta.setAttribute('value', element);
        btnRisposta.setAttribute('onclick', 'verifica(value)');
        btnRisposta.setAttribute('name', 'button');
        btnRisposta.classList.add('risposta');
        btnRisposta.innerHTML = element;
        primoDiv.appendChild(btnRisposta);
    })
    stop();
    startTimer();
}



// let duration; //durata in secondi


function startTimer() {
    duration = 60;
    timerInterval = setInterval(() => {
    duration--;
    updateTimer();
    if (duration == 0) {
    //   clearInterval(timerInterval);
    stop();
    indice++;
    stampaDomandaSuccessiva();
    question.innerHTML = `QUESTION ${indice+1}<span class="pink">  / 10</span>`;
    }
  }, 1000);
}
function stop(){
    clearInterval(timerInterval);
}

function updateTimer() {
  const seconds = (duration % 60).toString().padStart(2, '0');
  timeLeft.innerHTML = 'Secondi<br>' + '<span class="secondi">' + seconds + '</span>' + '<br>rimanenti';
// timeLeft.innerHTML = 'Secondi<br>';

  const progress = circumference - (duration / 60) * circumference;
  circle.style.strokeDashoffset = progress;
}



// startTimer();



// stampaDomanda();

// function stampaDomanda() {
//     for (let i = 0; i < questions.length; i++) {
//         domanda.innerHTML = questions[i].question;
//         stampaRisposte(i);
//     }
// }

// function stampaRisposte(_i) { //stampa la prima risposta esatta
//     if (primoDiv.hasChildNodes()) {
//         primoDiv.innerHTML = '';
//         let radioRisposta = document.createElement('input');
//         radioRisposta.setAttribute('type', 'radio');
//         radioRisposta.setAttribute('name', 'button');
//         radioRisposta.setAttribute('value', questions[_i].correct_answer);
//         let label = document.createElement('label');
//         label.innerHTML = questions[_i].correct_answer;
//         primoDiv.appendChild(label);
//         label.appendChild(radioRisposta);
//     }
//     else {
//         let radioRisposta = document.createElement('input');
//         radioRisposta.setAttribute('type', 'radio');
//         radioRisposta.setAttribute('name', 'button');
//         radioRisposta.setAttribute('value', questions[_i].correct_answer);
//         let label = document.createElement('label');
//         label.innerHTML = questions[_i].correct_answer;
//         primoDiv.appendChild(label);
//         label.appendChild(radioRisposta);
//     }

//     stampaRisposteSbagliate(_i);

// }

// function stampaRisposteSbagliate(_i) {  // stampa tutte le altre risposte errate
//     questions[_i].incorrect_answers.forEach(element => {
//         let radioRisposta = document.createElement('input');
//         radioRisposta.setAttribute('type', 'radio');
//         radioRisposta.setAttribute('name', 'button');
//         radioRisposta.setAttribute('value', element);
//         let label = document.createElement('label');
//         label.innerHTML = element;
//         primoDiv.appendChild(label);
//         label.appendChild(radioRisposta);
//     })

// }


// 2 metodi. 1o stampa la prima domanda, il secondo che stampa le domande successive
//load init (stampa prima domanda)
//clicco button avvio metodo stampa domande successive (chiamo domanda successiva)
//mi devo passare la domanda precedente (passo un counter)
//4 button non radiom con stessa class --> getelemetns bu class name, if bnt clicked 
//if bottone cliccato = boolean, eventListener