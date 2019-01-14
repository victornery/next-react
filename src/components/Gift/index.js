import React from 'react'
import styles from './gift.css'

const Gift = () => (
    <section className={ styles.gifts }>
        <div className={ styles.gifts__presentation }>

            <h2 className={ styles.gifts__title }>Apresentamos os Mimos</h2>
            <p className={ styles.gifts__description }>Parceiros exclusivos com desconto só pra vc, que é next.</p>

            <a href="#">Regras de Uso</a>

            <ul>
                <li>Crédito</li>
                <li>Débito</li>
            </ul>

            <ul className={ styles.gifts__benefits }>
                <li>
                    <svg />
                    <span>Alimentação</span>
                </li>
                <li>
                    <svg />
                    <span>Compras</span>
                </li>
                <li>
                    <svg />
                    <span>Educação</span>
                </li>
                <li>
                    <svg />
                    <span>Entretenimento</span>
                </li>
                <li>
                    <svg />
                    <span>Serviços</span>
                </li>
                <li>
                    <svg />
                    <span>Transporte</span>
                </li>
                <li>
                    <svg />
                    <span>Viagens</span>
                </li>
            </ul>

        </div>

        <div className={ styles.gifts__discounts }>
            <ul>
                <li>
                    <svg />
                    <span>Até <strong>R$20</strong> off por mês</span>
                </li>
                <li>
                    <svg />
                    <span>Cupons <strong>exclusivos</strong> pra você</span>
                </li>
                <li>
                    <svg />
                    <span><strong>Desconto</strong> especial</span>
                </li>
            </ul>
        </div>

    </section>
)

export default Gift