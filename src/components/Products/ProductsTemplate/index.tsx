import React from 'react'
import styles from './ProductsTemplate.module.scss'

interface Product {
  productName?: string
  descriptionShort?: string
  price?: string
  photo?: string
}

export default function ProductsTemplate({ productName, descriptionShort, price, photo }: Product) {
  return (
    <div className={styles.template}>
      <img src={photo} alt="" />
      <p>{descriptionShort}</p>
      <p>R$ 30,90</p>
      <p className={styles.template__price}>R$ 28,90</p>
      <p>ou 2x de R$ 49,95 sem juros</p>
      <p>Frete grátis</p>
      <button>Comprar</button>
    </div>
  )
}
