let username = prompt("Enter username");
let password = prompt("Enter password");

if (username === null || username.trim() === "") {
  alert("username is required");
} else if (password === null || password.trim() === "") {
  alert("password is required");
} else if (
  (username == "admin" && password == "1234") ||
  (username == "john" && password == "qwerty")
) {
  alert(`Hello ${username}`);
} else {
  alert("invalid username or password");
}
