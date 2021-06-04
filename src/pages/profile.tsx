/**
* Pages/ProfilePage
* @package pages
*/
import React from 'react'
import { NextPage, GetStaticProps } from 'next'
import cheerio from 'cheerio'
import hljs from 'highlight.js'
/* components */
import ProfileLayout from '@/components/templates/ProfileLayout'
/* types */
import { TableOfContentType } from '@/types/blog'
import { ProfileType } from '@/types/profile'
import { CategoryType } from '@/types/category' 
/* services */
import { getProfile } from '@/service/profile'
import { getCategories } from '@/service/categories'


/**
 * props
 */
type ProfilePageProps = {
  profile: ProfileType
  highlightedBody: string,
  tableOfContents: TableOfContentType[],
  categories: CategoryType[]
}

const ProfilePage: NextPage<ProfilePageProps> = (props: ProfilePageProps) => {
  const { profile, highlightedBody, tableOfContents, categories } = props

  return (
    <ProfileLayout profile={profile} highlightedBody={highlightedBody} tableOfContents={tableOfContents} categories={categories} />
  )
}

/**
 * getStaticProps
 * @returns
 */
export const getStaticProps: GetStaticProps = async () => {
  // プロフィールデータ取得
  const profile = await getProfile()
  // カテゴリーデータ取得
  const categoryData = await getCategories()

  const $ = cheerio.load(profile.body)
  $('pre code').each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text())
    $(elm).html(result.value)
    $(elm).addClass('hljs')
  })

  // 目次作成
  const headings = $('h1, h2, h3').toArray()
  const tableOfContents: TableOfContentType[] = headings.map((data: cheerio.Element) => {
    return {
      // @ts-ignore
      text: String(data.children[0].data),
      // @ts-ignore
      id: data.attribs.id,
      // @ts-ignore
      name: data.name,
    }
  })
  
  const props: ProfilePageProps = {
    profile: profile,
    highlightedBody: $.html(),
    tableOfContents,
    categories: categoryData
  }

  return { props }
}

export default ProfilePage