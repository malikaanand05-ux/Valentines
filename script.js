// ✅ This wraps your config so it's valid JavaScript
const CONFIG = {
  // Basic Information
  valentineName: "Shivam",
  pageTitle: "Will You Be My Valentine? 💝",

  // Floating Background Elements
  floatingEmojis: {
    hearts: ["❤️", "💖", "💝", "💗", "💕"],
    bears: ["🧸", "🐻"]
  },

  // Questions and Buttons
  questions: {
    first: {
      text: "Do you like me?",
      yesBtn: "Yes",
      noBtn: "No",
      secretAnswer: "I don't like you, I love you 😌"
    },
    second: {
      text: "How much do you love me?",
      startText: "This much!",
      nextBtn: "Next ❤️"
    },
    third: {
      text: "Will you be my Valentine...?",
      yesBtn: "Yes!",
      noBtn: "No"
    }
  },

  // Love Meter Messages
  loveMessages: {
    extreme: "WOOOOW You love me that much 😳💖",
    high: "To infinity and beyond! 🚀💝",
    normal: "And beyond! 🥰"
  },

  // Final Celebration
  celebration: {
    title: "Yay! I'm the luckiest person...",
    message: "Now come get your gift...",
    emojis: "🎁💝🤗💋❤️💞"
  },

  // Website Colors
  colors: {
    backgroundStart: "#ffafbd",
    backgroundEnd: "#ffc3a0",
    buttonBackground: "#ff6b6b",
    buttonHover: "#ff8787",
    textColor: "#ff4757"
  },

  // Animation Settings
  animations: {
    floatDuration: "15s",
    floatDistance: "50px",
    bounceSpeed: "0.5s",
    heartExplosionSize: 1.5
  },

  // Music Settings
  music: {
    enabled: true,
    autoplay: false, // iPhone blocks autoplay; user must tap
    musicUrl: "",    // you can add an mp3 link later
    startText: "🎵 Play Music",
    stopText: "🔇 Stop Music",
    volume: 0.5
  }
};

// ✅ Minimum code to show text on your page (so it's not blank)
document.addEventListener("DOMContentLoaded", () => {
  // Set browser tab title
  document.title = CONFIG.pageTitle;

  // Set main title on the page
  const titleEl = document.getElementById("valentineTitle");
  if (titleEl) titleEl.textContent = CONFIG.pageTitle;

  // Set first question text
  const q1 = document.getElementById("question1Text");
  if (q1) q1.textContent = CONFIG.questions.first.text;
});
