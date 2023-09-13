import React from 'react'
import styles from './Brands.module.scss'
import Image from 'next/image'

export default function Brands() {
  return (
    <div className={styles.brands}>
      <h1>Navegue por marcas</h1>
      <section>
        <Image src="/icons/vector.svg" alt="" width={90} height={90} />
        <img src="/icons/logo.svg" alt="" />
        <img src="/icons/logo.svg" alt="" />
        <img src="/icons/logo.svg" alt="" />
        <img src="/icons/logo.svg" alt="" />
        <img src="/icons/logo.svg" alt="" />
      </section>
    </div>
  )
}
