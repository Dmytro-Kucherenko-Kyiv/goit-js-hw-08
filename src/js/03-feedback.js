import throttle from "lodash.throttle";

const STORAGE_KEY = "feedback-form-state";

const refs = {
	form: document.querySelector('.feedback-form'),
	email: document.querySelector('input'),
	message: document.querySelector('textarea')
}

autocompleteForm();

const handleSubmit = (event) => {
	event.preventDefault();

	const formFields = event.target.elements;

	const data = {
		email: formFields.email.value,
		message: formFields.message.value
	}

	localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

	console.log(data)

/* 	if (refs.email.value === '' || refs.message.value === '') {
		return alert("Please fill in all the fields!")
	} */

	event.currentTarget.reset();
	localStorage.clear()
};

refs.form.addEventListener('submit', throttle(handleSubmit, 500));

function autocompleteForm() {
	const savedMessage = localStorage.getItem(STORAGE_KEY);

	const parsedMessage = JSON.parse(savedMessage);
	
	if (parsedMessage) {
		refs.email.value = parsedMessage.email;
		refs.message.value = parsedMessage.message;
	}

/* 	console.log(savedMessage); */
}

const handleInput = (event) => {
	const savedMessage = localStorage.getItem(STORAGE_KEY);

	const parsedMessage = JSON.parse(savedMessage);

	localStorage.setItem(STORAGE_KEY, JSON.stringify({
		...parsedMessage, [event.target.name]: event.target.value
	}));
}

refs.form.addEventListener('input', throttle(handleInput, 500));