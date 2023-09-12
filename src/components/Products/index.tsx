import React from 'react'
import styles from './Products.module.scss'

export default function Products() {
  return (
    <div className={styles.products}>
      <section className={styles.products__title}>
        <div>
          <p>Produtos relacionados</p>
        </div>
      </section>
      <section className={styles.products__navBar}>
        <div>CELULAR</div>
        <div>ACESSÓRIOS</div>
        <div>TABLETS</div>
        <div>NOTEBOOKS</div>
        <div>TVS</div>
        <div>VER TODOS</div>
      </section>
      <section></section>
    </div>
  )
}
