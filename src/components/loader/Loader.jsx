import React from 'react';
import { ColorRing } from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader = () => {

    return (
      <div className={styles.loaderContainer}>
        <ColorRing
          height="80"
          width="80"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass={styles.colorRingWrapper}
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
      </div>
    );
  }

export default Loader;