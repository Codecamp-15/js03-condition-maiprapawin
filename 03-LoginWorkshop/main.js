let user = prompt("Enter name");
if (user === null || user.trim() === "") {
  user = "guest";
} else if (user == "codecamp") {
  let password = prompt("Enter password");
  if (password == "123456") {
    user = "codecamp";
  } else {
    alert("Wrong password");
  }
} else {
  user = "guest";
}

alert(`Welcome ${user}`);
