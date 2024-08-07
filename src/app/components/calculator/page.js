import styles from "./calculator.module.sass";

export default function Calculator() {
    return (
        <div className={styles.calculatorContainer}>
            <div className={styles.calcDisplay}>
                <input type="text"/>
            </div>
        </div>
    );
}
