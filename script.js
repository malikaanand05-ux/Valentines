const CONFIG = {
  name: "Shivam",

  celebration: {
    title: "YAYYYY 💖",
    message: "Now come get your gift 😘",
    emojis: "🎁💝🤗💋❤️💞"
  },

  loveMessages: {
    extreme: "WOOOW 😳 THAT MUCH?! 💕",
    high: "To infinity and beyond! 🚀💝",
    normal: "Still cute 🥰"
  }
};

const $ = (id) => document.getElementById(id);

// BUTTON BEHAVIOR
function moveButton(btn) {
  const parent = btn.parentElement;
  const maxX = parent.clientWidth - btn.offsetWidth;
  const maxY = parent.clientHeight - btn.offsetHeight;

  btn.style.position = "relative";
  btn.style.left = Math.random() * maxX + "px";
  btn.style.top = Math.random() * maxY + "px";
}

function showOnly(id) {
  ["question1", "question2", "question3", "celebration"].forEach(
    q => $(q)?.classList.add("hidden")
  );
  $(id)?.classList.remove("hidden");
}

// INIT
document.addEventListener("DOMContentLoaded", () => {

  // TITLE
  const headline = `${CONFIG.name}, will you be my Valentine? 💝`;
  document.title = headline;
  $("valentineTitle").textContent = headline;

  // Q1
  $("yesBtn1").onclick = () => showOnly("question2");
  $("noBtn1").onclick = function () { moveButton(this); };
  $("secretAnswerBtn").onclick = () => showOnly("question2");

  // Q2
  const meter = $("loveMeter");
  meter.oninput = () => {
    const v = meter.value;
    $("loveValue").textContent = v;

    $("extraLove").classList.remove("hidden");
    $("extraLove").textContent =
      v > 9000 ? CONFIG.loveMessages.extreme :
      v > 3000 ? CONFIG.loveMessages.high :
      CONFIG.loveMessages.normal;
  };

  $("nextBtn").onclick = () => showOnly("question3");

  // Q3
  $("yesBtn3").onclick = () => {
    showOnly("celebration");
    $("celebrationTitle").textContent = CONFIG.celebration.title;
    $("celebrationMessage").textContent = CONFIG.celebration.message;
    $("celebrationEmojis").textContent = CONFIG.celebration.emojis;
  };

  $("noBtn3").onclick = function () { moveButton(this); };

});
