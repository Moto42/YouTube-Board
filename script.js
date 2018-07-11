const cardElements = document.querySelectorAll('.card');
cardElements.forEach(populateHTMLCards);

class Card {

	constructor(videoID,thumb=1){

		this.videoID = videoID;
		
		this.thumb = thumb;

		this.soundButton = new SoundButton(this.videoID, this.thumb);

	}

	appendTo(node){
		node.appendChild(this.soundButton.img);
	}
}

class SoundButton{

	constructor(videoID,thumb=1){

		this.img = document.createElement("img");

		this.img.src =this.getThumbnail(videoID,thumb);

		this.img.addEventListener("click", this.play);

		this.img.videoURL= this.getVideoURL(videoID);
	}

	getThumbnail(videoID, thumbNum) {

		if  (typeof thumbNum === 'number'&& thumbNum >= 1 && thumbNum <= 3) { }
		else {thumbNum = 1;}

		return `https://img.youtube.com/vi/${videoID}/${thumbNum}.jpg`;
	}

	getVideoURL(videoID){

		return `https://www.youtube.com/embed/${videoID}&autoplay=1&controls=0`;
	}


	play(videoURL) {
		console.log(this.videoURL);
		return true;
	}
}


function populateHTMLCards(card){
	const cardString = card.innerText;
	console.log(cardString);
	const filledCard = new cardFromString(cardString);
	filledCard.appendTo(card);
}

function cardFromString (cardString) {
	let videoID = parseCardStringID(cardString);
	let thumbNum = parseCardStringThumbNum(cardString);
	return new  Card(videoID,thumbNum);
}

function parseCardStringID(cardString){
	if(cardString.includes("&")){
		return cardString.slice(0,cardString.indexOf("&"));
	}
	else {
		return cardString;
	}
}

function parseCardStringThumbNum(cardString){
	if(cardString.includes("&")){
		return cardString.slice(-1);
	}
	else {
		return 1;
	}
}

// THIS WORKS!!!
// const a = new cardFromString("xczDd2_X0DI&3");
// a.appendTo(cardElements[0]);


