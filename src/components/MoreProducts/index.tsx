import React from 'react'
import styles from './MoreProducts.module.scss'

export default function MoreProducts() {
  return (
    <div className={styles.products}>
      <section className={styles.products__title}>
        <div>
          <p>Produtos relacionados</p>
          <p>Ver todos</p>
        </div>
      </section>
    </div>
  )
}
