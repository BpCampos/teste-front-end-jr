import React from 'react'
import styles from './ProductsTemplate.module.scss'

interface Product {
  productName?: string
  descriptionShort?: string
  price?: string
  photo?: string
  openModal: () => void
}

export default function ProductsTemplate({ openModal, productName, descriptionShort, price, photo }: Product) {
  return (
    <div className={styles.template} key={productName}>
      <img src={photo} alt="" />
      <p className={styles.template__name}>{descriptionShort}</p>
      <p className={styles.template__oldPrice}>R$ 30,90</p>
      <p className={styles.template__price}>R$ 28,90</p>
      <p className={styles.template__installment}>ou 2x de R$ 49,95 sem juros</p>
      <p className={styles.template__shipment}>Frete grátis</p>
      <button onClick={() => openModal()}>COMPRAR</button>
    </div>
  )
}
