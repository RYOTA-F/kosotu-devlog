import type { GetStaticProps, NextPage } from 'next'
/* Layouts */
import DefaultLayout from '@/components/layouts/DefaultLayout'
/* Components */
import BlogCardList from '@/components/assembles/BlogCardList'
import { defaultProps } from '@/components/assembles/BlogCardList/__mocks__'
/* Types */
import { IBlog } from '@/types/index'

interface IHome {
  contents: IBlog[]
}

const Home: NextPage<IHome> = ({ contents }) => {
  return (
    <DefaultLayout>
      <BlogCardList contents={contents} />
    </DefaultLayout>
  )
}

export const getStaticProps: GetStaticProps = () => {
  const contents = defaultProps.contents

  return {
    props: {
      contents,
    },
  }
}

export default Home
