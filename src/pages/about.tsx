/**
* Pages/AboutPage
* @package Component
*/
import React from 'react'
import { NextPage, GetStaticProps } from 'next'
import cheerio from 'cheerio'
import hljs from 'highlight.js'
/* services */
import { getAbout } from '@/service/about'
import { getCategories } from '@/service/categories'
/* components */
import AboutLayout from '@/components/templates/AboutLayout'
/* types */
import { AboutType } from '@/types/about'
import { TableOfContentType } from '@/types/blog'
import { CategoryType } from '@/types/category' 

/**
 * props
 */
type AboutPageProps = {
  about: AboutType,
  highlightedBody: string,
  tableOfContents: TableOfContentType[],
  categories: CategoryType[]
}

/**
 * @param props TProps
 * @returns
 */
const AboutPage: NextPage<AboutPageProps> = (props: AboutPageProps) => {
  const { about, highlightedBody, tableOfContents, categories } = props
  return (
    <AboutLayout about={about} highlightedBody={highlightedBody} tableOfContents={tableOfContents} categories={categories} />
  )
}

/**
 * getStaticProps
 * @returns
 */
 export const getStaticProps: GetStaticProps = async () => {
  // ブログ詳細データ取得
  const about = await getAbout()
  // カテゴリーデータ取得
  const categoryData = await getCategories()

  const $ = cheerio.load(about.body)
  $('pre code').each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text())
    $(elm).html(result.value)
    $(elm).addClass('hljs')
  })

  // 目次作成
  const headings = $('h1, h2, h3').toArray()
  const tableOfContents: TableOfContentType[] = headings.map((data: any) => {
    return {
      text: String(data.children[0].data),
      id: data.attribs.id,
      name: data.name,
    }
  })
  
  const props: AboutPageProps = {
    about: about,
    highlightedBody: $.html(),
    tableOfContents,
    categories: categoryData
  }

  return { props }
}

export default AboutPage