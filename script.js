const parent = document.querySelector("body");

const userLogIn = prompt("Ciao! Inserisci il tuo nome utente");

const newEl = (el) => document.createElement(el);

const navEl = newEl("nav");
const usernameEl = newEl("h1");

navEl.className = "navBar";
usernameEl.className = "name";
usernameEl.textContent = `Hello ${userLogIn} !`;

navEl.append(usernameEl);
parent.appendChild(navEl);

//primo punto esercizio
// localStorage.setItem("username", userLogIn);

try {
  if (localStorage.getItem("name") !== userLogIn) {
    console.error("Username non presente nel tuo local storage");
    throw error;
  }
} catch (error) {
  localStorage.setItem("name", userLogIn);
}
