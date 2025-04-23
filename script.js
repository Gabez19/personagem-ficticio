class SistemaDoQuiz {
    constructor() {
        this.currentQuestion = 0;
        this.userAnswers = [];
        this.scores = {
            coringa: 0,
            thanos: 0,
            loki: 0
        };
        
        this.characters = {
            coringa: {
                name: "Coringa (The Joker)",
                description: "Assim como o Coringa, você possui uma mente brilhante mas caótica. Você enxerga a sociedade e suas regras como uma grande piada. Imprevisível e perturbador, você questiona as convenções sociais e se diverte criando caos para provar seu ponto de vista. Você acredita que a ordem é apenas uma ilusão temporária e que o verdadeiro estado natural do mundo é o caos. Sua capacidade de adaptação e sua visão única do mundo fazem de você um adversário formidável e impossível de prever.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRet8lwKN1kTlz6XhIXORQiUHHzBOrL06Kkng&s"
            },
            thanos: {
                name: "Thanos",
                description: "Como Thanos, você é motivado por uma visão maior e acredita sinceramente que suas ações, por mais extremas que sejam, são para o bem maior. Calculista e determinado, você não recua diante de decisões difíceis quando acredita estar no caminho certo. Apesar de seus métodos controversos, suas intenções vêm de um lugar de preocupação genuína com o futuro e a sustentabilidade. Você é capaz de fazer sacrifícios pessoais enormes em nome de sua causa, demonstrando uma força de vontade inabalável.",
                image: "https://f8n-ipfs-production.imgix.net/QmNQguXHVJnxWQG6A332UxUmGcoBpVAgJu19dpxCsBUSJZ/nft.jpg?auto=format%2Ccompress&q=70&cs=srgb&h=1200&w=1200&fnd_key=v1"
            },
            loki: {
                name: "Loki",
                description: "Semelhante a Loki, você é charmoso, astuto e estrategista. Motivado por um senso de propósito e reconhecimento, você usa sua inteligência e carisma para manipular situações a seu favor. Embora possa ser visto como traiçoeiro, você tem um código moral complexo e momentos de redenção. Por trás de sua fachada confiante, existem inseguranças e um desejo profundo de pertencimento e aceitação. Sua adaptabilidade é sua maior força, permitindo que você sobreviva e prospere em circunstâncias que derrubariam outros.",
                image: "https://sm.ign.com/ign_br/screenshot/default/an-loki-disney_mpp5.jpg"
            }
        };
        
        this.questions = [
            {
                text: "Qual seria sua motivação principal para ações consideradas VILÃS?",
                options: [
                    {
                        text: "Mostrar como as regras sociais são frágeis e hipócritas",
                        scores: { coringa: 3, thanos: 1, loki: 2 }
                    },
                    {
                        text: "Salvar o mundo/universo a qualquer custo, mesmo que medidas extremas sejam necessárias",
                        scores: { coringa: 1, thanos: 3, loki: 2 }
                    },
                    {
                        text: "Obter o reconhecimento e poder que mereço, mas que me foi negado",
                        scores: { coringa: 1, thanos: 2, loki: 3 }
                    }
                ]
            },
            {
                text: "Como você lidaria com seus inimigos?",
                options: [
                    {
                        text: "Criaria situações elaboradas para testar seus limites morais e psicológicos",
                        scores: { coringa: 3, thanos: 1, loki: 2 }
                    },
                    {
                        text: "Eliminaria apenas aqueles que representam uma ameaça real ao meu objetivo maior",
                        scores: { coringa: 1, thanos: 3, loki: 2 }
                    },
                    {
                        text: "Manipularia-os para que lutassem entre si enquanto eu alcançava meus objetivos",
                        scores: { coringa: 2, thanos: 1, loki: 3 }
                    }
                ]
            },
            {
                text: "Qual destas características você mais valoriza?",
                options: [
                    {
                        text: "Imprevisibilidade e liberdade de espírito",
                        scores: { coringa: 3, thanos: 1, loki: 2 }
                    },
                    {
                        text: "Determinação inabalável e visão de longo prazo",
                        scores: { coringa: 1, thanos: 3, loki: 2 }
                    },
                    {
                        text: "Astúcia e adaptabilidade em qualquer situação",
                        scores: { coringa: 1, thanos: 2, loki: 3 }
                    }
                ]
            },
            {
                text: "Qual destas frases melhor representa sua filosofia?",
                options: [
                    {
                        text: "\"O caos não é um abismo, é uma escada. Muitos tentam subi-la e falham, nunca tentando novamente.\"",
                        scores: { coringa: 3, thanos: 1, loki: 2 }
                    },
                    {
                        text: "\"Os recursos são finitos. Para garantir a sobrevivência, sacrifícios difíceis devem ser feitos.\"",
                        scores: { coringa: 2, thanos: 3, loki: 1 }
                    },
                    {
                        text: "\"Nasci para governar. Meu destino foi negado, mas encontrarei meu lugar.\"",
                        scores: { coringa: 1, thanos: 2, loki: 3 }
                    }
                ]
            },
            {
                text: "Como você prefere planejar?",
                options: [
                    {
                        text: "Planos elaborados e caóticos que provocam reações imprevisíveis",
                        scores: { coringa: 3, thanos: 2, loki: 1 }
                    },
                    {
                        text: "Estratégia detalhada de longo prazo com objetivos claros",
                        scores: { coringa: 1, thanos: 3, loki: 2 }
                    },
                    {
                        text: "Planos flexíveis que posso ajustar conforme as circunstâncias mudam",
                        scores: { coringa: 2, thanos: 1, loki: 3 }
                    }
                ]
            },
            {
                text: "O que mais lhe incomoda nos outros?",
                options: [
                    {
                        text: "A insistência cega em seguir regras e moralidade convencional",
                        scores: { coringa: 3, thanos: 2, loki: 1 }
                    },
                    {
                        text: "A incapacidade de fazer escolhas difíceis para o bem maior",
                        scores: { coringa: 1, thanos: 3, loki: 2 }
                    },
                    {
                        text: "Não receberem o reconhecimento e status que merecem",
                        scores: { coringa: 2, thanos: 1, loki: 3 }
                    }
                ]
            },
            {
                text: "Como você reagiria a uma derrota?",
                options: [
                    {
                        text: "Acharia graça na situação e transformaria a derrota em parte de um novo plano ainda mais elaborado",
                        scores: { coringa: 3, thanos: 1, loki: 2 }
                    },
                    {
                        text: "Aceitaria com dignidade, sabendo que minha causa era justa independente do resultado",
                        scores: { coringa: 1, thanos: 3, loki: 1 }
                    },
                    {
                        text: "Fingiria aceitar, mas já estaria planejando meu retorno triunfal",
                        scores: { coringa: 2, thanos: 1, loki: 3 }
                    }
                ]
            },
            {
                text: "Qual seria seu ponto fraco?",
                options: [
                    {
                        text: "Minha tendência ao caos pode às vezes sabotar meus próprios planos",
                        scores: { coringa: 3, thanos: 1, loki: 1 }
                    },
                    {
                        text: "Minha convicção inabalável pode me cegar para alternativas válidas",
                        scores: { coringa: 1, thanos: 3, loki: 1 }
                    },
                    {
                        text: "Meu desejo de reconhecimento e afirmação pode me tornar vulnerável",
                        scores: { coringa: 1, thanos: 1, loki: 3 }
                    }
                ]
            },
            {
                text: "Como você vê os heróis que se opõem a você?",
                options: [
                    {
                        text: "Como provas vivas da hipocrisia da sociedade, prontos para serem desmascarados",
                        scores: { coringa: 3, thanos: 1, loki: 1 }
                    },
                    {
                        text: "Como adversários dignos, mas incapazes de fazer o que é necessário",
                        scores: { coringa: 1, thanos: 3, loki: 2 }
                    },
                    {
                        text: "Como peças em um tabuleiro, que podem ser manipuladas ou enganadas",
                        scores: { coringa: 1, thanos: 1, loki: 3 }
                    }
                ]
            },
            {
                text: "Qual seria seu legado preferido?",
                options: [
                    {
                        text: "Ser lembrado como alguém que expôs as verdadeiras faces da sociedade",
                        scores: { coringa: 3, thanos: 1, loki: 1 }
                    },
                    {
                        text: "Ser o salvador que fez o sacrifício necessário para um mundo melhor",
                        scores: { coringa: 1, thanos: 3, loki: 1 }
                    },
                    {
                        text: "Ser admirado e temido, com histórias contadas sobre minhas façanhas por gerações",
                        scores: { coringa: 1, thanos: 1, loki: 3 }
                    }
                ]
            }
        ];
        
        this.initElements();
       
        this.setupEventListeners();
        
        this.loadQuestion();
    }
    
    initElements() {
        
        this.welcomeScreen = document.getElementById('welcome-screen');
        this.quizScreen = document.getElementById('quiz-screen');
        this.resultScreen = document.getElementById('result-screen');
        
       
        this.startBtn = document.getElementById('start-btn');
        this.nextBtn = document.getElementById('next-btn');
        this.backBtn = document.getElementById('back-btn');
        this.resetBtn = document.getElementById('reset-btn');
        
        
        this.questionContainer = document.getElementById('question-container');
        this.questionCounter = document.getElementById('question-counter');
        this.progressFill = document.getElementById('progress-fill');
        this.characterName = document.getElementById('character-name');
        this.characterImage = document.getElementById('character-image');
        this.characterDescription = document.getElementById('character-description');
        this.characterScore = document.getElementById('character-score');
    }
    
    setupEventListeners() {
        this.startBtn.addEventListener('click', () => this.startQuiz());
        this.nextBtn.addEventListener('click', () => this.nextQuestion());
        this.backBtn.addEventListener('click', () => this.previousQuestion());
        this.resetBtn.addEventListener('click', () => this.resetQuiz());
    }
    
    startQuiz() {
        this.welcomeScreen.classList.remove('active');
        this.quizScreen.classList.add('active');
        this.loadQuestion();
    }
    
    loadQuestion() {
        const question = this.questions[this.currentQuestion];
        
        this.questionCounter.textContent = `Pergunta ${this.currentQuestion + 1} de ${this.questions.length}`;
        
        const progressPercentage = ((this.currentQuestion) / this.questions.length) * 100;
        this.progressFill.style.width = `${progressPercentage}%`;
        
        if (this.currentQuestion > 0) {
            this.backBtn.style.display = 'block';
        } else {
            this.backBtn.style.display = 'none';
        }
        
        if (this.currentQuestion === this.questions.length - 1) {
            this.nextBtn.textContent = 'Ver Resultado';
        } else {
            this.nextBtn.textContent = 'Próxima';
        }
        
        let questionHTML = `
            <h3>${question.text}</h3>
            <ul class="options">
        `;
        
        question.options.forEach((option, index) => {
            const isSelected = this.userAnswers[this.currentQuestion] === index;
            questionHTML += `
                <li class="option ${isSelected ? 'selected' : ''}" data-index="${index}">${option.text}</li>
            `;
        });
        
        questionHTML += `</ul>`;
        
        this.questionContainer.innerHTML = questionHTML;
        
        const options = document.querySelectorAll('.option');
        options.forEach(option => {
            option.addEventListener('click', (e) => {
                this.selectOption(e.target);
            });
        });
    }
    
    selectOption(optionElement) {
        
        const options = document.querySelectorAll('.option');
        options.forEach(option => option.classList.remove('selected'));
        
        optionElement.classList.add('selected');
        
        const optionIndex = parseInt(optionElement.getAttribute('data-index'));
        this.userAnswers[this.currentQuestion] = optionIndex;
    }
    
    nextQuestion() {
        if (this.userAnswers[this.currentQuestion] === undefined) {
            alert('Por favor, selecione uma opção para continuar.');
            return;
        }
        
        if (this.currentQuestion === this.questions.length - 1) {
            this.calculateResult();
            return;
        }
        
        this.currentQuestion++;
        this.loadQuestion();
    }
    
    previousQuestion() {
        if (this.currentQuestion > 0) {
            this.currentQuestion--;
            this.loadQuestion();
        }
    }
    
    calculateResult() {
        this.scores = {
            coringa: 0,
            thanos: 0,
            loki: 0
        };
        
        for (let i = 0; i < this.questions.length; i++) {
            const questionOptions = this.questions[i].options;
            const selectedOption = questionOptions[this.userAnswers[i]];
            
            if (selectedOption) {
                for (const character in selectedOption.scores) {
                    this.scores[character] += selectedOption.scores[character];
                }
            }
        }
        
        let maxScore = 0;
        let winningCharacter = null;
        
        for (const character in this.scores) {
            if (this.scores[character] > maxScore) {
                maxScore = this.scores[character];
                winningCharacter = character;
            }
        }
        
        const maxPossibleScore = 30;
        const percentageScore = Math.round((maxScore / maxPossibleScore) * 100);
        
        this.quizScreen.classList.remove('active');
        this.resultScreen.classList.add('active');
        
        this.characterName.textContent = this.characters[winningCharacter].name;
        this.characterImage.src = this.characters[winningCharacter].image;
        this.characterDescription.textContent = this.characters[winningCharacter].description;
        this.characterScore.textContent = percentageScore;
    }
    
    resetQuiz() {
        this.currentQuestion = 0;
        this.userAnswers = [];
        this.scores = {
            coringa: 0,
            thanos: 0,
            loki: 0
        };
        
        this.resultScreen.classList.remove('active');
        this.welcomeScreen.classList.add('active');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const quizSystem = new SistemaDoQuiz();
});