const form = document.querySelector('form');
const submit = document.querySelector('button');
const inputData = document.querySelectorAll('input');

const handleInputChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
};

const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
        console.log('Form is not valid');
        return;
    }
    const formData = {
        name: form.elements.name.value,
        number: form.elements.number.value,
        message: form.elements.message.value
    };
    renderData(formData);
    form.reset();
};

const renderData = (data) => {
    if (data.name.length === 0 || data.number.length === 0 || data.message.length === 0) {
        return;
    }
    const p = document.createElement('p');
    p.style.color = 'green';
    p.innerText = `Name: ${data.name}, Phone number: ${data.number}, Message: ${data.message}`;
    form.parentElement.append(p);
};

form.addEventListener('submit', handleSubmit);
form.addEventListener('change', handleInputChange);