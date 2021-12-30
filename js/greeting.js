const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input:first-child");
/*  첫번째이기 때문에 first-child를 빼도 무방하다.
const loginInput = document.querySelector("#login-form input");
*/
const greeting = document.querySelector("#greeting");
const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const logout = document.querySelector("#logout");


const HIDDEN_CLASSNAME = "hidden";
const USERNAMEKEY_KEY = "username";

function handleSubmittedLogin(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAMEKEY_KEY, username);
    paintGreeting(username);
}

function paintGreeting(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    todoForm.classList.remove(HIDDEN_CLASSNAME);
    todoList.classList.remove(HIDDEN_CLASSNAME);
    logout.classList.remove(HIDDEN_CLASSNAME);
}


const savedUsername = localStorage.getItem(USERNAMEKEY_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", handleSubmittedLogin);
} else {
    paintGreeting(savedUsername);
}


function onLogout() {
    if (confirm('Do you want to logout?')) {
        localStorage.clear();
        location.reload();
    } else {

    }
}

logout.addEventListener('click', onLogout)