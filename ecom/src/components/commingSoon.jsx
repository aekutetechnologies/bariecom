import React from 'react';
import styles from './style.module.css'; // Import your styling file
import Logo from '../assets/logo.png'
import Animation from './animation';



// Usage example
function CommingSoon() {
  return (
    <div className={styles.container}>
    {/* <div className={styles.companyLogo}>
        <img src={Logo} alt='logo' />
    </div> */}
    <div className={styles.heading}>
        <h1>WE ARE COMING SOON!!</h1>
    </div>
    <div className={styles.para}>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin</p>
    </div>
    <div>
        <Animation></Animation>
    </div>
    <div className={styles.para}>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin</p>
    </div>
    <div>
    </div>
    <div>
        <p> &#169; This is copyright dummy text</p>
    </div>
    </div>
  );
}

export default CommingSoon;
