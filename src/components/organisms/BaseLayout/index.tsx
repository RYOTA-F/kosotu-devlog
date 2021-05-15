/**
 * Templates/BaseLayout
 * @package Component
 */
import React from 'react'
/* component */
import Header from '@/components/organisms/Header'
import Footer from '@/components/organisms/Footer'
/* styles */
import styles from './styles.module.scss'

/**
 * Props
 */
export type TProps = {
  children: React.ReactNode
}

/**
 * BaseLayout
 * @param props
 * @returns
 */
const BaseLayout: React.FC = () => {
  
  return (
    <>
      <Header />
      <div className={styles.headerSpace} />
      <div className={styles.dummy}></div>
      <Footer />
    </>
  )
}

export default BaseLayout