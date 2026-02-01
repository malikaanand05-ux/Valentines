// ===== CONFIG =====
const CONFIG = {
  valentineName: "Shivam",
  pageTitle: "Will You Be My Valentine? 💝",

  floatingEmojis: {
    hearts: ["❤️", "💖", "💝", "💗", "💕"],
    bears: ["🧸", "🐻"]
  },

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

  loveMessages: {
    extreme: "WOOOOW You love me that much 😳💖",
    high: "To infinity and beyond! 🚀💝",
    normal: "And beyond! 🥰"
  },

  celebration: {
    title: "Yay! I'm the luckiest person...",
    message: "Now come get your gift...",
    emojis: "🎁💝🤗💋❤️💞"
  },

  music: {
    enabled: true,
    autoplay: false, // iPhone blocks autoplay; user must tap
    musicUrl: "",    // add an mp3 URL later if you want
    startText: "🎵 Play Music",
    stopText: "🔇 Stop Music",
    volume: 0.5
  }
};

// ===== HELPERS =====
function $(id) { return document.getElementById(id); }

// ===== FUNCTIONS your HTML calls =====
window.showNextQuestion = function (num) {
  const q1 = $("question1");
  const q2 = $("question2");
  const q3 = $("question3");

  if (num === 2) { q1?.classList.add("hidden"); q2?.classList.remove("hidden"); }
  if (num === 3) { q2?.classList.add("hidden"); q3?.classList.remove("hidden"); }
};

window.moveButton = function (btn) {
  if (!btn || !btn.parentElement) return;

  const parent = btn.parentElement;

  const maxX = Math.max(0, parent.clientWidth - btn.offsetWidth);
  const maxY = Math.max(0, parent.clientHeight - btn.offsetHeight);

  btn.style.position = "relative";
  btn.style.left = Math.floor(Math.random() * (maxX + 1)) + "px";
  btn.style.top  = Math.floor(Math.random() * (maxY + 1)) + "px";
};

window.celebrate = function () {
  $("question3")?.classList.add("hidden");
  $("celebration")?.classList.remove("hidden");

  if ($("celebrationTitle")) $("celebrationTitle").textContent = CONFIG.celebration.title;
  if ($("celebrationMessage")) $("celebrationMessage").textContent = CONFIG.celebration.message;
  if ($("celebrationEmojis")) $("celebrationEmojis").textContent = CONFIG.celebration.emojis;
};

// ===== INIT =====
document.addEventListener("DOMContentLoaded", () => {
  // Show Shivam in the main title:
  // Example: "Shivam, will you be my Valentine? 💝"
  const headline = `${CONFIG.valentineName}, ${CONFIG.pageTitle}`;
  document.title = headline;
  if ($("valentineTitle")) $("valentineTitle").textContent = headline;

  // Question 1
  if ($("question1Text")) $("question1Text").textContent = CONFIG.questions.first.text;
  if ($("yesBtn1")) $("yesBtn1").textContent = CONFIG.questions.first.yesBtn;
  if ($("noBtn1")) $("noBtn1").textContent = CONFIG.questions.first.noBtn;
  if ($("secretAnswerBtn")) $("secretAnswerBtn").textContent = CONFIG.questions.first.secretAnswer;

  // Question 2
  if ($("question2Text")) $("question2Text").textContent = CONFIG.questions.second.text;
  if ($("startText")) $("startText").textContent = CONFIG.questions.second.startText;
  if ($("nextBtn")) $("nextBtn").textContent = CONFIG.questions.second.nextBtn;

  // Love meter
  const meter = $("loveMeter");
  if (meter) {
    const update = () => {
      const val = Number(meter.value);
      if ($("loveValue")) $("loveValue").textContent = String(val);

      const extra = $("extraLove");
      if (extra) {
        extra.classList.remove("hidden");
        extra.textContent =
          val > 9000 ? CONFIG.loveMessages.extreme :
          val > 3000 ? CONFIG.loveMessages.high :
          CONFIG.loveMessages.normal;
      }
    };
    meter.addEventListener("input", update);
    update();
  }

  // Question 3
  if ($("question3Text")) $("question3Text").textContent = CONFIG.questions.third.text;
  if ($("yesBtn3")) $("yesBtn3").textContent = CONFIG.questions.third.yesBtn;
  if ($("noBtn3")) $("noBtn3").textContent = CONFIG.questions.third.noBtn;

  // Music button (works even if no URL)
  const musicBtn = $("musicToggle");
  const audio = $("bgMusic");
  const source = $("musicSource");

  if (musicBtn && audio) {
    musicBtn.textContent = CONFIG.music.startText;
    audio.volume = CONFIG.music.volume;

    if (source && CONFIG.music.musicUrl) {
      source.src = CONFIG.music.musicUrl;
      audio.load();
    }

    musicBtn.addEventListener("click", async () => {
      try {
        if (audio.paused) {
          await audio.play();
          musicBtn.textContent = CONFIG.music.stopText;
        } else {
          audio.pause();
          musicBtn.textContent = CONFIG.music.startText;
        }
      } catch {
        alert("Add a valid mp3 URL in script.js (CONFIG.music.musicUrl) if you want music.");
      }
    });
  }
});
