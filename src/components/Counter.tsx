import React, { useState } from 'react';
import classes from './Counter.module.scss';

export const Counter = () => {
  const [value, setValue] = useState<number>(0);
  const increment = () => setValue((prev) => prev + 1);
  const dicrement = () => setValue((prev) => prev - 1);
  return (
    <div className={classes.main}>
      <button onClick={increment}>+</button>
      <button onClick={dicrement}>-</button>
      {value}
    </div>
  );
};
