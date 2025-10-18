// happy birthday, lovee.js

document.addEventListener('DOMContentLoaded', () => {

    const cssStyles = `
        body {
            box-sizing: border-box;
            margin: 0;
            font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        .card-container {
            width: 100%;
            max-width: 390px;
            height: 100vh;
            margin: 0 auto;
            position: relative;
            overflow: hidden;
            background-image: url('https://images.unsplash.com/photo-1544772546-4357b9384b60?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=627');
            background-size: cover;
            background-position: center;
        }
        .overlay {
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background-color: rgba(0, 0, 0, 0.4);
            backdrop-filter: blur(2px);
        }
        .content-wrapper {
            position: relative;
            z-index: 10;
            height: 100%;
            padding: 2rem 1.5rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            transition: all 0.3s ease;
            color: white; /* Default text color */
        }
        /* --- GAYA LAYOUT KAMU, TIDAK DIUBAH SAMA SEKALI --- */
        .layout-spread { justify-content: space-around; }
        .layout-center { justify-content: flex-start; padding-top: 4rem; gap: 1.5rem; }
        .layout-top { justify-content: flex-start; padding-top: 5rem; gap: 1.5rem; }
        
        .glass-effect { background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 1rem; padding: 0.75rem 1.5rem; color: white; cursor: pointer; transition: background 0.3s; width: 100%; }
        .glass-effect:hover { background: rgba(255, 255, 255, 0.2); }
        #mainTitle { font-size: 2.25rem; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.5); }
        #messageText { opacity: 0.9; }
        .button-container { display: flex; flex-direction: column; gap: 1rem; width: 80%; align-items: center; }

        /* === CSS HALAMAN 4 (TIDAK DIUBAH) === */
        .info-card { border-radius: 1rem; width: 100%; max-width: 400px; box-shadow: 0 10px 25px rgba(0,0,0,0.2); overflow: hidden; }
        .info-header { background: #800000; padding: 1.5rem; }
        .info-header h1 { color: white; font-size: 1.8rem; font-weight: bold; }
        .info-body { background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.2); border-top: none; padding: 0.5rem 1rem; border-bottom-left-radius: 1rem; border-bottom-right-radius: 1rem; }
        .info-table { width: 100%; border-collapse: collapse; color: white; }
        .info-table td { padding: 1rem 0.5rem; border-bottom: 1px solid rgba(255, 255, 255, 0.2); vertical-align: middle; }
        .info-table tr:last-child td { border-bottom: none; }
        .info-table td:first-child { font-weight: 600; color: #e5e7eb; width: 30%; text-align: left;}
        .info-table td:last-child { text-align: left; }
        .choice-button { padding: 0.5rem 1rem; border-radius: 20px; border: none; color: white; font-weight: bold; cursor: pointer; transition: transform 0.2s; }
        .choice-button:hover { transform: scale(1.05); }
        #message-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.6); display: none; justify-content: center; align-items: center; z-index: 1000; }
        #message-box { background: white; padding: 2rem; border-radius: 1rem; box-shadow: 0 10px 25px rgba(0,0,0,0.2); text-align: center; max-width: 400px; color: #333; }
    
        /* === CSS REVISI UNTUK HALAMAN 5 (LOVE NOTES BOOK) === */
        .book-wrapper { width: 100%; max-width: 320px; display: flex; flex-direction: column; align-items: center; gap: 1.5rem; }
        .book-title { font-size: 1.8rem; font-weight: bold; color: white; text-shadow: 0 0 2px rgba(0,0,0,1), 2px 2px 5px rgba(0,0,0,0.7);position: relative; z-index: 1; margin-left: 45px; }
        .book-subtitle { color: white; opacity: 0.8; margin-top: -1.5rem;margin-left: 50px; }
        .book-container { perspective: 1000px; width: 100%; height: 350px; }
        .book { position: relative; width: 100%; height: 100%; transform-style: preserve-3d; transition: transform 0.6s; }
        .page { position: absolute; width: 100%; height: 100%; background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.3); border-radius: 10px; padding: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.2); backface-visibility: hidden; transform-origin: left center; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 1rem; }
        .page-text { font-size: 0.8rem; line-height: 1.6; color: white; font-family: 'Georgia', serif; margin-top: 4rem; margin-bottom: 0.01rem;}
        .book-gif { width: 150px; height: 150px; object-fit: cover; border-radius: 8px;margin-bottom: 4rem; margin-top: 0.5rem; }
        .flipped { transform: rotateY(-180deg); }
        .navigation { display: flex; justify-content: center; gap: 1rem; width: 100%; }
.navigation-controls { display: flex; flex-direction: column; gap: 1rem; width: 100%; align-items: center; }
        .flip-buttons { display: flex; gap: 1rem; width: 100%; margin-left:45;}
        .flip-buttons > .glass-effect { flex-grow: 1;}    `
    ;

    // --- STRUKTUR HTML DASAR ---
    const cardHtml = `<div class="card-container"><div class="overlay"></div><div class="content-wrapper"></div><audio id="birthdayAudio" preload="auto" loop></audio><div id="message-overlay"><div id="message-box"><div id="message-content" style="margin-bottom: 1rem; font-size: 1.1rem;"></div><button id="close-message-btn" style="background-color: #770404e6; color: white; padding: 0.5rem 1.5rem; border-radius: 0.5rem; border: none; cursor: pointer;">Close</button></div></div></div>`;

    // --- LOGIKA UTAMA ---
    const styleElement = document.createElement('style');
    styleElement.innerHTML = cssStyles;
    document.head.appendChild(styleElement);
    document.body.innerHTML = cardHtml;
    
    const contentWrapper = document.querySelector('.content-wrapper');
    const audio = document.getElementById('birthdayAudio');
    
    const musicUrl = "daisies jb.mp3";
    let isPlaying = false;
    audio.src = musicUrl; 

    function resetWrapperStyle() {
        contentWrapper.removeAttribute('style');
    }

    // --- FUNGSI HALAMAN ---
    
    // Halaman 1: Utama (TIDAK DIUBAH)
    function renderMainPage() {
        resetWrapperStyle();
        contentWrapper.className = 'content-wrapper layout-spread';
        contentWrapper.innerHTML = `<h1 id="mainTitle">Happy Birthday ♡</h1><p style="font-size: 1rem; opacity: 0.9; margin-top: -2.5rem; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">Hey babyy, i hope your day is as wonderful and amazing as you are. Being with you is the best part of my life, i can't wait to make more beautiful memories with you ⸜(｡˃ ᵕ ˂ )⸝♡</p><div><img src="foto-tengah.png" alt="Birthday Photo" style="width:150px; height:150px; object-fit: cover; border-radius: 1rem;"></div><div class="button-container"><button id="musicButton" class="glass-effect"></button><button id="nextPageButton" class="glass-effect">Go here ;)</button></div><p id="messageText">I love you so much, Brandon (っ˶ ˘ ᵕ˘)ˆᵕ ˆ˶ς)</p>`;
        const musicButton = document.getElementById('musicButton');
        musicButton.textContent = isPlaying ? '⏸️ Pause Music' : 'Play Music';
        musicButton.addEventListener('click', toggleMusic);
        document.getElementById('nextPageButton').addEventListener('click', renderSecondPage);
    }

    // Halaman 2: Pilihan (TIDAK DIUBAH)
    function renderSecondPage() {
        resetWrapperStyle();
        contentWrapper.className = 'content-wrapper layout-center';
        contentWrapper.innerHTML = `<h1 id="mainTitle">Have fun opening them!</h1><p id="messageText">This card is just the appetizer. I'll be the main course next time ദ്ദി(˵ •̀ ᴗ - ˵ ) ✧</p><div class="button-container"><button id="blowCandleButton" class="glass-effect">Come here first</button><button id="infoPageButton" class="glass-effect">Information Card</button><button id="bookPageButton" class="glass-effect">Yapping Sesh</button><button id="backButton" class="glass-effect" style="margin-top: 1rem;">Back</button></div>`;
        document.getElementById('backButton').addEventListener('click', renderMainPage);
        document.getElementById('blowCandleButton').addEventListener('click', renderGifPage);
        document.getElementById('infoPageButton').addEventListener('click', renderInfoPage);
        document.getElementById('bookPageButton').addEventListener('click', renderBookPage);
    }

    // Halaman 3: GIF (TIDAK DIUBAH)
    function renderGifPage() {
        resetWrapperStyle();
        contentWrapper.className = 'content-wrapper layout-top';
        contentWrapper.innerHTML = `<h1 id="mainTitle">Blow the Candle!</h1><img src="https://cdn.pixabay.com/animation/2025/01/04/17/59/17-59-28-249_512.gif" alt="Blowing Candles GIF" style="width: 250px; height: 250px; border-radius: 1rem; object-fit: cover;"><p id="messageText">Thank you for making a wish here, i hope you will have the best life babyyyy ♡ ̆̈</p><div class="button-container" style="width: 80%;"><button id="backButton" class="glass-effect">Back to Wishes</button></div>`;
        document.getElementById('backButton').addEventListener('click', renderSecondPage);
    }

    // Halaman 4: Info Card (TIDAK DIUBAH)
    function renderInfoPage() {
        resetWrapperStyle();
        contentWrapper.className = 'content-wrapper layout-center';
        contentWrapper.innerHTML = `<div class="info-card"><div class="info-header"><h1>About My Baby</h1></div><div class="info-body"><table class="info-table"><tbody><tr><td>Name</td><td>Brandon</td></tr><tr><td>Favorite Food</td><td><div style="display: flex; align-items: center; gap: 1rem;">Fried rice with salmon, steak <img src="food.jpg" style="width: 40px; height: 40px; border-radius: 8px; object-fit: cover;"></div></td></tr><tr><td>Favorite Color</td><td><div style="display: flex; align-items: center; gap: 1rem;">Red <img src="color.jpg" style="width: 40px; height: 40px; border-radius: 8px; object-fit: cover;"></div></td></tr><tr><td>Cutest Moment</td><td><div style="display: flex; align-items: center; gap: 1rem;">Whenever we facetime n everytime because my baby is cutee!! <img src="moment.jpg" style="width: 40px; height: 40px; border-radius: 8px; object-fit: cover;"></div></td></tr><tr><td>Does he love me?</td><td><button id="yesBtn" class="choice-button" style="background-color: #700606c9; margin-right: 0.5rem;">Yes</button><button id="noBtn" class="choice-button" style="background-color: #700606c9;">No</button></td></tr></tbody></table></div></div><div class="button-container" style="margin-top: 1rem;"><button id="backButton" class="glass-effect">Back</button></div>`;
        document.getElementById('yesBtn').addEventListener('click', () => showMessage('yes'));
        document.getElementById('noBtn').addEventListener('click', () => showMessage('no'));
        document.getElementById('backButton').addEventListener('click', renderSecondPage);
    }
    
    // --- HALAMAN 5: LOVE NOTES BOOK (DIREVISI) ---
    function renderBookPage() {
        // HAPUS CLASS LAMA DAN PAKSA GAYA BARU DENGAN JAVASCRIPT
        contentWrapper.className = 'layout-center';
        contentWrapper.style.padding = '0rem 1rem';
        contentWrapper.style.justifyContent = 'center';
        contentWrapper.style.alignItems = 'center';
        contentWrapper.style.gap = '1.5rem';

contentWrapper.innerHTML = `
            <div class="book-wrapper">
                <h1 class="book-title">For my sweet babyy</h1>
                <p class="book-subtitle">I just wanna say that..</p>
                <div class="book-container">
                    <div class="book" id="book">
                        <div class="page" id="page-1"><p class="page-text">I love you so much my love, also have a wonderful day i just want you to enjoy your day to its fullest today. I'm so grateful to have you here, i'm sorry my love i can't be there to celebrate your birthday with you. I really wish i could babyy, but i believe we will be able to celebrate our birthdays in person soon enough. I'm sending you lots of virtual kisses, loves, and hugs too okiee ♡</p><img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWthamMzMzk4MG1vZ3FvNng3Z2t6bTdsMW5pd3J6d3ppZHFoOWZzNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LKBXtT5yIRP6E/giphy.gif" class="book-gif"></div>
                        <div class="page flipped" id="page-2"><p class="page-text">You're the sweetest person i've ever known babyy and i can't get over it because you're such a sweetheart. You've grown to an amazing man babyy since the first time we knew each other. It's so amazing to see you becoming more mature and all, i can't describe the feeling with words but i'm so proud of you babyy for everything that you've done and what you've been through.</p><img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzljMXIyeGFsZDNmbWJ6bGhrbm5xZDdxYmk3YmlhenpudXJqbG1jNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9Pv9okDwcVjvWK8vYg/giphy.gif" class="book-gif"></div>
                        <div class="page flipped" id="page-3"><p class="page-text">I have so many wishes for you babyy but what's important is i want you to be able to enjoy your life, to thrive, live a long life, always be soo happy, i wish many kind people will approach you and i want them to surround you with support and warmth. I wish you can be the best version of youself and able to do what you really want. I will always be here by your side to be your support system and i really wanna be your home too babyy. I love you so much with all of my heart babyy (*ᴗ͈ˬᴗ͈)ꕤ*.ﾟ</p><img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmxwcXBsbnhwMWo3aGpwbnI3dWNxM3pqZHdtNjEybzhpZmdraWtrZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/iiEKbVQJOysUjMEU0K/giphy.gif" class="book-gif"></div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="navigation-controls">
            <div class="flip-buttons">
                <button id="prev-btn" class="glass-effect" style="width: auto; padding: 1rem 1.5rem;">← Prev</button>
                <button id="next-btn" class="glass-effect" style="width: auto; padding: 1rem 1.5rem;">Next →</button>
            </div>
            <button id="backButton" class="glass-effect" style="width: 100%;">Back</button>
        </div>
    `;

        let bookCurrentPage = 1;
        const bookTotalPages = 3;
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        function showBookPage(pageNum) {
            for (let i = 1; i <= bookTotalPages; i++) {
                document.getElementById(`page-${i}`).classList.toggle('flipped', i > pageNum);
            }
            prevBtn.disabled = pageNum === 1;
            nextBtn.disabled = pageNum === bookTotalPages;
            prevBtn.style.opacity = prevBtn.disabled ? '0.5' : '1';
            nextBtn.style.opacity = nextBtn.disabled ? '0.5' : '1';
        }
        prevBtn.addEventListener('click', () => { if (bookCurrentPage > 1) { bookCurrentPage--; showBookPage(bookCurrentPage); } });
        nextBtn.addEventListener('click', () => { if (bookCurrentPage < bookTotalPages) { bookCurrentPage++; showBookPage(bookCurrentPage); } });
        showBookPage(bookCurrentPage);
        document.getElementById('backButton').addEventListener('click', renderSecondPage);
    }

    // --- FUNGSI PEMBANTU (TIDAK DIUBAH) ---
    function toggleMusic() {
        if (audio.paused) { audio.play().catch(e => alert("Gagal memutar audio.")); isPlaying = true; } 
        else { audio.pause(); isPlaying = false; }
        if (document.getElementById('musicButton')) {
            document.getElementById('musicButton').textContent = isPlaying ? '⏸️ Pause Music' : 'Play Music';
        }
    }
    function showMessage(option) {
        const overlay = document.getElementById('message-overlay');
        const content = document.getElementById('message-content');
        content.innerHTML = (option === 'yes') ? 'Yes, ofc you do baby. I love you too ( ˘ ³˘ )♡' : 'NO BABYY, YOU LOVE ME AND I LOVE YOU TOO. ₍ᐢ._.ᐢ₎♡';
        overlay.style.display = 'flex';
    }
    function hideMessage() { document.getElementById('message-overlay').style.display = 'none'; }
    document.getElementById('message-overlay').addEventListener('click', (e) => { if (e.target === e.currentTarget) hideMessage(); });
    document.getElementById('close-message-btn').addEventListener('click', hideMessage);
    
    // --- MEMULAI SEMUANYA ---
    renderMainPage();
});