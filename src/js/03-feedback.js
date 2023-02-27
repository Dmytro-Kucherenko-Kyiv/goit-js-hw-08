/* import throttle from "lodash.throttle"; */

const STORAGE_KEY = "feedback-form-state";
const storageValues = {};

const refs = {
	form: document.querySelector('.feedback-form'),
	email: document.querySelector('input'),
	message: document.querySelector('textarea')
};

autocompleteForm();

const handleInput = (event) => {
	storageValues[event.target.name] = event.target.value;
	localStorage.setItem(STORAGE_KEY, JSON.stringify(storageValues));
};

const handleSubmit = (event) => {
	event.preventDefault();
	event.currentTarget.reset();
	localStorage.removeItem(STORAGE_KEY);
	console.log(storageValues);
};

refs.form.addEventListener('input', handleInput);
refs.form.addEventListener('submit', handleSubmit);

function autocompleteForm() {
	const savedMessage = localStorage.getItem(STORAGE_KEY);

	const parsedMessage = JSON.parse(savedMessage);
	
	if (parsedMessage) {
	refs.email.value = parsedMessage.email;
	refs.message.value = parsedMessage.message;
}
}


