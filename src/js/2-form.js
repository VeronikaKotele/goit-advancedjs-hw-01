

const formData = { email: "", message: "" };

const refs = {
  form: document.querySelector(".feedback-form"),
  email: document.querySelector(".feedback-form input"),
  message: document.querySelector(".feedback-form textarea"),
};
const STORAGE_KEY = "feedback-form-state";

const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  const parsedData = JSON.parse(savedData);
  formData.email = parsedData.email || "";
  formData.message = parsedData.message || "";
  refs.email.value = formData.email;
  refs.message.value = formData.message;
}

const onFormInput = (event) => {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

const onFormSubmit = (event) => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert("Fill please all fields");
    return;
  }
  
  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  refs.form.reset();
};

refs.form.addEventListener("input", onFormInput);
refs.form.addEventListener("submit", onFormSubmit);