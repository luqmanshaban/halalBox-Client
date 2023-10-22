import React from 'react'
import styles from './Loading.module.css'

const Loading = () => {
  return (
    <div className='flex justify-center items-center'>
        <div className={styles.lds_spinner}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Loading