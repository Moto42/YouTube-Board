console.log("testing");

const cardElements = document.querySelectorAll('.card');

const cards = cardElements.forEach(cardsFromHTML);



class Card {

	constructor(videoID,thumb=1){
		
		this.videoID = videoID;
		
		this.thumb = thumb;

		this.soundButton = new SoundButton(this.videoID, this.thumb);

	}
}

class SoundButton{

	constructor(videoID,thumb=1){
		
		this.videoURL=this.getVideoURL(videoID);

		this.thumb = this.getThumbnail(videoID, thumb);

		this.img = document.createElement("img");

		this.img.src =this.thumb;

		this.img.addEventListener("click", this.play)
	}

	getThumbnail(videoID, thumbNum) {

		if  (typeof thumbNum === 'number'&& thumbNum >= 1 && thumbNum <= 3) { }
		else {thumbNum = 1;}

		return `https://img.youtube.com/vi/${videoID}/${thumbNum}.jpg`;
	}

	getVideoURL(videoID){

		return `https://www.youtube.com/embed/${videoID}&autoplay=1&controls=0`;
	}


	play(event) {

		console.log(this.videoURL);
	}
}


function cardsFromHTML(card){
	const cardString = card.textContent;
	// const videoID = parseCardStringVID(cardString);
	// const thumb = parseCardStringThumb(cardString);
	return new Card(videoID,thumb); 

}

function parseCardStringVID(cardString){

}

function parseCardStringThumb(cardString) {

}


























