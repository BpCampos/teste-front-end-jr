import Image from 'next/image'
import React from 'react'
import styles from './Banner.module.scss'

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div>
        <p>Venha conhecer nossas promoções</p>
        <p>50% Off nos produtos </p>
        <button>Ver produto</button>
      </div>
      <Image src="/images/banner.png" alt="" width={1440} height={390} />
    </div>
  )
}
