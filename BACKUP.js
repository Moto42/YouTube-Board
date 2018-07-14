

const sounbBoard = document.querySelector('#soundBoard');

const cardDeck = [];

intializeSoundboard();


class Card {

	constructor(videoID,thumb=1) {

		this.element = document.createElement('div');

		this.element.classList.add('card',);
		
		this.videoID = videoID;

		this.soundButton = new SoundButton(this.videoID, thumb);

		this.element.appendChild(this.soundButton.img);

	}
}


class SoundButton {

	constructor(videoID,thumb=1){

		this.videoURL = `https://www.youtube.com/embed/${videoID}&autoplay=1&controls=0`;

		this.thumbURL = this.getThumbnail(videoID, thumb);

		this.img = document.createElement('img');

		this.img.src = this.thumbURL;

		this.play();

	}


	getThumbnail(videoID, thumbNum) {

		if  (typeof thumbNum === 'number'&& thumbNum >= 1 && thumbNum <= 3) { }
		else {thumbNum = 1;}

		return `https://img.youtube.com/vi/${videoID}/${thumbNum}.jpg`;
	}


	play() {

		console.log(this.videoURL);
	}
}


function intializeSoundboard() {

	const cardElements = document.querySelectorAll('.defaultCard');

	cardElements.forEach(cardFromString);

	let a = new Card('xczDd2_X0DI',1);
	sounbBoard.appendChild(a);
}


function cardFromString(defaultCard,i) {
	
}


function thinger(e){console.log(e);};