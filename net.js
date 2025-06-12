
  const input = document.getElementById("emailInput");
  const suggestionBox = document.getElementById("suggestions");

  // Sample email list
  const emailList = [
    "example@gmail.com",
    "test@yahoo.com",
    "user@outlook.com",
    "info@example.com",
    "contact@domain.com"
  ];

  input.addEventListener("input", function() {
    const value = input.value.toLowerCase();
    suggestionBox.innerHTML = "";

    if (value) {
      const matches = emailList.filter(email => email.includes(value));
      if (matches.length > 0) {
        matches.forEach(email => {
          const div = document.createElement("div");
          div.textContent = email;
          div.className = "suggestion-item";
          div.onclick = () => {
            input.value = email;
            suggestionBox.style.display = "none";
          };
          suggestionBox.appendChild(div);
        });
        suggestionBox.style.display = "block";
      } else {
        suggestionBox.style.display = "none";
      }
    } else {
      suggestionBox.style.display = "none";
    }
  });

  






