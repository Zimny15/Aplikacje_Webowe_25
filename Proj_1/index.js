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

function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString("pl-PL");
  const clock = document.getElementById("clock");
  if (clock) clock.textContent = `Aktualny czas: ${time}`;
}
setInterval(updateClock, 1000);
updateClock();
