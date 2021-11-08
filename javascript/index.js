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
  })
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
  })
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
  })
  .then((step3) => {
    setTimeout(() => {
      document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    }, 2000);
  })
  .then((step4) => {
    setTimeout(() => {
      document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    }, 4000);
  })
  .then((step5) => {
    setTimeout(() => {
      document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    }, 4000);
  })
  .then((step6) => {
    setTimeout(() => {
      document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
    }, 4000);
  })
  .then((step7) => {
    setTimeout(() => {
      document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
    }, 4000);
  })
  .then(() => {
    setTimeout(() => {
      document.querySelector("#steakImg").removeAttribute("hidden");
    }, 4000);
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
    const step8 = document
      .querySelector("#broccoliImg")
      .removeAttribute("hidden");
  } catch (err) {}
}

getBroccoli();

// Bonus 2 - Promise all
// ...

const brusselsSteps = brusselsSprouts;

const brusselsStep1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(brusselsSteps[0]);
  }, 1000);
});

const brusselsStep2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(brusselsSteps[1]);
  }, 1000);
});

const brusselsStep3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(brusselsSteps[2]);
  }, 1000);
});

const brusselsStep4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(brusselsSteps[3]);
  }, 1000);
});

const brusselsStep5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(brusselsSteps[4]);
  }, 1000);
});

const brusselsStep6 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(brusselsSteps[5]);
  }, 1000);
});

const brusselsStep7 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(brusselsSteps[6]);
  }, 1000);
});

const brusselsStep8 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(brusselsSteps[7]);
  }, 1000);
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
]).then((valuesArr) => {
  valuesArr.forEach((steps) => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${steps}</li>`;
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
  });
  document;
});
