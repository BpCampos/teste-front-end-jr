import React from 'react'
import styles from './Categories.module.scss'
import Image from 'next/image'

export default function Categories() {
  return (
    <section className={styles.categories}>
      <div>
        <Image src="/images/categories/monitorar-tablet-e-smartohone 1.png" alt="" width={61} height={61} />
        <p>Tecnologia</p>
      </div>
      <div>
        <Image src="/images/categories/supermercados 1.png" alt="" width={61} height={61} />
        <p>Supermercado</p>
      </div>
      <div>
        <Image src="/images/categories/whiskey.png" alt="" width={61} height={61} />
        <p>Bebidas</p>
      </div>
      <div>
        <Image src="/images/categories/ferramentas 1.png" alt="" width={61} height={61} />
        <p>Ferramentas</p>
      </div>
      <div>
        <Image src="/images/categories/cuidados-de-saude 1.png" alt="" width={61} height={61} />
        <p>Saúde</p>
      </div>
      <div>
        <Image src="/images/categories/corrida 1.png" alt="" width={61} height={61} />
        <p>Esportes e Fitness</p>
      </div>
      <div>
        <Image src="/images/categories/moda 1.png" alt="" width={61} height={61} />
        <p>Moda</p>
      </div>
    </section>
  )
}
