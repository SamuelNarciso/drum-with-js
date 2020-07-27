const body = document.body;
const boxs = document.querySelectorAll('.box');

const letters = {
	A: '97',
	S: '115',
	D: '100',
	F: '102',
	G: '103',
	H: '104',
	J: '106',
	K: '107',
	L: '108',
};

const itSoundsKey = (e) => {
	const box = document.querySelector(`article[data-key="${e.keyCode}"]`);
	const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	play(sound, box);
};
const itSoundsClick = (e) => {
	const letter = letters[e.path[0].innerText];
	const box = document.querySelector(`article[data-key="${letter}"]`);
	const sound = document.querySelector(`audio[data-key="${letter}"]`);


	play(sound, box);
};

const play = (sound, box) => {

	if (sound) {
		sound.currentTime = 0;
		sound.play();
		box.classList.add('playing');
	}
};

const removeClass = (e) => {
	if (e.propertyName !== 'transform') return;
	e.currentTarget.classList.remove('playing');
};

body.addEventListener('keypress', itSoundsKey);
boxs.forEach((box) => box.addEventListener('transitionend', removeClass));
boxs.forEach((box) => box.addEventListener('click', itSoundsClick));
