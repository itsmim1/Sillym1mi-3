/* style.css içeriği */
:root {
    /* Cutecore / Frutiger Aero Renkleri */
    --aero-blue: rgba(140, 200, 255, 0.7); 
    --aero-pink-light: rgba(255, 192, 203, 0.8); /* Şeffaf Pembe (Buton) */
    --aero-pink-dark: #FF69B4; /* Kalp Rengi */
    --aero-shine: rgba(255, 255, 255, 0.6); 
    --aero-shadow: rgba(0, 0, 0, 0.2);
    --aero-green: #90EE90; /* Mesaj rengi için */
    --aero-font: 'Poppins', sans-serif;
    --gap: 15px; 
    --border-radius: 15px; 
}

body {
    font-family: var(--aero-font);
    margin: 0;
    padding: 0;
    color: #333;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    min-height: 100vh;
    padding-top: 50px;
    padding-bottom: 50px;
    
    /* ARKA PLAN: JS tarafından atanacak, bu kısım sadece yedektir */
    background-size: cover;          
    background-repeat: no-repeat;    
    background-attachment: fixed;    
    background-position: center center;
}

.container {
    width: 90%;
    max-width: 600px;
    box-shadow: 0 10px 30px var(--aero-shadow);
    border-radius: 20px;
    overflow: hidden;
    backdrop-filter: blur(10px); /* Cam efekti */
}

/* Navigasyon Stili (Şeffaf ve Pembe Butonlar) */
.aero-nav {
    display: flex;
    justify-content: center; 
    gap: var(--gap); /* Butonlar arası boşluk */
    background: transparent; 
    padding: var(--gap);
    border-bottom: none; 
}

.nav-item {
    padding: 10px 20px;
    text-decoration: none;
    color: #000;
    font-weight: 700;
    transition: background-color 0.3s, box-shadow 0.3s;
    /* Şeffaf Pembe Buton */
    background: var(--aero-pink-light);
    border: 2px solid var(--aero-shine);
    border-radius: var(--border-radius);
    box-shadow: 0 4px 10px var(--aero-shadow), inset 0 0 10px var(--aero-shine);
    text-shadow: 1px 1px 2px white;
}

.nav-item:hover {
    background: var(--aero-blue);
    color: white;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3), inset 0 0 15px var(--aero-shine);
}

.nav-item.active {
    background: var(--aero-pink-dark);
    color: white;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.5);
    border-color: white;
}

/* Kart Stili (Ana İçerik Kutusu) */
.aero-card {
    background: rgba(255, 255, 255, 0.8); 
    border: 1px solid var(--aero-shine);
    padding: var(--gap);
    box-shadow: 0 4px 15px var(--aero-shadow);
    border-radius: 0 0 20px 20px;
}

/* Profil ve Arkadaş Resimleri Stili */
.profile-pic, .friend-pic {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    border: 5px solid var(--aero-pink-dark); /* Pembe çerçeve */
    box-shadow: 0 0 15px var(--aero-blue), 0 0 5px 3px var(--aero-pink-light);
    transition: transform 0.2s;
}

.friend-pic {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 3px solid var(--aero-pink-dark);
}

.profile-pic:hover, .friend-pic:hover {
    transform: scale(1.05) rotate(3deg);
}

.aero-text {
    text-shadow: 1px 1px 3px var(--aero-shadow);
    margin: 5px 0 15px;
    font-size: 1.8em;
}

/* Mesaj ve Buton Stilleri */
.aero-button {
    background: var(--aero-blue);
    color: white;
    cursor: pointer;
    font-weight: 600;
}

.message {
    background: var(--aero-green);
    padding: 10px;
    border-radius: 10px;
    margin-bottom: var(--gap); 
    box-shadow: 0 2px 5px var(--aero-shadow);
    position: relative;
}

.delete-btn {
    background: var(--aero-pink-dark); 
    color: white;
    border: none;
    padding: 5px 8px;
    border-radius: 5px;
    cursor: pointer;
}

/* Arkadaşlar Kartları */
.friends-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: var(--gap); 
    padding: var(--gap);
    justify-content: center;
}

.friend-card {
    border: 2px solid var(--aero-blue);
    position: relative;
}

.friend-card::before, .friend-card::after {
    content: '💖'; 
    position: absolute;
    font-size: 0.8em;
    color: var(--aero-pink-dark);
    animation: pulse 1s infinite alternate;
}

/* Not Kağıdı (Astie Bio) Stili */
#astie-bio {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 
    width: 300px;
    padding: 20px;
    background: var(--aero-pink-light); 
    border: 3px dashed var(--aero-pink-dark); 
    border-radius: 20px;
    box-shadow: 0 10px 30px var(--aero-shadow);
    z-index: 1000;
    text-align: center;
    font-family: 'Comic Sans MS', cursive; 
    line-height: 1.5;
}

.heart-deco {
    color: var(--aero-pink-dark);
    font-size: 1.2em;
    margin: 0 5px;
}

.hidden {
    display: none !important;
}

/* Animasyonlar */
@keyframes pulse {
    50% { transform: scale(1.1); }
}
