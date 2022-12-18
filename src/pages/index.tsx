import type { GetStaticProps, NextPage } from 'next'
/* Layouts */
import DefaultLayout from '@/components/layouts/DefaultLayout'
/* Components */
import BlogCardList from '@/components/assembles/BlogCardList'
/* Types */
import { IBlog } from '@/types/index'

interface IHome {
  contents: IBlog[]
}

/* Mocks */
import { listMock } from './__mocks__'

const Home: NextPage<IHome> = ({ contents }) => {
  return (
    <DefaultLayout>
      <BlogCardList blogList={contents} />
    </DefaultLayout>
  )
}

export const getStaticProps: GetStaticProps = () => {
  const contents = listMock

  return {
    props: {
      contents,
    },
  }
}

export default Home
