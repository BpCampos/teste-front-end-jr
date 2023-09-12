import React from 'react'
import styles from './Header.module.scss'
import Image from 'next/image'
import HeaderIcons from './HeaderIcons'

export default function Header() {
  return (
    <header>
      <section className={styles.containerTop}>
        <div className={styles.subGroup}>
          <img src="icons/shield.svg" alt="" />
          <p>
            Compra <strong className={styles.pinkText}>100% segura</strong>
          </p>
        </div>
        <div className={styles.subGroup}>
          <Image className={styles.truck} src="icons/truck.svg" alt="" width="30" height="30" />
          <p>
            <strong className={styles.pinkText}>Frete grátis</strong> acima de R$ 200
          </p>
        </div>
        <div className={styles.subGroup}>
          <img src="icons/card.svg" alt="" />
          <p>
            <strong className={styles.pinkText}>Parcele</strong> suas compras
          </p>
        </div>
      </section>
      <section className={styles.containerMiddle}>
        <img src="icons/logo.svg" alt="" />
        <form action="">
          <input type="search" name="search" id="search" placeholder="O que você está buscando?" />
          <button>
            <img src="icons/search.svg" alt="" />
          </button>
        </form>
        <div className={styles.containerMiddle__icons}>
          <HeaderIcons iconPath="icons/box.svg" />
          <HeaderIcons iconPath="icons/heart.svg" />
          <HeaderIcons iconPath="icons/userCircle.svg" />
          <HeaderIcons iconPath="icons/shoppingCart.svg" />
        </div>
      </section>
      <section className={styles.containerBottom}>
        <div>
          <p>TODAS AS CATEGORIAS</p>
        </div>
        <div>
          <p>SUPERMERCADO</p>
        </div>
        <div>
          <p>LIVROS</p>
        </div>
        <div>
          <p>MODA</p>
        </div>
        <div>
          <p>LANÇAMENTOS</p>
        </div>
        <div>
          <p className={styles.pinkText}>OFERTAS DO DIA</p>
        </div>
        <div>
          <Image src="icons/crown.svg" alt="" width={20} height={20} />
          <p>ASSINATURA</p>
        </div>
      </section>
    </header>
  )
}
