console.log("Witamy na stronie FC Barcelony!");

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const message = document.getElementById("formMessage");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = document.getElementById("email").value.trim();
      const subject = document.getElementById("subject").value;
      const text = document.getElementById("message").value.trim();

      if (!email || !subject || !text) {
        message.style.color = "red";
        message.textContent = "❌ Proszę wypełnić wszystkie pola.";
        return;
      }

      message.style.color = "#edbb00";
      message.textContent = "✅ Wiadomość została wysłana pomyślnie!";
      form.reset();
    });
  }
});
