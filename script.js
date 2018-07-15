

const soundBoard = document.querySelector('#soundBoard');

const cardDeck = [];

let buttonsActive = false; 

const playerFrame = document.querySelector('#playerFrame');


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


var player;

function onYouTubeIframeAPIReady(){
	buttonsActive = true;
	player = new YT.Player('playerFrame', {
		events:{
			'onReady' : onPlayerReady,
			'onStateChange' : onPlayerStateChange,
		}
	});

}

function onPlayerReady(){
	return "Plyaer ready";
}

function onPlayerStateChange(event){

	switch (event.data){

		case -1:
			buttonsActive = false;
			player.getIframe().classList.remove('hidden');
			break;

		case 0:
			buttonsActive = true;
			player.getIframe().classList.add('hidden');
			break;

		case 1:
			break;

		case 3:
			break;

		default:
			console.log(event.data);
			buttonsActive = true;
			player.getIframe().classList.add('hidden');
	}

}


class SoundButton {

	constructor(videoID,thumb=1){

		let that = this;

		this.videoID = videoID;

		this.videoURL = `https://www.youtube.com/embed/${videoID}?autoplay=1&controls=0`;

		this.thumbURL = this.getThumbnail(videoID, thumb);

		this.img = document.createElement('img');

		this.img.src = this.thumbURL;

		this.img.addEventListener('click', function(){ that.play()} );
	}


	getThumbnail(videoID, thumbNum) {

		if  (typeof thumbNum === 'number'&& thumbNum >= 1 && thumbNum <= 3) { }
		else {thumbNum = 1;}

		return `https://img.youtube.com/vi/${videoID}/${thumbNum}.jpg`;
	}


	play() {
		if (buttonsActive === false){return false;}
		player.loadVideoById(this.videoID); // point that window to this.videoURL;
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

	defaultCard.remove();
}


intializeSoundboard();

