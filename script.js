document.addEventListener("DOMContentLoaded", () => {
  // Popup: About
  const aboutBtn = document.getElementById("aboutBtn");
  const aboutPopup = document.getElementById("aboutPopup");
  const closePopup = document.getElementById("closePopup");
  aboutBtn.addEventListener('click', () => {
    aboutPopup.style.display = "block";
    aboutBtn.classList.add('active');
  });
  closePopup.addEventListener('click', () => {
    aboutPopup.style.display = "none";
    aboutBtn.classList.remove('active');
  });

  // Alt kutudan mesaj gönderme
  document.querySelector('.send-btn').addEventListener('click', function(e) {
    const input = document.querySelector('.msg-input');
    if (input.value.trim()) {
      alert('Mesajınız gönderildi: ' + input.value.trim());
      input.value = '';
    }
  });
  document.querySelector('.msg-input').addEventListener('keypress', function(e) {
    if (e.key === "Enter") {
      document.querySelector('.send-btn').click();
    }
  });
});