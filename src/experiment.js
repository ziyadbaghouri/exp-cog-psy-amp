// ─────────────────────────────────────────────
//  i18n dictionary  –  add any language here
// ─────────────────────────────────────────────
const STRINGS = {
  en: {
    // ── Language selection ──────────────────
    lang_prompt: "Please select your preferred language to continue.",

    // ── Preload ─────────────────────────────
    loading_msg:  "<p>Loading, please wait...</p>",
    loading_error: "<p>Failed to load some images. Check file paths.</p>",

    // ── Welcome ─────────────────────────────
    welcome_title:    "Welcome",
    welcome_p1:       "Thank you for taking the time to participate in this study.",
    welcome_duration: "The experiment takes approximately <b>20 minutes</b>. Please complete it in a quiet place where you can stay focused.",
    welcome_anon:     "All responses are <b>fully anonymous</b> and will only be used for academic research.",
    welcome_consent:  "I am <b>18 years or older</b> and I voluntarily agree to participate in this study.",

    // ── Instructions ────────────────────────
    instructions_title:    "Task Instructions",
    instructions_read:     "Please read the instructions carefully before starting.",
    instructions_warning:  "⚠️ This task must be completed on a <b>laptop or desktop computer</b>. Please do not use a phone or tablet.",
    instructions_li1:      "You will see a series of <b>inkblots</b>.",
    instructions_li2:      "You have to decide whether each inkblot looks <b style=\"color:#7CFF9E;\">Pleasant</b> or <b style=\"color:#FF8A8A;\">Unpleasant</b>.",
    instructions_li3:      "Respond based on your <b>first impression</b>.",
    instructions_li4:      "Respond naturally.",

    // ── Response buttons ────────────────────
    resp_pleasant:   "Pleasant",
    resp_unpleasant: "Unpleasant",

    // ── Break ───────────────────────────────
    break_msg:      "<h2>You may take a short break.</h2>",
    break_continue: "Continue",

    // ── Questionnaire ───────────────────────
    q_title:       "Please answer the following questions.",
    q_age:         "Your Age:",
    q_gender:      "Your Gender:",
    q_g_female:    "Female",
    q_g_male:      "Male",
    q_g_nonbinary: "Non-binary",
    q_g_prefer:    "Prefer not to say",
    q_wolf:        "How positively do you feel about <b>wolves</b>?",
    q_dog:         "How positively do you feel about <b>dogs</b>?",
    q_fox:         "How positively do you feel about <b>foxes</b>?",
    q_scale_1:     "Very negative",
    q_scale_2:     "Negative",
    q_scale_3:     "Slightly negative",
    q_scale_4:     "Neutral",
    q_scale_5:     "Slightly positive",
    q_scale_6:     "Positive",
    q_scale_7:     "Very positive",
    q_select:      "Select",
    q_dog_owner:   "Do you currently own a dog?",
    q_yes:         "Yes",
    q_no:          "No",

    // ── Buttons (shared) ────────────────────
    btn_start:  "Start Experiment",
    btn_begin:  "Begin",
    btn_submit: "Submit",

    // ── Debrief ─────────────────────────────
    debrief_title:    "Thank You for Your Participation!",
    debrief_recorded: "Your responses have been successfully recorded. We truly appreciate your time and contribution.",
    debrief_about:    "About the Study",
    debrief_body:     "This experiment investigates how automatic impressions influence judgments. You were shown brief images (animals) followed by inkblots, and asked to evaluate the inkblots. The goal is to understand how prior stimuli can unconsciously shape perceptions, even when they are not directly related to the task.",
    debrief_amp:      "This method is based on the <b>Affective Misattribution Procedure (AMP)</b>, which is commonly used to study implicit attitudes.",
    debrief_contact:  "Contact",
    debrief_email:    "If you have any questions about this study, please contact:<br><b>mael.theubet@unil.ch</b>",
  },

  fr: {
    // ── Language selection ──────────────────
    lang_prompt: "Veuillez sélectionner votre langue pour continuer.",

    // ── Preload ─────────────────────────────
    loading_msg:  "<p>Chargement, veuillez patienter...</p>",
    loading_error: "<p>Certaines images n'ont pas pu être chargées. Vérifiez les chemins.</p>",

    // ── Welcome ─────────────────────────────
    welcome_title:    "Bienvenue",
    welcome_p1:       "Merci de prendre le temps de participer à cette étude.",
    welcome_duration: "L'expérience dure environ <b>20 minutes</b>. Merci de la réaliser dans un endroit calme où vous pouvez rester concentré(e).",
    welcome_anon:     "Toutes vos réponses sont <b>entièrement anonymes</b> et ne seront utilisées qu'à des fins de recherche académique.",
    welcome_consent:  "J'ai <b>18 ans ou plus</b> et j'accepte volontairement de participer à cette étude.",

    // ── Instructions ────────────────────────
    instructions_title:    "Consignes",
    instructions_read:     "Veuillez lire attentivement les consignes avant de commencer.",
    instructions_warning:  "⚠️ Cette tâche doit être réalisée sur un <b>ordinateur portable ou de bureau</b>. Merci de ne pas utiliser un téléphone ou une tablette.",
    instructions_li1:      "Vous verrez une série de <b>taches d'encre</b>.",
    instructions_li2:      "Vous devez décider si chaque tache vous semble <b>Agréable</b> ou <b>Désagréable</b>.",
    instructions_li3:      "Répondez selon votre <b>première impression</b>.",
    instructions_li4:      "Répondez naturellement.",

    // ── Response buttons ────────────────────
    resp_pleasant:   "Agréable",
    resp_unpleasant: "Désagréable",

    // ── Break ───────────────────────────────
    break_msg:      "<h2>Vous pouvez faire une courte pause.</h2>",
    break_continue: "Continuer",

    // ── Questionnaire ───────────────────────
    q_title:       "Veuillez répondre aux questions suivantes.",
    q_age:         "Votre âge :",
    q_gender:      "Votre genre :",
    q_g_female:    "Féminin",
    q_g_male:      "Masculin",
    q_g_nonbinary: "Non-binaire",
    q_g_prefer:    "Préfère ne pas répondre",
    q_wolf:        "Quelle est votre attitude envers les <b>loups</b> ?",
    q_dog:         "Quelle est votre attitude envers les <b>chiens</b> ?",
    q_fox:         "Quelle est votre attitude envers les <b>renards</b> ?",
    q_scale_1:     "Très négative",
    q_scale_2:     "Négative",
    q_scale_3:     "Légèrement négative",
    q_scale_4:     "Neutre",
    q_scale_5:     "Légèrement positive",
    q_scale_6:     "Positive",
    q_scale_7:     "Très positive",
    q_select:      "Sélectionner",
    q_dog_owner:   "Avez-vous actuellement un chien ?",
    q_yes:         "Oui",
    q_no:          "Non",

    // ── Buttons (shared) ────────────────────
    btn_start:  "Commencer l'expérience",
    btn_begin:  "Commencer",
    btn_submit: "Envoyer",

    // ── Debrief ─────────────────────────────
    debrief_title:    "Merci pour votre participation !",
    debrief_recorded: "Vos réponses ont bien été enregistrées. Nous vous remercions sincèrement de votre temps et de votre contribution.",
    debrief_about:    "À propos de l'étude",
    debrief_body:     "Cette expérience examine comment les impressions automatiques influencent les jugements. Vous avez vu brièvement des images (animaux) suivies de taches d'encre, et on vous a demandé d'évaluer ces taches. L'objectif est de comprendre comment des stimuli préalables peuvent influencer les perceptions de façon inconsciente, même sans lien direct avec la tâche.",
    debrief_amp:      "Cette méthode est basée sur la <b>Procédure d'Attribution Affective (AMP)</b>, couramment utilisée pour étudier les attitudes implicites.",
    debrief_contact:  "Contact",
    debrief_email:    "Pour toute question sur cette étude, veuillez contacter :<br><b>mael.theubet@unil.ch</b>",
  }
};

// ─────────────────────────────────────────────
//  t() helper  –  use everywhere instead of
//  hard-coded strings
// ─────────────────────────────────────────────
function t(key) {
  return (STRINGS[lang] && STRINGS[lang][key]) ?? STRINGS["en"][key] ?? key;
}

// ─────────────────────────────────────────────
//  jsPsych init
// ─────────────────────────────────────────────
const jsPsych = initJsPsych({
  on_finish: function() {

    const allTrials = jsPsych.data.get().values();
    console.log("ALL TRIALS:", allTrials);

    const demo = jsPsych.data.get().filter({trial_type: "survey-html-form"}).values()[0];
    console.log("DEMO:", demo);

    const amp_responses = jsPsych.data.get().filter({trial_type: "html-button-response"})
      .values()
      .filter(trial => trial.prime_category !== undefined && trial.prime_image !== undefined);
    console.log("AMP RESPONSES:", amp_responses);

    if (!demo) {
      console.error("demo is undefined - questionnaire trial not found");
      return;
    }

    const image_columns = {};
    for (const trial of amp_responses) {
      const key = trial.prime_image;
      const value = trial.response === 0 ? "P" : "U";
      image_columns[key] = value;
    }

    const payload = {
      participant_id: participant_id,
      age: demo.response.age,
      gender: demo.response.gender,
      wolf_attitude: demo.response.att_wolf,
      dog_attitude: demo.response.att_dog,
      fox_attitude: demo.response.att_fox,
      dog_owner: demo.response.dog_owner,
      ...image_columns
    };

    console.log("PAYLOAD:", payload);

    fetch("https://script.google.com/macros/s/AKfycbzTdvxPABMPYrvuQkfs7SuRc7fJxwUqWuDaIQ7gN4fSiSASGJyEj4lGr7kxcLFHsTg/exec", {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify(payload)
    });
  }
});

const participant_id = jsPsych.randomization.randomID(8);
jsPsych.data.addProperties({ participant_id: participant_id });

let lang = "en"; // default – set by language_choice below
let timeline = [];

// ─────────────────────────────────────────────
//  Preload
// ─────────────────────────────────────────────
const images_to_preload = [];
for (let i = 1; i <= 30; i++) {
  images_to_preload.push(`assets/Chien/Chien1.${i}.png`);
  images_to_preload.push(`assets/Loup/Loup1.${i}.png`);
  images_to_preload.push(`assets/Renard/Renard1.${i}.png`);
  images_to_preload.push(`assets/inkblot/inkblot_${String(i).padStart(2,'0')}.png`);
}

const safe_images = images_to_preload.filter(p => typeof p === 'string');

const preload = {
  type: jsPsychPreload,
  images: safe_images,
  show_progress_bar: true,
  message: () => t("loading_msg"),
  error_message: () => t("loading_error"),
  show_detailed_errors: true
};

timeline.push(preload);

// ─────────────────────────────────────────────
//  Language selection
// ─────────────────────────────────────────────
const language_choice = {
  type: jsPsychHtmlButtonResponse,
  stimulus: () => `
    <video autoplay muted loop id="bg-video">
      <source src="assets/background.mp4" type="video/mp4">
    </video>
    <div class="welcome-box">
      <h3>${t("lang_prompt")}</h3>
    </div>
  `,
  choices: ["English", "Français"],
  on_finish: function(data) {
    lang = data.response === 0 ? "en" : "fr";
  }
};

timeline.push(language_choice);

// ─────────────────────────────────────────────
//  Welcome
// ─────────────────────────────────────────────
const welcome = {
  type: jsPsychHtmlButtonResponse,
  stimulus: () => `
    <video autoplay muted loop id="bg-video">
      <source src="assets/background.mp4" type="video/mp4">
    </video>
    <div class="welcome-box">
      <h1>${t("welcome_title")}</h1>
      <p>${t("welcome_p1")}</p>
      <p>${t("welcome_duration")}</p>
      <p>${t("welcome_anon")}</p>
      <label style="display:block; margin-top:20px;">
        <input type="checkbox" id="consent-check">
        ${t("welcome_consent")}
      </label>
    </div>
  `,
  choices: () => [t("btn_start")],
  button_html: (choice) => `<button class="start-btn" disabled>${choice}</button>`,
  on_load: () => {
    const checkbox = document.getElementById("consent-check");
    const button   = document.querySelector(".start-btn");
    checkbox.addEventListener("change", () => {
      button.disabled = !checkbox.checked;
    });
  }
};

timeline.push(welcome);

// ─────────────────────────────────────────────
//  Instructions
// ─────────────────────────────────────────────
const instructions = {
  type: jsPsychHtmlButtonResponse,
  stimulus: () => `
    <video autoplay muted loop id="bg-video">
      <source src="assets/background.mp4" type="video/mp4">
    </video>
    <div class="welcome-box">
      <h1>${t("instructions_title")}</h1>
      <p>${t("instructions_read")}</p>
      <p style="color:#FFD580; margin-top:10px;">${t("instructions_warning")}</p>
      <ul style="text-align:left; line-height:1.8; margin-top:20px;">
        <li>${t("instructions_li1")}</li>
        <li>${t("instructions_li2")}</li>
        <li>${t("instructions_li3")}</li>
        <li>${t("instructions_li4")}</li>
      </ul>
    </div>
  `,
  choices: () => [t("btn_begin")],
  on_finish: () => {
    const elem = document.documentElement;
    if      (elem.requestFullscreen)       elem.requestFullscreen();
    else if (elem.webkitRequestFullscreen) elem.webkitRequestFullscreen();
    else if (elem.msRequestFullscreen)     elem.msRequestFullscreen();
  }
};

timeline.push(instructions);

// ─────────────────────────────────────────────
//  AMP trial components
// ─────────────────────────────────────────────
const fixation = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: `<div class="amp-container"><div class="fixation-cross">+</div></div>`,
  choices: "NO_KEYS",
  trial_duration: () => Math.floor(Math.random() * (1000 - 500 + 1)) + 500
};

const blank750 = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: '',
  choices: "NO_KEYS",
  trial_duration: 750
};

const prime = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: function() {
    const src = jsPsych.evaluateTimelineVariable('prime');
    return `<div class="amp-container"><img src="${src}" class="prime-img"></div>`;
  },
  choices: "NO_KEYS",
  trial_duration: 100
};

const mask = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: `<div class="amp-container"><img src="assets/mask.png" class="mask-image"></div>`,
  choices: "NO_KEYS",
  trial_duration: 125
};

const blank75 = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: '',
  choices: "NO_KEYS",
  trial_duration: 125
};

const inkblot = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: function() {
    const src = jsPsych.evaluateTimelineVariable('ink');
    return `<div class="amp-container"><img src="${src}" class="inkblot-img"></div>`;
  },
  choices: "NO_KEYS",
  trial_duration: 250
};

const response = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `<div style="display:flex; flex-direction:column; align-items:center; justify-content:center; gap:20px;"></div>`,
  choices: () => [t("resp_pleasant"), t("resp_unpleasant")],
  button_html: (choice, i) =>
    `<button style="font-size:18px; padding:14px 36px; border-radius:10px; border:black solid 2px; cursor:pointer; color:black; font-weight:bold; margin:0 12px;">${choice}</button>`,
  data: {
    prime_category: jsPsych.timelineVariable('category'),
    prime_image: jsPsych.timelineVariable('prime')
  },
  on_finish: function(data) {
    data.prime_image = data.prime_image.replace(/^.*\//, '').replace('.png', '');
  }
};

const amp_trial = {
  timeline: [fixation, blank750, prime, mask, blank75, inkblot, response]
};

// ─────────────────────────────────────────────
//  Build stimuli
// ─────────────────────────────────────────────
const stimuli = [];
for (let i = 1; i <= 30; i++) {
  stimuli.push({
    prime: `assets/Chien/Chien1.${i}.png`,
    category: "dog",
    ink: `assets/inkblot/inkblot_${String(i).padStart(2,'0')}.png`
  });
  stimuli.push({
    prime: `assets/Loup/Loup1.${i}.png`,
    category: "wolf",
    ink: `assets/inkblot/inkblot_${String(i).padStart(2,'0')}.png`
  });
  stimuli.push({
    prime: `assets/Renard/Renard1.${i}.png`,
    category: "fox",
    ink: `assets/inkblot/inkblot_${String(i).padStart(2,'0')}.png`
  });
}

const shuffled_trials = jsPsych.randomization.shuffle(stimuli);

// ─────────────────────────────────────────────
//  Break screen
// ─────────────────────────────────────────────
const break_screen = {
  type: jsPsychHtmlButtonResponse,
  stimulus: () => t("break_msg"),
  choices: () => [t("break_continue")]
};

// ─────────────────────────────────────────────
//  Add trial chunks + breaks
// ─────────────────────────────────────────────
const chunk_size = 30;
for (let i = 0; i < shuffled_trials.length; i += chunk_size) {
  const chunk = shuffled_trials.slice(i, i + chunk_size);
  timeline.push({ timeline: [amp_trial], timeline_variables: chunk });
  if (i + chunk_size < shuffled_trials.length) {
    timeline.push(break_screen);
  }
}

// ─────────────────────────────────────────────
//  Questionnaire
// ─────────────────────────────────────────────
const questionnaire = {
  type: jsPsychSurveyHtmlForm,
  html: `
    <video autoplay muted loop id="bg-video">
      <source src="assets/background.mp4" type="video/mp4">
    </video>
    <div class="questionnaire" style="text-align:left;">

      <h2 id="q-title"></h2>

      <p><span id="q-age"></span><br>
        <input name="age" type="number" min="18" max="100" required>
      </p>

      <p><span id="q-gender"></span><br>
        <label><input type="radio" name="gender" value="female" required> <span id="q-g-female"></span></label><br>
        <label><input type="radio" name="gender" value="male"> <span id="q-g-male"></span></label><br>
        <label><input type="radio" name="gender" value="nonbinary"> <span id="q-g-nonbinary"></span></label><br>
        <label><input type="radio" name="gender" value="prefer_not"> <span id="q-g-prefer"></span></label>
      </p>

      <p><span id="q-wolf"></span><br>
        <select name="att_wolf" required>
          <option value="" id="q-select-1"></option>
          <option value="1" id="q-s1-wolf"></option>
          <option value="2" id="q-s2-wolf"></option>
          <option value="3" id="q-s3-wolf"></option>
          <option value="4" id="q-s4-wolf"></option>
          <option value="5" id="q-s5-wolf"></option>
          <option value="6" id="q-s6-wolf"></option>
          <option value="7" id="q-s7-wolf"></option>
        </select>
      </p>

      <p><span id="q-dog"></span><br>
        <select name="att_dog" required>
          <option value="" id="q-select-2"></option>
          <option value="1" id="q-s1-dog"></option>
          <option value="2" id="q-s2-dog"></option>
          <option value="3" id="q-s3-dog"></option>
          <option value="4" id="q-s4-dog"></option>
          <option value="5" id="q-s5-dog"></option>
          <option value="6" id="q-s6-dog"></option>
          <option value="7" id="q-s7-dog"></option>
        </select>
      </p>

      <p><span id="q-fox"></span><br>
        <select name="att_fox" required>
          <option value="" id="q-select-3"></option>
          <option value="1" id="q-s1-fox"></option>
          <option value="2" id="q-s2-fox"></option>
          <option value="3" id="q-s3-fox"></option>
          <option value="4" id="q-s4-fox"></option>
          <option value="5" id="q-s5-fox"></option>
          <option value="6" id="q-s6-fox"></option>
          <option value="7" id="q-s7-fox"></option>
        </select>
      </p>

      <p><span id="q-dog-owner"></span><br>
        <label><input type="radio" name="dog_owner" value="yes" required> <span id="q-yes"></span></label>
        <label><input type="radio" name="dog_owner" value="no"> <span id="q-no"></span></label>
      </p>

    </div>
  `,
  button_label: "Submit / Envoyer",
  on_load: function() {
    document.getElementById("q-title").innerHTML     = t("q_title");
    document.getElementById("q-age").innerHTML       = t("q_age");
    document.getElementById("q-gender").innerHTML    = t("q_gender");
    document.getElementById("q-wolf").innerHTML      = t("q_wolf");
    document.getElementById("q-dog").innerHTML       = t("q_dog");
    document.getElementById("q-fox").innerHTML       = t("q_fox");
    document.getElementById("q-dog-owner").innerHTML = t("q_dog_owner");
    document.getElementById("q-g-female").innerHTML  = t("q_g_female");
    document.getElementById("q-g-male").innerHTML    = t("q_g_male");
    document.getElementById("q-g-nonbinary").innerHTML = t("q_g_nonbinary");
    document.getElementById("q-g-prefer").innerHTML  = t("q_g_prefer");
    document.getElementById("q-yes").innerHTML       = t("q_yes");
    document.getElementById("q-no").innerHTML        = t("q_no");

    const scales = ["q_scale_1","q_scale_2","q_scale_3","q_scale_4","q_scale_5","q_scale_6","q_scale_7"];
    const animals = ["wolf","dog","fox"];
    animals.forEach(animal => {
      document.getElementById(`q-select-${animals.indexOf(animal)+1}`).textContent = t("q_select");
      scales.forEach((key, i) => {
        document.getElementById(`q-s${i+1}-${animal}`).textContent = t(key);
      });
    });
  },
  on_finish: () => {
    if (document.fullscreenElement) document.exitFullscreen();
  }
};
timeline.push(questionnaire);

// ─────────────────────────────────────────────
//  Debrief
// ─────────────────────────────────────────────
const debrief = {
  type: jsPsychHtmlButtonResponse,
  stimulus: () => `
    <video autoplay muted loop id="bg-video">
      <source src="assets/background.mp4" type="video/mp4">
    </video>
    <div class="welcome-box">
      <h1>${t("debrief_title")}</h1>
      <p>${t("debrief_recorded")}</p>
      <h3 style="margin-top:25px;">${t("debrief_about")}</h3>
      <p style="text-align:left; line-height:1.6;">${t("debrief_body")}</p>
      <p style="text-align:left; line-height:1.6;">${t("debrief_amp")}</p>
      <h3 style="margin-top:25px;">${t("debrief_contact")}</h3>
      <p>${t("debrief_email")}</p>
    </div>
  `,
  choices: () => [lang === "fr" ? "Terminer" : "Finish"]
};

timeline.push(debrief);

jsPsych.run(timeline);