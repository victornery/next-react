import React from 'react'
import styles from './saving.css'
import SavingItem from 'components/SavingItem'
import Cover from 'components/Cover'

const Saving = () => (
   <section className={styles.saving}>
      <div className='container'>
         <h2 className={styles.saving__title}>É só ter conta no next que sobra $ de verdade</h2>

         <ul className={styles.saving__brands}>

            {/* <SavingItem icon={} offer={} description={} /> */}

         </ul>

         <Cover alt="Sobra grana mesmo. É só ter conta no next. Ainda dá tempo." />

      </div>
   </section>
)

export default Saving
