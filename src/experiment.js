const jsPsych = initJsPsych({
  on_finish: function() {

    // Demographics
    const demo = jsPsych.data.get().filter({trial_type: "survey-html-form"}).values()[0];

    const amp_responses = jsPsych.data.get().filter({trial_type: "html-button-response"})
      .values()
      .filter(t => t.prime_category !== undefined && t.prime_image !== undefined);

    const image_columns = {};
    for (const trial of amp_responses) {
      const key = trial.prime_image;          
      const value = trial.response === 0 ? "P" : "U";  // 0 = Pleasant, 1 = Unpleasant
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

    // cacher le token sur git secret mais vzy flemme 
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

let timeline = [];

// Build image list 
const images_to_preload = [];

for (let i = 1; i <= 30; i++) {
  images_to_preload.push(`assets/Chien/Chien1.${i}.png`);
  images_to_preload.push(`assets/Loup/Loup1.${i}.png`);
  images_to_preload.push(`assets/Renard/Renard1.${i}.png`);
  images_to_preload.push(`assets/inkblot/inkblot_${String(i).padStart(2,'0')}.png`);
}

//Preload 
const safe_images = images_to_preload.filter(p => typeof p === 'string');

const preload = {
  type: jsPsychPreload,
  images: safe_images,
  show_progress_bar: true,
  message: "<p>Loading, please wait...</p>",
  error_message: "<p>Failed to load some images. Check file paths.</p>",
  show_detailed_errors: true
};

timeline.push(preload);

//Welcome

const welcome = {
  type: jsPsychHtmlButtonResponse,

  stimulus: `
  <video autoplay muted loop id="bg-video">
    <source src="assets/background.mp4" type="video/mp4">
  </video>

  <div class="welcome-box">

    <h1>Welcome</h1>

    <p>
      Thank you for taking the time to participate in this study.
    </p>

    <p>
      The experiment takes approximately <b>20 minutes</b>. Please complete it in a
      quiet place where you can stay focused.
    </p>

    <p>
      All responses are <b>fully anonymous</b> and will only be used for academic
      research. No personal information will be collected at any point.
    </p>

    <p>
      Participation is entirely <b>voluntary</b>. You are free to stop at any time
      by closing the browser window.
    </p>

    <label style="display:block; margin-top:20px;">
      <input type="checkbox" id="consent-check">
      I am <b>18 years or older</b> and I voluntarily agree to participate in this study.
    </label>

  </div>
  `,

  choices: ["Start Experiment"],

  button_html: (choice) =>
    `<button class="start-btn" disabled>${choice}</button>`,

  on_load: () => {
    const checkbox = document.getElementById("consent-check");
    const button = document.querySelector(".start-btn");
    checkbox.addEventListener("change", () => {
      button.disabled = !checkbox.checked;
    });
  }

};

timeline.push(welcome);

//Instructions

const instructions = {
  type: jsPsychHtmlButtonResponse,

  stimulus: `
  <video autoplay muted loop id="bg-video">
    <source src="assets/background.mp4" type="video/mp4">
  </video>

  <div class="welcome-box">

    <h1>Task Instructions</h1>

    <p>Please read the instructions carefully before starting.</p>

    <ul style="text-align:left; line-height:1.8; margin-top:20px;">
      <li>You will see a series of <b>inkblots</b>.</li>
      <li>You have to decide whether each inkblot looks
        <b style="color:#7CFF9E;">Pleasant</b> or
        <b style="color:#FF8A8A;">Unpleasant</b>.</li>
      <li>Respond based on your <b>first impression</b>.</li>
      <li>There are <b>no right or wrong answers</b>.</li>
      <li>Respond naturally.</li>
    </ul>

  </div>
  `,

  choices: ["Begin"]
};

timeline.push(instructions);

// Les screens du trial (a varifier ac la team leur duree)
const fixation = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: `
  <div class="amp-container">
    <div class="fixation-cross">+</div>
  </div>
  `,
  choices: "NO_KEYS",
  trial_duration: 500
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
    return `
    <div class="amp-container">
      <img src="${src}" class="prime-img">
    </div>
    `;
  },
  choices: "NO_KEYS",
  trial_duration: 75
};

const blank75 = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: '',
  choices: "NO_KEYS",
  trial_duration: 75
};

const inkblot = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: function() {
    const src = jsPsych.evaluateTimelineVariable('ink');
    return `
    <div class="amp-container">
      <img src="${src}" class="inkblot-img">
    </div>
    `;
  },
  choices: "NO_KEYS",
  trial_duration: 150
};

// Response of the participant
const response = {
  type: jsPsychHtmlButtonResponse,

  stimulus: `<div style="display:flex; flex-direction:column; align-items:center; justify-content:center; gap:20px;"></div>`,

  choices: ["Pleasant", "Unpleasant"],

  button_html: (choice, i) =>
    `<button style="font-size:18px; padding:14px 36px; border-radius:10px; border:none; cursor:pointer; background:${i === 0 ? '#2ecc71' : '#e74c3c'}; color:white; font-weight:bold; margin:0 12px;">${choice}</button>`,

  data: {
    prime_category: jsPsych.timelineVariable('category'),
    // Extract just the filename to record in the sheet
    prime_image: () => {
      const path = jsPsych.evaluateTimelineVariable('prime');
      return path.replace(/^.*\//, '').replace('.png', ''); // "Chien1.3"
    }
  }
};

const amp_trial = {
  timeline: [
    fixation,
    blank750,
    prime,
    blank75,
    inkblot,
    response
  ]
};

// build and shuffle

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

timeline.push({
  timeline: [amp_trial],
  timeline_variables: shuffled_trials
});

// BREAK SCREEN a voir ac la team si on le laisse ou ps

// const break_screen = {
//   type: jsPsychHtmlButtonResponse,
//   stimulus: "<h2>You may take a short break.</h2>",
//   choices: ["Continue"]
// };

timeline.push(break_screen);

//Questionnaire 

const questionnaire = {
  type: jsPsychSurveyHtmlForm,

  html: `
  <video autoplay muted loop id="bg-video">
    <source src="assets/background.mp4" type="video/mp4">
  </video>

  <div class="questionnaire">

    <h2>Please answer the following questions.</h2>

    <p>
      Age:<br>
      <input name="age" type="number" min="18" max="100" required>
    </p>

    <p>
      Gender:<br>
      <label><input type="radio" name="gender" value="female" required> Female</label><br>
      <label><input type="radio" name="gender" value="male"> Male</label><br>
      <label><input type="radio" name="gender" value="nonbinary"> Non-binary</label><br>
      <label><input type="radio" name="gender" value="prefer_not"> Prefer not to say</label>
    </p>

    <p>
      How positively do you feel about <b>wolves</b>?<br>
      <select name="att_wolf" required>
        <option value="">Select</option>
        <option value="1">Very negative</option>
        <option value="2">Negative</option>
        <option value="3">Slightly negative</option>
        <option value="4">Neutral</option>
        <option value="5">Slightly positive</option>
        <option value="6">Positive</option>
        <option value="7">Very positive</option>
      </select>
    </p>

    <p>
      How positively do you feel about <b>dogs</b>?<br>
      <select name="att_dog" required>
        <option value="">Select</option>
        <option value="1">Very negative</option>
        <option value="2">Negative</option>
        <option value="3">Slightly negative</option>
        <option value="4">Neutral</option>
        <option value="5">Slightly positive</option>
        <option value="6">Positive</option>
        <option value="7">Very positive</option>
      </select>
    </p>

    <p>
      How positively do you feel about <b>foxes</b>?<br>
      <select name="att_fox" required>
        <option value="">Select</option>
        <option value="1">Very negative</option>
        <option value="2">Negative</option>
        <option value="3">Slightly negative</option>
        <option value="4">Neutral</option>
        <option value="5">Slightly positive</option>
        <option value="6">Positive</option>
        <option value="7">Very positive</option>
      </select>
    </p>

    <p>
      Do you currently own a dog?<br>
      <label><input type="radio" name="dog_owner" value="yes" required> Yes</label>
      <label><input type="radio" name="dog_owner" value="no"> No</label>
    </p>

  </div>
  `,

  button_label: "Finish"
};

timeline.push(questionnaire);

// Maybe add a final thank you screen here?
//Run

jsPsych.run(timeline);
