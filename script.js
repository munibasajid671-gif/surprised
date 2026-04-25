document.addEventListener("DOMContentLoaded", () => {
    
    const navButtons = document.querySelectorAll(".nav-btn");
    const pages = document.querySelectorAll(".page");
    const surpriseBtn = document.getElementById("surprise-btn");
    const gallery = document.getElementById("gallery");

    // 1. Navigation Logic
    navButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            navButtons.forEach(btn => btn.classList.remove("active"));
            pages.forEach(page => page.classList.remove("active"));
            
            const target = button.getAttribute("data-target");
            button.classList.add("active");
            document.getElementById(target).classList.add("active");
        });
    });

    // 2. Birthday Surprise Images Logic
    // These are carefully picked aesthetic birthday visuals!
    const birthdayImages = [
        "photo1 .jpeg", // Romantic balloons
        "photo2 .jpeg", // Sparkler / Celebration
        "photo3 .jpeg"  // Birthday cake glowing
    ];

    surpriseBtn.addEventListener("click", () => {
        gallery.innerHTML = ""; 
        surpriseBtn.innerText = "Opening Box... 🎁";
        surpriseBtn.disabled = true;

        setTimeout(() => {
            birthdayImages.forEach((src) => {
                const img = document.createElement("img");
                img.src = src;
                img.classList.add("gallery-img");
                img.alt = "Surprise Birthday Visual";
                gallery.appendChild(img);
            });
            // 2. Add the custom thank you text directly below the images
            const thankYouMsg = document.createElement("p");
            thankYouMsg.innerText = "Thank you for being in my life! ❤️";
            thankYouMsg.classList.add("thank-you-text");
            //  Append it after the images
            gallery.after(thankYouMsg);
            
            surpriseBtn.innerText = "Surprise Revealed! ✨";
            
            // Pro Tip: Feel free to change the 'birthdayImages' array links above 
            // to actual pictures of you and your husband!
        }, 1000);
    });
});
    // 3. Floating Hearts Background Effect
    const heartsContainer = document.getElementById("hearts-container");

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        
        // Randomly pick a heart style
        const hearts = ["❤️", "💖", "💕", "💘", "🌸"];
        heart.innerText = hearts[Math.floor(Math.random() * hearts.length)];
        
        // Randomize position, size, and speed
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 4 + "s"; // Between 4 and 7 seconds
        heart.style.fontSize = Math.random() * 15 + 15 + "px"; // Between 15px and 30px
        
        heartsContainer.appendChild(heart);

        // Remove the heart after it floats off the screen to keep the page fast
        setTimeout(() => {
            heart.remove();
        }, 7000);
    }

    // Create a new heart every 300 milliseconds
    setInterval(createHeart, 150);
        // 4. Digital Love Jar Logic
    const loveJar = document.getElementById("love-jar");
    const loveNote = document.getElementById("love-note");
    const noteText = document.getElementById("note-text");

    // Add as many reasons as you want here!
    const reasons = [
        "I love how you always know how to make me laugh! 😄",
        "I love your kind and caring heart. ❤️",
        "I love how hard you work for our future. 💼✨",
        "I love your warm, comforting hugs that feel like home. 🤗",
        "I love the way your eyes light up when you smile. 👀💖",
        "I love how safe and protected I feel when I am with you. 🛡️",
        "I love that you are not just my husband, but my best friend. 👫"
    ];

    let lastIndex = -1;

    loveJar.addEventListener("click", () => {
        // Remove active class to reset animation
        loveNote.classList.remove("show");
        
        // Pick a random reason that isn't the exact same as the last one
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * reasons.length);
        } while (randomIndex === lastIndex && reasons.length > 1);
        
        lastIndex = randomIndex;

        // Small delay to let the reset animation happen
        setTimeout(() => {
            noteText.innerText = reasons[randomIndex];
            loveNote.classList.add("show");
        }, 100);
    });


        // 5. Interactive Balloon Popping Logic
    const balloonContainer = document.getElementById("balloon-container");
    const colors = ["#ff595e", "#ffca3a", "#8ac926", "#1982c4", "#6a4c93", "#ff924c"];

    // Generate 5 balloons
    for (let i = 0; i < 5; i++) {
        const balloon = document.createElement("div");
        balloon.classList.add("balloon");
        
        // Random color and slight delay so they don't sway at the exact same time
        balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        balloon.style.animationDelay = (Math.random() * 2) + "s";
        
        // Click to pop event
        balloon.addEventListener("click", () => {
            if (!balloon.classList.contains("popped")) {
                balloon.classList.add("popped");
                
                // Play a tiny system pop beep sound (Optional)
                try {
                    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
                    const oscillator = audioCtx.createOscillator();
                    const gainNode = audioCtx.createGain();
                    oscillator.connect(gainNode);
                    gainNode.connect(audioCtx.destination);
                    oscillator.type = "sine";
                    oscillator.frequency.setValueAtTime(500, audioCtx.currentTime);
                    gainNode.gain.setValueAtTime(0.2, audioCtx.currentTime);
                    oscillator.start();
                    oscillator.stop(audioCtx.currentTime + 0.1);
                } catch(e) { /* Fallback if browser blocks audio */ }
                
                // Remove the popped balloon from the site after animation completes
                setTimeout(() => {
                    balloon.remove();
                }, 200);
            }
        });
        
        balloonContainer.appendChild(balloon);
    }
    // 6. Interactive Cake Exploding Logic
    const birthdayCake = document.getElementById("birthday-cake");
    const cakeFlame = document.getElementById("cake-flame");

    birthdayCake.addEventListener("click", () => {
        // 1. Extinguish the flame
        cakeFlame.classList.add("off");

        // 2. Explode confetti from the center of the cake!
        const rect = birthdayCake.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;

        // Generate 35 massive confetti particles
        for (let k = 0; k < 35; k++) {
            const cakeConfetti = document.createElement("div");
            cakeConfetti.classList.add("confetti"); // Reuses the confetti animation from the balloons!

            const colors = ["#ff595e", "#ffca3a", "#8ac926", "#1982c4", "#ff007f", "#00ffff"];
            cakeConfetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

            cakeConfetti.style.left = x + "px";
            cakeConfetti.style.top = y + "px";
            cakeConfetti.style.position = "fixed";

            // Set random wide-burst outward trajectory
            const angle = Math.random() * Math.PI * 2;
            const velocity = 80 + Math.random() * 150; // Stronger burst than balloons
            cakeConfetti.style.setProperty('--dx', Math.cos(angle) * velocity + "px");
            cakeConfetti.style.setProperty('--dy', Math.sin(angle) * velocity + "px");
            cakeConfetti.style.setProperty('--rot', (Math.random() * 360) + "deg");

            document.body.appendChild(cakeConfetti);

            // Clean up confetti after animation completes
            setTimeout(() => cakeConfetti.remove(), 800);
        }

        // Re-ignite the candle after 3 seconds so he can do it again!
        setTimeout(() => {
            cakeFlame.classList.remove("off");
        }, 3000);
    });
        // 7. Secret Password Lock Logic
    const lockScreen = document.getElementById("lock-screen");
    const passwordInput = document.getElementById("password-input");
    const unlockBtn = document.getElementById("unlock-btn");
    const errorMsg = document.getElementById("error-msg");

    // SET YOUR SECRET PASSWORD HERE!
    const secretPassword = "Lado"; 

        function checkPassword() {
        const bgMusic = document.getElementById("bg-music");

        if (passwordInput.value === secretPassword) {
            // Fade out the lock screen
            lockScreen.style.opacity = "0";
            
            // Play the background music!
            if (bgMusic) {
                bgMusic.play().catch(error => {
                    console.log("Autoplay was prevented, waiting for user click.");
                });
            }
            
            // Remove lock screen from display after the fade
            setTimeout(() => {
                lockScreen.style.display = "none";
            }, 500);
        } else {
            errorMsg.style.display = "block";
            passwordInput.value = ""; 
        }
    }

    // function checkPassword() {
    //     if (passwordInput.value === secretPassword) {
    //         // Fade out the lock screen
    //         lockScreen.style.opacity = "0";
            
    //         // Remove it from the DOM after the fade so the site becomes clickable
    //         setTimeout(() => {
    //             lockScreen.style.display = "none";
    //         }, 500);
    //     } else {
    //         // Show error message if typed incorrectly
    //         errorMsg.style.display = "block";
    //         passwordInput.value = ""; // Clear input
    //     }
    // }

    // Trigger on button click
    unlockBtn.addEventListener("click", checkPassword);

    // Trigger on pressing "Enter" key on keyboard
    passwordInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            checkPassword();
        }
    });
    // 8. Animated "Open When" Envelopes Logic
    const envelopes = document.querySelectorAll(".envelope");
    const letterModal = document.getElementById("letter-modal");
    const modalText = document.getElementById("modal-text");
    const closeModal = document.getElementById("close-modal");

    // The custom apology and messages
    const envelopeMessages = {
        apology: "Forgive me, my king! 🥺 I know I am 5 days late to wish you on your special day. But my love for you is never late. I promise to make it up to you with extra hugs and kisses for the rest of the year! ❤️",
        love: "Just a small reminder that you are the absolute best thing that has ever happened to me. Even if I forget dates sometimes, I never forget how lucky I am to have you as my husband! 🥰✨",
        future: "I promise that from this day forward, I will be the one keeping track of all your special moments. I love you endlessly, through every late and early day! 💖🔐"
    };
 const photoFrame = document.getElementById("photo-frame");
    envelopes.forEach(envelope => {
        envelope.addEventListener("click", () => {
            const messageType = envelope.getAttribute("data-message");
            modalText.innerText = envelopeMessages[messageType];
            letterModal.style.display = "flex";
        // Show the photo ONLY for the apology letter
            if (messageType === "apology") {
                photoFrame.style.display = "block";
            } else {
                photoFrame.style.display = "none";
            }
            
            letterModal.style.display = "flex";
        });
    });

    closeModal.addEventListener("click", () => {
        letterModal.style.display = "none";
    });

    // Close the modal if clicking outside the paper box
    window.addEventListener("click", (e) => {
        if (e.target === letterModal) {
            letterModal.style.display = "none";
        }
    });





