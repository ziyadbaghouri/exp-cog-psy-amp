document.addEventListener("DOMContentLoaded", () => {
  const jsPsych = initJsPsych({
    on_finish: () => jsPsych.data.displayData()
  });

  const timeline = [];

  timeline.push({
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "<h2>It works ✅</h2><p>Press any key.</p>"
  });

  jsPsych.run(timeline);
});
