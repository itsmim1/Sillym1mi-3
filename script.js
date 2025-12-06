// script.js içeriği

document.addEventListener('DOMContentLoaded', () => {
    
    // --- BÖLÜMLER ARASI GEÇİŞ ---
    const aboutMeSection = document.getElementById('about-me');
    const friendsSection = document.getElementById('friends-section');
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Tüm navigasyon öğelerinden aktif sınıfını kaldır
            navItems.forEach(i => i.classList.remove('active'));
            // Tıklanan öğeye aktif sınıfını ekle
            e.target.classList.add('active');

            // Tüm içerik bölümlerini gizle
            aboutMeSection.classList.add('hidden');
            friendsSection.classList.add('hidden');

            // Tıklanan bölüme göre göster
            if (e.target.textContent === 'About Me') {
                aboutMeSection.classList.remove('hidden');
            } else if (e.target.textContent === 'Friends') {
                friendsSection.classList.remove('hidden');
                renderFriends(); // Arkadaşlar bölümünü her gösterdiğinde yeniden çiz
            }
        });
    });

    // --- MESAJ KUTUSU İŞLEVSELLİĞİ ---
    const messageForm = document.getElementById('message-form');
    const nameInput = document.getElementById('name-input');
    const messageInput = document.getElementById('message-input');
    const messagesContainer = document.getElementById('messages-container');
    
    // Mesajları yerel depolamadan yükle (tarayıcı kapansa bile kalır)
    let messages = JSON.parse(localStorage.getItem('aeroMessages')) || [];

    function renderMessages() {
        messagesContainer.innerHTML = '';
        if (messages.length === 0) {
            messagesContainer.innerHTML = '<p style="text-align:center; color:#888;">No messages yet. Be the first!</p>';
            return;
        }

        messages.forEach((msg, index) => {
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('message');
            messageDiv.innerHTML = `
                <div class="message-header">
                    <span>${msg.name} says:</span>
                    <button class="delete-btn" data-index="${index}">✖</button>
                </div>
                <div class="message-content">${msg.text}</div>
            `;
            messagesContainer.prepend(messageDiv); // Yeni mesajı en üste ekle
        });
        
        // Silme butonlarına olay dinleyicisi ekle
        document.querySelectorAll('.delete-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const index = parseInt(e.target.getAttribute('data-index'));
                deleteMessage(messages.length - 1 - index); // DOM'da ters sıra olduğu için index'i düzeltiyoruz
            });
        });
    }

    function deleteMessage(index) {
        messages.splice(index, 1);
        localStorage.setItem('aeroMessages', JSON.stringify(messages));
        renderMessages();
    }

    messageForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = nameInput.value.trim();
        const text = messageInput.value.trim();
        
        if (name && text) {
            const newMessage = { name, text, date: new Date().toLocaleString() };
            messages.push(newMessage);
            localStorage.setItem('aeroMessages', JSON.stringify(messages));
            
            nameInput.value = '';
            messageInput.value = '';
            renderMessages();
        }
    });

    // Sayfa yüklendiğinde mesajları göster
    renderMessages();

    // --- ARKADAŞLAR LİSTESİ ---
    const friends = [
        { name: "@m1miiqz.x1", handle: "m1miiqz.x1", url: "https://www.instagram.com/m1miiqz.x1/", pic: "img/m1miiqz_profile.png" },
        { name: "@rainbow._.dashie", handle: "rainbow._.dashie", url: "https://www.instagram.com/rainbow._.dashie/", pic: "img/rainbowdash_profile.png" },
        { name: "@rari_aso", handle: "rari_aso", url: "https://www.instagram.com/rari_aso/", pic: "img/rariaso_profile.png" }
    ];

    function renderFriends() {
        const friendsGrid = document.querySelector('.friends-grid');
        friendsGrid.innerHTML = '';
        
        friends.forEach(friend => {
            const card = document.createElement('div');
            card.classList.add('friend-card');
            card.innerHTML = `
                <a href="${friend.url}" target="_blank" style="text-decoration:none; color:#333;">
                    <img src="${friend.pic}" alt="${friend.name}" class="friend-pic aero-shine">
                    <h4 style="margin: 0; font-weight: 600;">${friend.name}</h4>
                    <p style="margin: 5px 0 0; font-size: 0.9em;">Visit Profile</p>
                </a>
            `;
            friendsGrid.appendChild(card);
        });
    }
});
