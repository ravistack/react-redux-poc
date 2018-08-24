import React from "react";
import namor from "namor";

const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = () => {
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
    primarykey:Math.floor(Math.random() * 30)
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

export const Tips = () =>
  <div style={{ textAlign: "center" }}>
    <em>Tip: Hold shift when sorting to multi-sort!</em>
  </div>;
