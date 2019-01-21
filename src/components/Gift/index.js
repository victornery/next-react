import React, { Component } from 'react'
import styles from './gift.css'
import AppContext from 'utils/context'
import GiftItem from 'components/GiftItem'
import Modality from 'components/Modality'
import * as Icon from 'components/Icons'

class Gift extends Component {
   constructor(props) {
      super(props)

      this.state = {
         modalOpen: false,
         modality: 'credit',
         typeGift: 'Alimentação'
      }
   }

   handleModal = (node) => {
      e.preventDefault();
      console.log('Testando')
   }

   changeModality = (node) => {
      const { modality } = this.state
      const clicked = node.target.dataset.modality

      clicked && 
         clicked !== modality && this.setState({ modality: clicked })
   }

   changeType = (node) => {
      const { typeGift } = this.state
      const clicked = node.target.dataset.gift
      console.log(clicked)

      clicked && 
         clicked !== typeGift && this.setState({ typeGift: clicked })
   }

   render () {
      const { modality, typeGift } = this.state

      return (
         <section className={styles.gift}>
            <div className={styles.gift__presentation}>
               <div className="container">
                  <div className={styles.gift__header}>
                     <h2 className={styles.gift__title}>Apresentamos os Mimos</h2>
                     <p className={styles.gift__description}>Parceiros exclusivos com desconto só pra vc, que é next.</p>
                  </div>

                  <a onClick={ this.handleModal } className={styles.gift__rules} href="#">Regras de Uso</a>

                  <ul className={styles.gift__choose}>
                     <AppContext.Consumer>
                        {context => context.gifts.map((type) => (
                           <Modality onClick={this.changeModality} checked={ this.state.modality === type.modality ? true : false } name={type.title} category={type.modality} key={type.modality} />
                        ))
                        }
                     </AppContext.Consumer>
                  </ul>

                  <ul className={styles.gift__benefits}>
                        <AppContext.Consumer>
                              { context => context.gifts.map((type) => (
                                          type.modality === modality && 
                                                type.typeGifts.map(((gift) => (
                                                      <GiftItem onClick={this.changeType} name={ gift.title } icon={Icon[gift.icon]} key={gift.title} />
                                                )))
                                    ))
                              }      
                        </AppContext.Consumer>
                  </ul>
               </div>
            </div>

            <div className={styles.gift__discounts}>
               <ul className={styles.discounts}>
                  <AppContext.Consumer>
                        { context => context.gifts.map((type) => (
                                    type.modality === modality && 
                                          type.typeGifts.map(((gift) => (
                                                gift.title === typeGift &&
                                                gift.gifts.map((item) => {
                                                      return <GiftItem name={ item.title } icon={Icon[item.icon]} key={item.title} />
                                                })
                                          )))
                              ))
                        }      
                  </AppContext.Consumer>
               </ul>
            </div>
         </section>
      )
   }
}

export default Gift
