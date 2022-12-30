let fullDeck = {
	major: [
		'The Fool',
		'The Magician',
		'The High Priestess',
		'The Empress',
		'The Emperor',
		'The Hierophant',
		'The Lovers',
		'The Chariot',
		'Strength',
		'The Hermit',
		'Wheel of Fortune',
		'Justice',
		'The Hanged Man',
		'Death',
		'Temperance',
		'The Devil',
		'The Tower',
		'The Star',
		'The Moon',
		'The Sun',
		'Judgement',
		'The World'
	],
	wands: [
		'Ace of Wands',
		'2 of Wands',
		'3 of Wands',
		'4 of Wands',
		'5 of Wands',
		'6 of Wands',
		'7 of Wands',
		'8 of Wands',
		'9 of Wands',
		'10 of Wands',
		'Page of Wands',
		'Knight of Wands',
		'Queen of Wands',
		'King of Wands'
	],
	cups: [
		'Ace of Cups',
		'2 of Cups',
		'3 of Cups',
		'4 of Cups',
		'5 of Cups',
		'6 of Cups',
		'7 of Cups',
		'8 of Cups',
		'9 of Cups',
		'10 of Cups',
		'Page of Cups',
		'Knight of Cups',
		'Queen of Cups',
		'King of Cups'
	],
	swords: [
		'Ace of Swords',
		'2 of Swords',
		'3 of Swords',
		'4 of Swords',
		'5 of Swords',
		'6 of Swords',
		'7 of Swords',
		'8 of Swords',
		'9 of Swords',
		'10 of Swords',
		'Page of Swords',
		'Knight of Swords',
		'Queen of Swords',
		'King of Swords'
	],
	pentacles: [
		'Ace of Pentacles',
		'2 of Pentacles',
		'3 of Pentacles',
		'4 of Pentacles',
		'5 of Pentacles',
		'6 of Pentacles',
		'7 of Pentacles',
		'8 of Pentacles',
		'9 of Pentacles',
		'10 of Pentacles',
		'Page of Pentacles',
		'Knight of Pentacles',
		'Queen of Pentacles',
		'King of Pentacles'
	]
}
var revCount = 0;
initPicker();

function initPicker(){
	var suitSelect = document.getElementsByClassName("suit");
	for (let item of suitSelect) {
		item.onclick = function() {
			suitDisplay(item.classList[1]);
		};
		item.classList.remove("hidden");
	}
	var cont = document.getElementById("contents");
	cont.classList = "hidden";
	cont.innerHTML = "";
}

function setCard(cardNo) {
	let reveal = revCount % 3;
	var cards = document.getElementsByClassName("card");
	cards[reveal].firstElementChild.src = "https://raw.githubusercontent.com/raulg/tarotPicker/main/TarotAssets/"+cardNo+".jpg";
	cards[reveal].classList.remove("hold");
	revCount++;
}

function suitDisplay(selector) {
	var nots = document.querySelectorAll(".suit:not(."+selector+")");
	var offset = 0;
	var suit = [];
	for (let item of nots) {
		item.classList.add("hidden");
	}
	switch(selector) {
		case 'major':
			suit = fullDeck.major;
			offset = 0;
			break;
		case 'wands':
			suit = fullDeck.wands;
			offset = 22;
			break;
		case 'cups':
			suit = fullDeck.cups;
			offset = 36;
			break;
		case 'swords':
			suit = fullDeck.swords;
			offset = 50;
			break;
		case 'pentacles':
			suit = fullDeck.pentacles;
			offset = 64;
			break;
		default:
			console.log("Wrong lever!");
			break;
	}
	let cont = document.getElementById("contents");
	suit.forEach((element, index) => {
		let cardBtn = document.createElement('button');
		let cardNmb = offset + index;
		cardBtn.setAttribute('onclick', 'setCard('+cardNmb+')');
		cardBtn.innerHTML = element;
		cont.appendChild(cardBtn)
	});
	cont.classList.remove("hidden");
	document.querySelector('.'+selector).setAttribute('onclick', 'initPicker()');
}

function clearDeck(){
	revCount = 0;
	var cards = document.querySelectorAll('.card');
	for (let item of cards) {
		item.classList.add('hold');
	}	
}
