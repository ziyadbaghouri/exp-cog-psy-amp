# Implicit Attitudes Toward Wolves — AMP Experiment

**Assessing Implicit Attitudes Towards Wolves Using the Affect Misattribution Procedure**

> Ziyad Baghouri  
> HUM-403 · Experimental Cognitive Psychology · EPFL  
> Supervisor: Dr. Domicele Jonauskaite  
> December 2025

---

## Abstract

This repository contains all materials and code for an online behavioral experiment investigating whether the culturally entrenched "big bad wolf" stereotype produces measurable implicit biases in adults. Using the **Affective Misattribution Procedure** (AMP; Payne et al., 2005), participants are briefly exposed to animal primes (wolf, dog, or fox) before rating neutral inkblots as *pleasant* or *unpleasant*. Systematic differences in pleasant-response rates across prime categories serve as an index of implicit affect. The experiment replicates and extends the framework of Williams et al. (2016) — originally conducted with children in a laboratory — to an adult online population.

---

## Background

When we look at an animal, we rarely see a blank slate. Animals are frequently imbued with symbolic meanings that shape how they are evaluated, feared, or admired — often in ways that conflict with empirical evidence. In the case of wolves, cultural representations have long linked the animal to danger and malevolence, perpetuating the "big bad wolf" stereotype (Jürgens & Hackett, 2017), even as wolf populations continue to recover across Europe (Di Bernardi et al., 2025).

Implicit attitudes are automatic evaluations that occur outside conscious awareness and can influence judgments and behavior even when individuals explicitly reject stereotypical beliefs (Greenwald & Banaji, 1995). The AMP (Payne et al., 2005) captures these evaluations by testing whether affect elicited by a briefly flashed prime transfers to a subsequent neutral target. Because the prime is presented too briefly to allow deliberate correction, the paradigm is well suited for measuring automatic affective responses.

Despite the broad application of implicit measures in social psychology, empirical research has rarely examined whether culturally constructed animal stereotypes manifest as measurable cognitive biases. This study addresses that gap and has direct implications for human–wildlife coexistence and conservation policy (Mascia, 2003).

---

## Hypotheses

| Prime | Predicted direction |
|-------|---------------------|
| Dog   | Highest proportion of "pleasant" responses (domestic, familiar companion) |
| Fox   | Intermediate (wild, but lacking strong cultural stigma) |
| Wolf  | Lowest proportion of "pleasant" responses ("big bad wolf" stereotype) |

The ordering dog > fox > wolf is also interpretable as a **domestication gradient**.

---

## Experimental Design

### Original study

This experiment replicates the framework of Williams et al. (2016), which used a child-friendly AMP with unambiguously positive (puppies) and negative (sharks) animal primes to demonstrate robust affective misattribution consistent across age and gender. The present study adapts this paradigm to target culturally specific — rather than biologically obvious — animal stereotypes in an adult online sample.

### Participants

We planned to recruit **70 adult participants** from first-year psychology students at the University of Lausanne. Participation took place as part of a credit-inducing program; no monetary compensation was offered.

**Eligibility criteria:**
- Age ≥ 18
- CEFR B2 level in English
- Normal or corrected-to-normal vision

**Exclusion criteria:** incomplete AMP task; clear signs of random responding (extremely fast response times on most trials; failure to respond on a large proportion of trials).

### Trial structure

```
Fixation cross  (500–1000 ms, jittered)
       ↓
Blank screen    (750 ms)
       ↓
Animal prime    (100 ms)
       ↓
Blank screen    (125 ms)
       ↓
Inkblot         (250 ms)
       ↓
Mask + response buttons  (self-paced)
```

### Stimuli

| Category | Folder | N images |
|----------|--------|----------|
| Dog (*Chien*) | `assets/Chien/` | 30 |
| Wolf (*Loup*) | `assets/Loup/` | 30 |
| Fox (*Renard*) | `assets/Renard/` | 30 |
| Inkblots | `assets/inkblot/` | 30 |

Animal images were sourced from Unsplash and Pixabay (non-commercial academic use) and standardized in size, resolution, and background. Dog images were selected to avoid wolf-resembling breeds (e.g., huskies, German shepherds) in favor of clearly domestic breeds (e.g., beagles, dalmatians, Jack Russell terriers) to maximize perceptual distinctiveness. Inkblots are grayscale images without recognizable objects or emotional content, created by the experimenters.

**Total trials:** 90 (30 per animal category), fully randomized across participants.  
**Block structure:** 3 blocks of 30 trials with optional rest breaks between blocks.

### Measures

**Primary outcome:** proportion of "pleasant" responses per prime category

**Post-experiment questionnaire:**
- Age, gender
- Explicit attitude toward wolves, dogs, and foxes (7-point scale: Very negative → Very positive)
- Dog ownership (yes / no)

---

## Statistical Analysis

Responses are binary (pleasant = 1, unpleasant = 0) and will be analyzed using a **Generalized Linear Mixed Model (GLMM)** with a binomial distribution and logit link function (Singmann & Kellen, 2022). Prime category (dog, wolf, fox) is the fixed effect of interest. Participant is included as a random effect to account for individual differences in overall response bias. The within-subjects design allows each participant to serve as their own control, maximizing statistical sensitivity. Statistical significance threshold: α = .05.

---

## Transparency and Reproducibility

The study was not preregistered. The design, materials, and analysis plan are described here in sufficient detail to allow replication. Anonymized trial-level data may be shared upon reasonable request, subject to ethical and legal constraints.

---

## Repository Structure

```
amp/
├── index.html               # Entry point
├── src/
│   └── experiment.js        # Full jsPsych experiment (i18n, AMP logic, data upload)
├── styles/
│   └── style.css            # Custom styling
├── assets/
│   ├── background.mp4       # Looping video background
│   ├── mask.png             # Visual backward mask
│   ├── Chien/               # Dog prime images (30)
│   ├── Loup/                # Wolf prime images (30)
│   ├── Renard/              # Fox prime images (30)
│   └── inkblot/             # Inkblot target images (30)
└── jspsych/
    └── jspsych/             # jsPsych v7 library and plugins
```

---

## Running Locally

No build step required — the experiment is plain HTML + JavaScript.

1. Clone the repository:
   ```bash
   git clone https://github.com/ziyadbaghouri/wolf-implicit-bias-amp.git
   cd wolf-implicit-bias-amp
   ```

2. Serve via a local HTTP server (direct `file://` will block asset loading in most browsers):
   ```bash
   # Python 3
   python -m http.server 8000

   # Node.js
   npx serve .
   ```

3. Open `http://localhost:8000`.

> **Requirements:** laptop or desktop computer; the experiment is not optimized for mobile or tablet.

---

## Deployment (Pavlovia)

The experiment is configured for deployment on [Pavlovia](https://pavlovia.org).

1. Push the repository to `https://gitlab.pavlovia.org`.
2. Set the study status to **Running** in the Pavlovia dashboard.
3. Share the generated participant URL.

Data are automatically submitted to a Google Sheet via a Google Apps Script endpoint (see `on_finish` in `src/experiment.js`).

---

## Data Output

Each participant's submission contains:

| Field | Description |
|-------|-------------|
| `participant_id` | Random 8-character ID assigned by jsPsych |
| `age` | Self-reported age |
| `gender` | Self-reported gender |
| `wolf_attitude` | Explicit wolf attitude (1–7) |
| `dog_attitude` | Explicit dog attitude (1–7) |
| `fox_attitude` | Explicit fox attitude (1–7) |
| `dog_owner` | Dog ownership (yes / no) |
| `Chien1.X` / `Loup1.X` / `Renard1.X` | Per-image AMP response: `P` (pleasant) or `U` (unpleasant) |

---

## Tech Stack

| Component | Technology |
|-----------|------------|
| Experiment framework | [jsPsych v7](https://www.jspsych.org/) |
| Scripting | Vanilla JavaScript (ES6+) |
| Styling | CSS3 |
| Data collection | Google Apps Script → Google Sheets |
| Hosting | [Pavlovia](https://pavlovia.org) |
| Languages | English / French (built-in i18n dictionary) |

---

## References

- Brosch, T., Scherer, K. R., Grandjean, D., & Sander, D. (2013). The impact of emotion on perception, attention, memory, and decision-making. *Swiss Medical Weekly, 143*, w13786. https://doi.org/10.4414/smw.2013.13786
- de Leeuw, J. R. (2015). jsPsych: A JavaScript library for creating behavioral experiments in a web browser. *Behavior Research Methods, 47*(1), 1–12. https://doi.org/10.3758/s13428-014-0458-y
- Deleuze, J., Maurage, P., Schimmenti, A., Nuyens, F., Melzer, A., & Billieux, J. (2019). Escaping reality through videogames is linked to an implicit preference for virtual over real-life stimuli. *Journal of Affective Disorders, 245*, 1024–1031. https://doi.org/10.1016/j.jad.2018.11.078
- Di Bernardi, C., Chapron, G., Kaczensky, P., et al. (2025). Continuing recovery of wolves in Europe. *PLOS Sustainability and Transformation, 4*(2), e0000158. https://doi.org/10.1371/journal.pstr.0000158
- Greenwald, A. G., & Banaji, M. R. (1995). Implicit social cognition: Attitudes, self-esteem, and stereotypes. *Psychological Review, 102*(1), 4–27. https://doi.org/10.1037/0033-295X.102.1.4
- Hughes, S., Cummins, J., & Hussey, I. (2023). Effects on the affect misattribution procedure are strongly moderated by influence awareness. *Behavior Research Methods, 55*(4), 1558–1586. https://doi.org/10.3758/s13428-022-01879-4
- Jürgens, U. M., & Hackett, P. M. W. (2017). The big bad wolf: The formation of a stereotype. *Ecopsychology, 9*(1), 33–43. https://doi.org/10.1089/eco.2016.0037
- Kurdi, B., Seitchik, A. E., Axt, J. R., et al. (2017). Introducing the Open Affective Standardized Image Set (OASIS). *Behavior Research Methods, 49*(2), 457–470. https://doi.org/10.3758/s13428-016-0715-3
- Mascia, M. B. (2003). Conservation and the social sciences. *Conservation Biology, 17*(3), 649–650. https://doi.org/10.1046/j.1523-1739.2003.01738.x
- Payne, B. K., Cheng, C. M., Govorun, O., & Stewart, B. D. (2005). An inkblot for attitudes: Affect misattribution as implicit measurement. *Journal of Personality and Social Psychology, 89*(3), 277–293. https://doi.org/10.1037/0022-3514.89.3.277
- Prokop, P., Fančovičová, J., & Kubiatko, M. (2024). A positive presentation of wolves affects the explicit and implicit attitudes of schoolchildren towards them. *International Journal of Science Education, 47*(3), 422–439.
- Singmann, H., & Kellen, D. (2022). Generalized linear mixed-effects models for studies using different sets of stimuli across conditions. *Frontiers in Psychology, 13*, 955722. https://doi.org/10.3389/fpsyg.2022.955722
- Williams, A., Steele, J. R., & Lipman, C. (2016). Assessing children's implicit attitudes using the affect misattribution procedure. *Journal of Cognition and Development, 17*(3), 505–525. https://doi.org/10.1080/15248372.2015.1061527

---

## Reports

| Report | Description |
|--------|-------------|
| [report1.pdf](reports/report1.pdf) | First report — study design, theoretical background, and planned analysis (December 2025) |

*The final report will be added at the end of the academic year.*

---

## Contributors

| Name | Institution |
|------|-------------|
| Ziyad Baghouri | EPFL |
| Paco Mahue | EPFL |
| Lorenzo Bonazzi | EPFL |
| Joseph Prieur | EPFL |

---

## Contact

For questions about this study: **mael.theubet@unil.ch**

