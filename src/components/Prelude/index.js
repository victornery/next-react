import React from 'react'
import styles from './prelude.css'
import cover from './cover-image.png'

const Prelude = () => (
    <section className={styles.prelude}>
        <div className="container container-flex">
            <div className={ styles.prelude__content }>
                <h2 className={ styles.prelude__title }>Pra ganhar descontos exclusivos, vem pro next</h2>
                <p className={ styles.prelude__about }>Não é programa de ponto. <wbr /> É só nosso jeitinho de te mimar {`<3`}</p>
            </div>
            <figure className={ styles.prelude__cover }>
                <img alt="Vem pro next" src={ cover } />
            </figure>
        </div>
    </section>
)

export default Prelude