import styles from "./Style";
import NavBar from "./components/NavBar";

const App = () => (
  <div className='bg-primary w-full overflow-hidden'> 
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>      
            NavBar              
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
          Hero
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        stats
        business
        billing
        CardDeal
        Testimonials
        Clients
        CTA
        Footer
      </div>
    </div>

  </div>
    
  );


export default App;