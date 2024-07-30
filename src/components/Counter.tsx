import { useState } from "react";
import styles from './Counter.module.scss';

export const Counter = () => {
    const [count, setCount] = useState(0);
    // console.log(classes.btn);
    return (
        <div className={styles.btn}>
            <div>{count}</div>
            <button onClick={() => setCount(count + 1)} >Increment</button>
        </div>
    );
}