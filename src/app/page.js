import styles from "./page.module.sass";
import Navbar from "./components/navbar/page.js"

export default function Home() {
  return (
    <main className={styles.main}>
      {/* TODO: <NAVBAR> */}
      <Navbar/>
      <div className={styles.Content}>

      
        
        <div>
          <img className={styles.wip} src="/home/WIP.png" alt="Work in Process"/>
        </div>
      </div>
    </main>
  );
}
