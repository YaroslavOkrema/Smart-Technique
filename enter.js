document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const loginEmail = document.getElementById("email").value;
    const loginPassword = document.getElementById("password").value;
  
    const storedUsers = JSON.parse(localStorage.getItem("case"));
  
    if (storedUsers.email === loginEmail && storedUsers.password === loginPassword) {
        window.location = "private.html";
    } else {
        alert("Невірний логін або пароль");
    }
  });
  