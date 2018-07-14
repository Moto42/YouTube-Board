

const sounbBoard = document.querySelector('#soundBoard');

const cardDeck = [];



class Card {

	constructor(videoID,thumb=1) {

		this.element = document.createElement('div');

		this.element.classList.add('card',);
		
		this.videoID = videoID;

		this.soundButton = new SoundButton(this.videoID, thumb);

		this.element.appendChild(this.soundButton.img);

	}


}



function parseIDFromString(cardString) {
	if(cardString.includes("&")) {
		return cardString.slice(0,cardString.indexOf('&'));
	}
	else {
		return cardString;
	}
}

function parseThumbNumFromString(cardString) {
	if(cardString.includes("&")) {
		return cardString.slice(-1);
	}
	else {
		return 1;
	}
}


class SoundButton {

	constructor(videoID,thumb=1){

		this.videoURL = `https://www.youtube.com/embed/${videoID}&autoplay=1&controls=0`;

		this.thumbURL = this.getThumbnail(videoID, thumb);

		this.img = document.createElement('img');

		this.img.src = this.thumbURL;

		this.img.addEventListener('click', function(){this.play(this);} );

	}


	getThumbnail(videoID, thumbNum) {

		if  (typeof thumbNum === 'number'&& thumbNum >= 1 && thumbNum <= 3) { }
		else {thumbNum = 1;}

		return `https://img.youtube.com/vi/${videoID}/${thumbNum}.jpg`;
	}


	play(e) {

		console.log(e);
	}
}



function intializeSoundboard() {

	let defaultCards = document.querySelectorAll('.defaultCard');

	defaultCards.forEach(cardFromString);
}


function cardFromString(defaultCard,i) {
	let videoID = parseIDFromString(defaultCard.textContent);

	let thumbNum= parseThumbNumFromString(defaultCard.textContent);

	cardDeck.push( new Card(videoID, thumbNum));

	soundBoard.appendChild(cardDeck[i].element);
}


intializeSoundboard();
console.log(cardDeck);