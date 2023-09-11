import React from 'react'
import styles from './Header.module.scss'
import Image from 'next/image'

export default function Header() {
  return (
    <header>
      <section className={styles.container}>
        <div className={styles.subGroup}>
          <img src="" alt="" />
          <p>Compra 100% segura</p>
        </div>
        <div className={styles.subGroup}>
          <Image className={styles.truck} src="icons/truck.svg" alt="" width="30" height="30" />
          <p>
            <strong className={styles.pinkText}>Frete grátis</strong> acima de R$ 200
          </p>
        </div>
        <div className={styles.subGroup}>
          <img src="" alt="" />
          <p>Parcele suas compras</p>
        </div>
      </section>
      <section></section>
    </header>
  )
}
