const jsPsych = initJsPsych({
  on_finish: function() {

    // find the demographics trial
    const demo = jsPsych.data.get().filter({trial_type: "survey-html-form"}).values()[0];

    const payload = {
  participant_id: participant_id,
  age: demo.response.age,
  gender: demo.response.gender,
  wolf_attitude: demo.response.att_wolf,
  dog_attitude: demo.response.att_dog,
  fox_attitude: demo.response.att_fox,
  dog_owner: demo.response.dog_owner
};

    fetch("https://script.google.com/macros/s/AKfycbyIdq-wELknYlD2KQ1Uy-IVz4y8vHzXBPTWqYN9PPC4SvN__xxDabq9MSqQXzUQyJWm/exec", {
      method: "POST",
      mode: "no-cors", 
      headers: {
        "Content-Type": "text/plain" 
      },
      body: JSON.stringify(payload)
    });

  }
});

const participant_id = jsPsych.randomization.randomID(8);
jsPsych.data.addProperties({ participant_id: participant_id });

let timeline = [];


/* WELCOME SCREEN */

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

  button_label: "Continue"
};

timeline.push(questionnaire);




/* RUN EXPERIMENT */

jsPsych.run(timeline);