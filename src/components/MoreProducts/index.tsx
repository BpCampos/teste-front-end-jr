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
      <section className={styles.products__banners}>
        <div>
          <img src="/images/image 101.png" alt="" />
          <article>
            <p>Produtos</p>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
            <button>CONFIRA</button>
          </article>
        </div>
        <div>
          <img src="/images/image 101.png" alt="" />
          <article>
            <p>Produtos</p>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
            <button>CONFIRA</button>
          </article>
        </div>
      </section>
    </div>
  )
}
