/**
 * templates/TopLayout
 * Templates
 * @package Component
 */
import React from 'react'
/* component */
import Header from '@/components/organisms/Header'

/**
 * container
 * @param prop
 * @returns
 */
const TopLayout: React.FC = () => {
  return (
    <>
      <Header />
    </>
  )
}

export default TopLayout