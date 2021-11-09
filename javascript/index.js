// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync

// Iteration 1 - using callbacks
// ...
getInstruction(
  "mashedPotatoes",
  0,
  (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction(
      "mashedPotatoes",
      1,
      (step2) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${step2}</li>`;
        getInstruction(
          "mashedPotatoes",
          2,
          (step3) => {
            document.querySelector(
              "#mashedPotatoes"
            ).innerHTML += `<li>${step3}</li>`;
            getInstruction(
              "mashedPotatoes",
              3,
              (step4) => {
                document.querySelector(
                  "#mashedPotatoes"
                ).innerHTML += `<li>${step4}</li>`;
                getInstruction(
                  "mashedPotatoes",
                  4,
                  (step5) => {
                    document.querySelector(
                      "#mashedPotatoes"
                    ).innerHTML += `<li>${step5}</li>`;
                    document
                      .querySelector("#mashedPotatoesImg")
                      .removeAttribute("hidden");
                  },
                  (error) => console.log(error)
                );
              },
              (error) => console.log(error)
            );
          },
          (error) => console.log(error)
        );
      },
      (error) => console.log(error)
    );
  },
  (error) => console.log(error)
);
// Iteration 2 - using promises
// ...

const steakSteps = new Promise(function (resolve, reject) {});

obtainInstruction("steak", 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    return obtainInstruction("steak", 1);
  })
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    return obtainInstruction("steak", 2);
  })
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    return obtainInstruction("steak", 3);
  })
  .then((step3) => {
    setTimeout(() => {
      document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    }, 2000);
    return obtainInstruction("steak", 4);
  })
  .then((step4) => {
    setTimeout(() => {
      document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    }, 4000);
    return obtainInstruction("steak", 5);
  })
  .then((step5) => {
    setTimeout(() => {
      document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    }, 4000);
    return obtainInstruction("steak", 6);
  })
  .then((step6) => {
    setTimeout(() => {
      document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
    }, 4000);
    return obtainInstruction("steak", 7);
  })
  .then((step7) => {
    setTimeout(() => {
      document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
      document.querySelector("#steakImg").removeAttribute("hidden");
    }, 4000);
  })
  .catch((err) => {
    console.log(err);
  });

// Iteration 3 using async/await
// ...

const brocolliSteps = broccoli;

function broccoliRecepie(step) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (brocolliSteps[step]) {
        resolve(brocolliSteps[step]);
      } else {
        reject();
      }
    }, 1000);
  });
}

async function getBroccoli() {
  try {
    const step1 = await broccoliRecepie(0);
    document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;
    const step2 = await broccoliRecepie(1);
    document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`;
    const step3 = await broccoliRecepie(2);
    document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`;
    const step4 = await broccoliRecepie(3);
    document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`;
    const step5 = await broccoliRecepie(4);
    document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`;
    const step6 = await broccoliRecepie(5);
    document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`;
    const step7 = await broccoliRecepie(6);
    document.querySelector("#broccoli").innerHTML += `<li>${step7}</li>`;
    document.querySelector("#broccoliImg").removeAttribute("hidden");
  } catch (err) {
    console.log(err);
  }
}

getBroccoli();

// Bonus 2 - Promise all
// ...

const brusselsSteps = brusselsSprouts;

const brusselsStep1 = new Promise((resolve, reject) => {
  resolve(brusselsSteps[0]);
});

const brusselsStep2 = new Promise((resolve, reject) => {
  resolve(brusselsSteps[1]);
});

const brusselsStep3 = new Promise((resolve, reject) => {
  resolve(brusselsSteps[2]);
});

const brusselsStep4 = new Promise((resolve, reject) => {
  resolve(brusselsSteps[3]);
});

const brusselsStep5 = new Promise((resolve, reject) => {
  resolve(brusselsSteps[4]);
});

const brusselsStep6 = new Promise((resolve, reject) => {
  resolve(brusselsSteps[5]);
});

const brusselsStep7 = new Promise((resolve, reject) => {
  resolve(brusselsSteps[6]);
});

const brusselsStep8 = new Promise((resolve, reject) => {
  resolve(brusselsSteps[7]);
});

Promise.all([
  brusselsStep1,
  brusselsStep2,
  brusselsStep3,
  brusselsStep4,
  brusselsStep5,
  brusselsStep6,
  brusselsStep7,
  brusselsStep8,
])
  .then((valuesArr) => {
    valuesArr.forEach((steps) => {
      document.querySelector(
        "#brusselsSprouts"
      ).innerHTML += `<li>${steps}</li>`;
    });
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
  })
  .catch((err) => {
    console.log(err);
  });

// BONUS 2 NOTES
//
// THE FUNCTION obtainInstrution allready has the value from the "new Promise"
// In that way should I declare the steps like "p1 = obtainInstrution('brusselsSprout', 0) --- (from obtaininstruction.js); for each one, instead create a new promise"
