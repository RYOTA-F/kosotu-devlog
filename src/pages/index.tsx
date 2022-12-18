/* Layouts */
import DefaultLayout from '@/components/layouts/DefaultLayout'
/* Components */
import BlogCardList from '@/components/assembles/BlogCardList'
import { defaultProps } from '@/components/assembles/BlogCardList/__mocks__'

const Home = () => {
  return (
    <DefaultLayout>
      <BlogCardList {...defaultProps} />
    </DefaultLayout>
  )
}

export default Home
