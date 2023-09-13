import React from 'react'
import styles from './Partners.module.scss'
import Image from 'next/image'

export default function Partners() {
  return (
    <div className={styles.partners}>
      <section>
        <div>
          <p>Parceiros</p>
          <p>Lorem ipsum dolor sit amet, consectetur</p>
          <button>CONFIRA</button>
        </div>
        <Image src="/images/image 45.png" alt="" width={570} height={330} />
      </section>
      <section>
        <div>
          <p>Parceiros</p>
          <p>Lorem ipsum dolor sit amet, consectetur</p>
          <button>CONFIRA</button>
        </div>
        <Image src="/images/image 45.png" alt="" width={590} height={330} />
      </section>
    </div>
  )
}
