import React from "react";
import namor from "namor";
//import "./index.css";

const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = () => {
  const statusChance = Math.random();
  return {
    as_of_date: namor.generate({ words: 1, numbers: 0 }),
    labelName: namor.generate({ words: 1, numbers: 0 }),
    dq_rule_id: Math.floor(Math.random() * 30),
    category: namor.generate({ words: 1, numbers: 0 }),
    progress: Math.floor(Math.random() * 100),
    dq_entity:namor.generate({ words: 1, numbers: 0 }),
    dq_attr:namor.generate({ words: 1, numbers: 0 }),
    dq_attr_value: Math.floor(Math.random() * 100),
    dq_excp_msg:namor.generate({ words: 1, numbers: 0 }),
    primarykey:Math.floor(Math.random() * 30),
    status:
      statusChance > 0.66
        ? "relationship"
        : statusChance > 0.33 ? "complicated" : "single"
  };
};

export function makeData(len = 5553) {
  return range(len).map(d => {
    return {
      ...newPerson(),
      children: range(10).map(newPerson)
    };
  });
}

export const Logo = () =>
  <div style={{ margin: '1rem auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
    For more examples, visit {''}
  <br />
    <a href="https://github.com/react-tools/react-table" target="_blank">
      <img
        src="https://github.com/react-tools/media/raw/master/logo-react-table.png"
        style={{ width: `150px`, margin: ".5em auto .3em" }}
      />
    </a>
  </div>;

export const Tips = () =>
  <div style={{ textAlign: "center" }}>
    <em>Tip: Hold shift when sorting to multi-sort!</em>
  </div>;
