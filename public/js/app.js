const name = document.querySelector('#name');
const code = document.querySelector('#code');
const email = document.querySelector('#email');
const number = document.querySelector('#number');
const btn = document.querySelector('#btn');
const message = document.querySelector('.message');

// Validator function - checks if input value matches the regex

function validator(e, regex) {
  const message = e.target.nextElementSibling;
  const input = e.target;
  const inputVal = e.target.value;
  // Check if input name equals message element name
  if (input.id === message.dataset.name) {
    if (!inputVal) {
      input.classList.add('invalid');
      message.innerHTML = `<p>Please fill out this field.</p>`;
    } else if (!regex.test(inputVal)) {
      input.classList.add('invalid');
      message.innerHTML = `<p>Please enter a correct ${input.id}. </p>`;
    } else {
      input.classList.remove('invalid');
      message.innerHTML = ``;
    }
  }
  enableSubmit();
}

// Enables submit button if all fields contain a valid values;

function enableSubmit() {
  document
    .querySelectorAll(`input[type="text"]`)
    .forEach(input =>
      input.classList.contains('invalid') || !input.value
        ? (btn.disabled = true)
        : (btn.disabled = false)
    );
}

// Event Listeners

name.addEventListener('blur', e => {
  const regex = /^([\w]{2,})+\s+([\w\s]{2,})+$/i;
  validator(e, regex);
});
code.addEventListener('blur', e => {
  const regex = /^(([gG][iI][rR] {0,}0[aA]{2})|((([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y]?[0-9][0-9]?)|(([a-pr-uwyzA-PR-UWYZ][0-9][a-hjkstuwA-HJKSTUW])|([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y][0-9][abehmnprv-yABEHMNPRV-Y]))) {0,}[0-9][abd-hjlnp-uw-zABD-HJLNP-UW-Z]{2}))$/i;
  validator(e, regex);
});
email.addEventListener('blur', e => {
  const regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-z]{2,5})$/i;
  validator(e, regex);
});
number.addEventListener('blur', e => {
  const regex = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;
  validator(e, regex);
});
