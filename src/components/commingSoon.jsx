import React from 'react';
import styles from './style.module.css'; // Import your styling file
import Logo from '../assets/logo.png';
import Animation from './animation';

// Usage example
function CommingSoon() {
  return (
    <div className={styles.container}>
      <div className={styles.companyLogo}>
        <img src={Logo} alt='logo' />
      </div>
      <div className={styles.heading}>
        <p>LAUNCHING SOON!!</p>
      </div>
      {/* <div className={styles.para}>
          <p>Get ready for effortless shopping! Our Grocery Ecommerce platform is on its way, bringing convenience to your doorstep. Stay tuned for the launch and revolutionize the way you shop for groceries.</p>
      </div> */}
      <div>
        <Animation></Animation>
      </div>
      {/* <div className={styles.para}>
          <p></p>
      </div> */}
      <div>
      </div>
      <div className={styles.copyright}>
        <p> &#169; 2024 Aekute Technologies. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default CommingSoon;
