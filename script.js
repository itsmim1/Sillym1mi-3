document.addEventListener("DOMContentLoaded", () => {
  // Hakkında popup
  const aboutBtn = document.getElementById("aboutBtn");
  const aboutNote = document.getElementById("aboutNote");
  const closeNote = document.getElementById("closeNote");
  
  aboutBtn.addEventListener("click", function() {
    aboutNote.style.display = "block";
    aboutBtn.classList.add('active');
  });
  closeNote.addEventListener("click", function() {
    aboutNote.style.display = "none";
    aboutBtn.classList.remove('active');
  });

  // Mesaj gönder
  document.querySelector('.send-msg-btn').addEventListener('click', function(e) {
    const input = document.querySelector('.msg-input');
    if (input.value.trim()) {
      alert('Mesajın gönderildi: ' + input.value.trim());
      input.value = '';
    }
  });

  // Enter ile mesaj gönderme
  document.querySelector('.msg-input').addEventListener('keypress', function(e) {
    if (e.key === "Enter") {
      document.querySelector('.send-msg-btn').click();
    }
  });
});