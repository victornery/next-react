import React, { Component } from 'react'
import styles from './gift.css'
import GiftItem from 'components/GiftItem'

class Gift extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isCredit: true
        }
    }

    render() {
        const { benefits } = this.props
        const { isCredit } = this.state

        return (
            <section className={ styles.gift }>
                <div className={ styles.gift__presentation }>
                    <div className="container">
                        <div className={ styles.gift__header }>
                            <h2 className={ styles.gift__title }>Apresentamos os Mimos</h2>
                            <p className={ styles.gift__description }>Parceiros exclusivos com desconto só pra vc, que é next.</p>
                        </div>
                        <a className={ styles.gift__rules } href="#">Regras de Uso</a>

                        <ul className={ styles.gift__choose }>
                            <li className={isCredit ? styles.gift__choosed : ''} >Crédito</li>
                            <li className={!isCredit ? styles.gift__choosed : ''}>Débito</li>
                        </ul>

                        <ul className={ styles.gift__benefits }>
                            { benefits &&
                                benefits.map((item) => {
                                    <GiftItem name={ item.title } icon={ item.icon } />
                                })
                            }
                        </ul>
                    </div>
                </div>

                <div className={ styles.gift__discounts }>
                    <ul className={ styles.discounts }>
                        
                    </ul>
                </div>
            </section>
        )
    }
}

export default Gift