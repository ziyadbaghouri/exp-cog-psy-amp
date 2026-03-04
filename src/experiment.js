/* initialize jsPsych */

const jsPsych = initJsPsych({
    on_finish: function () {
        jsPsych.data.displayData();
    }
});

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
  Thank you for taking the time to participate in this study. You will briefly see 
  a series of images, each followed by an abstract shape. Your task is simply to 
  indicate whether each shape feels <b>pleasant</b> or <b>unpleasant</b> to you.
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




/* RUN EXPERIMENT */

jsPsych.run(timeline);