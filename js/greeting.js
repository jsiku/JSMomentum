const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input:first-child");
/*  첫번째이기 때문에 first-child를 빼도 무방하다.
const loginInput = document.querySelector("#login-form input");
*/
const greeting = document.querySelector("#greeting");
const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");


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
}
/*
paintGreeting의 인자를 없애면 .. 이 안에 ... localstrage.getItem을 한번 더 해주어야 한다.
인자를 없앨 것인가.. getItem을 두번 호출할 것인가...의 문제
*/

const savedUsername = localStorage.getItem(USERNAMEKEY_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", handleSubmittedLogin);
} else {
    paintGreeting(savedUsername);
}