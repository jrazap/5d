import { useEffect } from "react";

const Skill = ({ label, percent }) => {
  return (
    <div className="bg-white flex flex-col justify-center items-center gap-3">
      <div
        className="circular-progress flex-centered rounded-[50%] w-[var(--progress-bar-width)] h-[var(--progress-bar-height)]"
        data-inner-circle-color="white"
        data-percentage={percent}
        data-progress-color="#7579FF"
        data-bg-color="lightgrey"
      >
        <div className="inner-circle absolute lg:w-[calc(var(--progress-bar-width)-50px)] lg:h-[calc(var(--progress-bar-height)-50px)] bg-white rounded-[50%] md:w-[calc(var(--progress-bar-width)-30px)] md:h-[calc(var(--progress-bar-height)-30px)] sm:w-[calc(var(--progress-bar-width)-30px)] sm:h-[calc(var(--progress-bar-height)-30px)]"></div>
        <p className="text-blackcoral relative text-2xl font-semibold percentage sm:text-lg">
          0%
        </p>
      </div>
      <p className="text-blackcoral relative text-sm font-medium sm:text-xs text-center oneline">
        {label}
      </p>
    </div>
  );
};

const Skills = () => {
  const skills = [
    {
      label: "Figma",
      percent: 90,
    },
    {
      label: "UI Desing",
      percent: 80,
    },
    {
      label: "Information Architecture",
      percent: 80,
    },
    {
      label: "UX Desing",
      percent: 70,
    },
    {
      label: "Prototyping",
      percent: 70,
    },
    {
      label: "Box Model",
      percent: 70,
    },
    {
      label: "Business Model Canvas",
      percent: 70,
    },
    {
      label: "Desing Systems",
      percent: 70,
    },
  ];

  const rollProgress = () => {
    const circularProgress = document.querySelectorAll(".circular-progress");
    Array.from(circularProgress).forEach((progressBar) => {
      const progressValue = progressBar.querySelector(".percentage");
      let startValue = 0,
        endValue = Number(progressBar.getAttribute("data-percentage")),
        speed = 50,
        progressColor = progressBar.getAttribute("data-progress-color");

      const progress = setInterval(() => {
        startValue++;
        progressValue.textContent = `${startValue}%`;

        progressBar.style.background = `conic-gradient(${progressColor} ${
          startValue * 3.6
        }deg,${progressBar.getAttribute("data-bg-color")} 0deg)`;
        if (startValue === endValue) {
          clearInterval(progress);
        }
      }, speed);
    });
  };

  useEffect(() => {
    rollProgress();
  });

  return (
    <section className="section skills relative" id="skills">
      <div className="container">
        <h2 className="section-title">skills</h2>
        <hr className="border border-aliceblue my-4" />
        <div className="skills-container grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 place-items-center">
          {skills.map((skill, index) => (
            <Skill key={index} label={skill.label} percent={skill.percent} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
