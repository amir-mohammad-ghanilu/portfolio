import React, { useState, useEffect } from "react";
import Skill from "./Skill";
import { devSkills } from "../../pages/components/Skills";
function NewSkills() {
  const { htmlSkill, cssSkill, reactSkill, nodeSkill, gitSkill, jsSkill } =
    devSkills;
  useEffect(() => {
    const timer = setInterval(() => {
      setHtml((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 82);
      });
      setJs((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 55);
      });
      SetReact((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 75);
      });
      setNodeJs((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 45);
      });
      setCss((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 80);
      });
      setGit((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 90);
      });
    }, 100);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const [nodejs, setNodeJs] = useState(0);
  const [html, setHtml] = useState(0);
  const [css, setCss] = useState(0);
  const [react, SetReact] = useState(0);
  const [js, setJs] = useState(0);
  const [git, setGit] = useState(0);
  return (
    <>
      <Skill
        name={htmlSkill.name}
        icon={htmlSkill.icon}
        color={htmlSkill.color}
        value={html}
      />
      <Skill
        name={cssSkill.name}
        icon={cssSkill.icon}
        color={cssSkill.color}
        value={css}
      />
      <Skill
        name={jsSkill.name}
        icon={jsSkill.icon}
        color={jsSkill.color}
        value={js}
      />
      <Skill
        name={reactSkill.name}
        icon={reactSkill.icon}
        color={reactSkill.color}
        value={react}
      />
      <Skill
        name={nodeSkill.name}
        icon={nodeSkill.icon}
        color={nodeSkill.color}
        value={nodejs}
      />
      <Skill
        name={gitSkill.name}
        icon={gitSkill.icon}
        color={gitSkill.color}
        value={git}
      />
    </>
  );
}

export default NewSkills;
