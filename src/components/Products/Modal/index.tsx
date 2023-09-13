import React from 'react'
import styles from './Modal.module.scss'
import Image from 'next/image'

interface Modal {
  productName?: string
  descriptionShort?: string
  price?: string
  photo?: string
  setIsOpen: (e: boolean) => void
}

export default function Modal({ setIsOpen, productName, descriptionShort, price, photo }: Modal) {
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div>
            <img src={photo} alt="" />
          </div>
          <div className={styles.modal__info}>
            <img
              className={styles.modal__info__close}
              src="icons/close-button-png-30230.png"
              alt=""
              onClick={() => setIsOpen(false)}
            />
            <h2>{productName}</h2>
            <p className={styles.modal__info__price}>{`R$ ${price}`}</p>
            <p className={styles.modal__info__description}>{descriptionShort}</p>
            <span>Veja mais detalhes do produto {'>'} </span>
            <div className={styles.modal__info__quantity}>
              <img src="/icons/minus.svg" alt="" />
              <p>1</p>
              <img src="/icons/plus.svg" alt="" />
            </div>
            <button>COMPRAR</button>
          </div>
        </div>
      </div>
    </>
  )
}
