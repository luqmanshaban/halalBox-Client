import React from 'react'
import styles from './PageLoading.module.css'

const skeleton = (
<div className='flex itemc-center gap-x-2'>
        <div className={styles.wrapper}>
          <div className={styles.card_loader}></div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.card_loader}></div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.card_loader}></div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.card_loader}></div>
        </div>
    </div>
)
const PageLoading = () => {
  return (
    <div className='flex flex-col'>
        {skeleton}
        {skeleton}
        {skeleton}
    </div>
  )
}

export default PageLoading