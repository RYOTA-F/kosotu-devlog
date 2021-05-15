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
export type BaseLayoutProps = {
  children: React.ReactNode
}

/**
 * BaseLayout
 * @param props
 * @returns
 */
const BaseLayout: React.FC<BaseLayoutProps> = (props: BaseLayoutProps) => {
  
  return (
    <>
      <Header />
      <div className={styles.headerSpace} />
      { props.children}
      <Footer />
    </>
  )
}

export default BaseLayout