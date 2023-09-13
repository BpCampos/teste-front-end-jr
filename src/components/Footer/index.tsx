import React from 'react'
import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <div className={styles.footer}>
      <section className={styles.footer__footerTop}>
        <div className={styles.footer__leftContent}>
          <div>
            <div>
              <h3>Sobre nós</h3>
              <p>CONHEÇA</p>
              <p>COMO COMPRAR</p>
              <p>INDICAÇÃO E DESCONTO</p>
            </div>
            <img src="/images/redes_sociais.png" alt="" />
          </div>
          <div>
            <h3>INFORMAÇÕES ÚTEIS</h3>
            <p>FALE CONOSCO</p>
            <p>DÚVIDAS</p>
            <p>PRAZOS DE ENTREGA</p>
            <p>FORMAS DE PAGAMENTO</p>
            <p>POLÍTICA DE PRIVACIDADE</p>
            <p>TROCAS E SOLUÇÕES</p>
          </div>
          <div>
            <h3>FORMAS DE PAGAMENTO</h3>
            <div>
              <img src="/images/formas_pagamento.png" alt="" />
            </div>
          </div>
        </div>
        <div className={styles.footer__novidades}>
          <h2>
            CADASTRE-SE E RECEBA NOSSAS <strong>NOVIDADES E PROMOÇÕES</strong>
          </h2>
          <p>Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum</p>
          <div>
            <input type="text" placeholder="SEU E-MAIL" />
            <button>OK</button>
          </div>
        </div>
      </section>
      <section className={styles.footer__footerBottom}>
        <div>
          <div>
            <p>
              COPYRIGHT © 2019. TODOS OS DIREITOS RESERVADOS. TODAS AS MARCAS E SUAS IMAGENS SÃO DE PROPRIEDADE DE SEUS
              RESPECTIVOS DONOS. É VEDADA A REPRODUÇÃO, TOTAL OU PARCIAL, DE QUALQUER CONTEÚDO SEM EXPRESSA AUTORIZAÇÃO.
            </p>
          </div>
          <div>
            <img src="/images/Group 831.png" alt="" />
          </div>
        </div>
      </section>
    </div>
  )
}
