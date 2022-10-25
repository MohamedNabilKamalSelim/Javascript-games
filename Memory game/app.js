const cardArray = [
    {
        name: "cheeseburger",
        img: 'images/cheeseburger.png'
    },
    {
        name: "fries",
        img: 'images/fries.png'
    },
    {
        name: "hotdog",
        img: 'images/hotdog.png'
    },
    {
        name: "ice-cream",
        img: 'images/ice-cream.png'
    },
    {
        name: "milkshake",
        img: 'images/milkshake.png'
    },
    {
        name: "pizza",
        img: 'images/pizza.png'
    },
    {
        name: "cheeseburger",
        img: 'images/cheeseburger.png'
    },
    {
        name: "fries",
        img: 'images/fries.png'
    },
    {
        name: "hotdog",
        img: 'images/hotdog.png'
    },
    {
        name: "ice-cream",
        img: 'images/ice-cream.png'
    },
    {
        name: "milkshake",
        img: 'images/milkshake.png'
    },
    {
        name: "pizza",
        img: 'images/pizza.png'
    }
];

//To shufle the array randomly
cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.getElementById("grid");
const score = document.getElementById('result');
const reloadBtn = document.getElementById('reload');

let cardsChosenName = [];
let cardsChosenId = [];
let cardsWon = [];

CreatBoard();




function CreatBoard(){
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i);

        card.addEventListener('click', FlipCard);

        gridDisplay.appendChild(card);
    }
}

function FlipCard(){
    const cardId = this.getAttribute('data-id');
    cardsChosenName.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);

    this.setAttribute('src', cardArray[cardId].img);

    if(cardsChosenName.length === 2){
        setTimeout(CheckMatch, 500);
    }
}

function CheckMatch(){
    const cards = document.querySelectorAll('img');
    const firstCardId = cardsChosenId[0];
    const secondCardId = cardsChosenId[1];

    //If the player click the same image twice
    if(firstCardId == secondCardId){
        cards[firstCardId].setAttribute('src', 'images/blank.png');
        cards[secondCardId].setAttribute('src', 'images/blank.png');

        alert('you click the same image!');
    }

    else if(cardsChosenName[0] == cardsChosenName[1]){
        //Make these cards white (disapear)
        cards[firstCardId].setAttribute('src', 'images/white.png');
        cards[secondCardId].setAttribute('src', 'images/white.png');

        //if user click on them nothing will happen
        cards[firstCardId].removeEventListener('click', FlipCard);
        cards[secondCardId].removeEventListener('click', FlipCard);

        cardsWon.push(cardsChosenName);

        //To display the player score so far
        score.textContent = cardsWon.length;

        alert('You find a match!');
    }
    else {
        cards[firstCardId].setAttribute('src', 'images/blank.png');
        cards[secondCardId].setAttribute('src', 'images/blank.png');

        alert('Not match please try again!');
    }

    //clear data
    cardsChosenId = [];
    cardsChosenName = [];

    if(cardsWon.length == (cardArray.length / 2)){
        score.textContent = 'Congratulations you found them all!';
        
        reloadBtn.innerText = 'Restart';
        reloadBtn.style.display = 'flex';
        reloadBtn.addEventListener('click',() => {
            window.location.reload();
        });
    }
}