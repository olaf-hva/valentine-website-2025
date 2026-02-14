const CONFIG = {
    valentineName: "盧映彤",
    pageTitle: "Mimi Will You Be My Valentine? 💗🥺",

    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],
        bears: ['💋', '😻', '🐈', '🐈‍⬛']
    },

    questions: {
        first: {
            text: "Will You Be My 專屬情人?",                                    // First interaction
            yesBtn: "Yes",                                             // Text for "Yes" button
            noBtn: "No",                                               // Text for "No" button
            secretAnswer: "我愛你，老公🥹"           // Secret hover message
        },
        second: {
            text: "Mimi how much do u like ur bao bao?",                          // For the love meter
            startText: "This much!",                                   // Text before the percentage
            nextBtn: "Next ❤️"                                         // Text for the next button
        },
        third: {
            text: "Will you be my Valentine on February 14th, 2026? 🌹", // The big question!
            yesBtn: "Yes!",                                             // Text for "Yes" button
            noBtn: "No"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "Mimi loves you to infinity😍🥹💗",  // Shows when they go past 5000%
        high: "我非常非常愛你 😍🤩",              // Shows when they go past 1000%
        normal: "im here just for 小雪寶, 🤣😛🤭"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Yeeyyy mimiiiii, thank you🥹🥹 you made me the happiest guy in the universe 💝❤️‍🔥💗💗",
        message: "Mimi I LOVE YOUUUUU!!",
        emojis: "💗💗💗💖💝❤️❤️‍🔥💞"  // These will bounce around
    },


    colors: {
        backgroundStart: "#f6bdc6",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#ffa0a0",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff6b6b",     // Button color (should stand out against the background)
        buttonHover: "#ff8787",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://olaf-hva.github.io/Megan-Valentine-2026/愛人錯過-告五人.mp3",      // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 