import { useState } from 'react';
import styles from './css/ColorPicker.module.css';

export default function ColorPicker({ options }) {
  const [activeOptionIdx, setActiveOptionIdx] = useState(0);

  const colorOptions = [
    { label: "red", color: "#f44336" },
    { label: "green", color: "#4caf50" },
    { label: "blue", color: "#2196f3" },
    { label: "grey", color: "#607d8b" },
    { label: "pink", color: "#e91e63" },
    { label: "indigo", color: "#3f51b5" },
  ]

  const makeOptionClassName = index => {
    return index === activeOptionIdx ? styles.activeOption : styles.option;
  };

  const { label } = options[activeOptionIdx];

  return (
    <>
    <div className={styles.container}>
      <h2 className={styles.title}>Color Picker</h2>
      <p>Вибраний колір: {label}</p>
      <div>
        {options.map(({ label, color }, index) => (
          <button
            key={label}
            aria-label={label} 
            className={makeOptionClassName(index)}
            style={{ backgroundColor: color }}
            onClick={() => setActiveOptionIdx(index)}
          ></button>
        ))}
      </div>
    </div>
    </>
  );
}