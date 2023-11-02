document.getElementById("regForm").addEventListener("submit", function (event) {
    console.log(123);
    event.preventDefault();
  
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const rpassword = document.getElementById("rpassword").value;
  
    if (password !== rpassword) {
      alert("Паролі не співпадають");
    } else {
      const user = {
        name: name,
        surname: surname,
        email: email,
        password: password,
      };
  
      const existingUser = JSON.parse(localStorage.getItem("case"));
  
      if (existingUser && existingUser.email === email) {
        alert("Користувач з такою електронною поштою вже існує");
      } else {
        localStorage.setItem("case", JSON.stringify(user));
        alert("Реєстрація успішна");
        console.log(localStorage.getItem("case"));
        window.location = "enter.html";
      }
  
      document.getElementById("regForm").reset();
    }
  });
  