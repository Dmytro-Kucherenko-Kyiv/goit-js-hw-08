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
	console.log(formFields.email.value)

	localStorage.removeItem(STORAGE_KEY);
	localStorage.setItem(STORAGE_KEY, JSON.stringify({
		email: formFields.email.value,
		message: formFields.message.value
	}));

	if (refs.email.value === '' || refs.message.value === '') {
		return alert("Please fill in all the fields!")
	}

	event.currentTarget.reset();
};

refs.form.addEventListener('submit', throttle(handleSubmit, 500));

function autocompleteForm() {
	const savedMessage = localStorage.getItem(STORAGE_KEY);

	const parsedMessage = JSON.parse(savedMessage);
	
	if (savedMessage) {
		refs.email.value = parsedMessage.email;
		refs.message.value = parsedMessage.message;
	}

	console.log(savedMessage);
}