import React from 'react'
import styles from './Modal.module.scss'
import Image from 'next/image'

interface Modal {
  setIsOpen: (e: boolean) => void
}

export default function Modal({ setIsOpen }: Modal) {
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div>
            <Image src="" alt="" width={247} height={192} />
          </div>
          <div className={styles.modal__info}>
            <img
              className={styles.modal__info__close}
              src="icons/close-button-png-30230.png"
              alt=""
              onClick={() => setIsOpen(false)}
            />
            <h2>LOREM IPSUM DOLOR SIT AMET</h2>
            <p className={styles.modal__info__price}>R$ 1.499,90</p>
            <p className={styles.modal__info__description}>
              Many desktop publishing packages and web page editors now many desktop publishing
            </p>
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
