'use client'
import React, { useEffect, useState } from 'react'
import styles from './Products.module.scss'
import ProductsTemplate from './ProductsTemplate'
import Modal from './Modal'

type ProductInfo = {
  productName?: string
  descriptionShort?: string
  price?: string
  photo?: string
}

export default function Products() {
  const [products, setProducts] = useState([{}])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(
        'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json'
      )
      const productsList = await response.json()

      setProducts(productsList.products)
    }
    getProducts()
  }, [])

  function openModal() {
    if (isOpen === false) {
      setIsOpen(true)
    } else {
      setIsOpen(false)
    }
  }

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
      <section className={styles.products__templates}>
        {products.slice(0, 4).map((product: ProductInfo) => {
          return (
            <ProductsTemplate
              key={product.productName}
              descriptionShort={product.descriptionShort}
              photo={product.photo}
              openModal={openModal}
            />
          )
        })}
      </section>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </div>
  )
}
