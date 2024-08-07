import styles from "./calculator.module.sass";
import Calculator from "../components/calculator/page.js";

export default function Home() {
    return (
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Calculator</title>
            </head>
            <body>
                <div className={styles.div}></div>
                <Calculator/>
            </body>
        </html>
    );
}
