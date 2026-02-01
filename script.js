// ================= CONFIG =================
const CONFIG = {
  valentineName: "Shivam",

  questions: {
    first: {
      text: "Do you like me?",
      yesBtn: "Yes ❤️",
      noBtn: "No 🙈",
      secretAnswer: "I don't like you… I love you 😌"
    },
    second: {
      text: "How much do you love me?",
      startText: "This much!",
      nextBtn: "Next ❤️"
    },
    third: {
      text: "Will you be my Valentine?",
      yesBtn: "YES!!! 💖",
      noBtn: "No 😭"
    }
  },

  loveMessages: {
    extreme: "WOOOW 😳 That much?! 💕",
    high: "To infinity and beyond! 🚀💝",
    normal: "Still cute 🥰"
  },

  celebration: {
    title: "YAYYYYY 💖",
    message: "Now come get your gift 😘",
    emojis: "🎁💝🤗💋❤️💞"
  }
};

// ================= HELPERS =================
const $ = (id) => document.getElementById(id);

// ================= BUTTON ACTIONS =================
window.showNextQuestion = function (num) {
  $("question1")?.classList.add("hidden");
  $("question2")?.classList.add("hidden");
  $("question3")?.classList.add("hidden");

  $("question" + num)?.classList.remove("hidden");
};

window.moveButton = function (btn) {
  if (!btn || !btn.parentElement) return;

  const parent = btn.parentElement;
  const maxX = parent.clientWidth - btn.offsetWidth;
  const maxY = parent.clientHeight - btn.offsetHeight;

  btn.style.position = "relative";
  btn.style.left = Math.random() * maxX + "px";
  btn.style.top = Math.random() * maxY + "px";
};

window.celebrate = function () {
  $("question3")?.classList.add("hidden");
  $("celebration")?.classList.remove("hidden");

  $("celebrationTitle").textContent = CONFIG.celebration.title;
  $("celebrationMessage").textContent = CONFIG.celebration.message;
  $("celebrationEmojis").textContent = CONFIG.celebration.emojis;
};

// ================= INIT =================
document.addEventListener("DOMContentLoaded", () => {

  // 🔥 MAIN TITLE (WITH SHIVAM)
  const headline = `${CONFIG.valentineName}, will you be my Valentine? 💝`;
  document.title = headline;
  $("valentineTitle").textContent = headline;

  // ===== QUESTION 1 =====
  $("question1Text").textContent = CONFIG.questions.first.text;
  $("yesBtn1").textContent = CONFIG.questions.first.yesBtn;
  $("noBtn1").textContent = CONFIG.questions.first.noBtn;
  $("secretAnswerBtn").textContent = CONFIG.questions.first.secretAnswer;

  // ===== QUESTION 2 =====
  $("question2Text").textContent = CONFIG.questions.second.text;
  $("startText").textContent = CONFIG.questions.second.startText;
  $("nextBtn").textContent = CONFIG.questions.second.nextBtn;

  const meter = $("loveMeter");
  if (meter) {
    meter.addEventListener("input", () => {
      const value = Number(meter.value);
      $("loveValue").textContent = value;

      const extra = $("extraLove");
      extra.classList.remove("hidden");

      if (value > 9000) extra.textContent = CONFIG.loveMessages.extreme;
      else if (value > 3000) extra.textContent = CONFIG.loveMessages.high;
      else extra.textContent = CONFIG.loveMessages.normal;
    });
  }

  // ===== QUESTION 3 =====
  $("question3Text").textContent = CONFIG.questions.third.text;
  $("yesBtn3").textContent = CONFIG.questions.third.yesBtn;
  $("noBtn3").textContent = CONFIG.questions.third.noBtn;

});
