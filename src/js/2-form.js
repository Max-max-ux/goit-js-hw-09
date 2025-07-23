const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";

const savedState = JSON.parse(localStorage.getItem(localStorageKey)) || {};
form.elements.email.value = savedState.email || "";
form.elements.message.value = savedState.message || "";

form.addEventListener("input", (event) => {
  const state = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };
  localStorage.setItem(localStorageKey, JSON.stringify(state));
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  if (!email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  console.log({ email, message });

  localStorage.removeItem(localStorageKey);
  form.reset();
});
