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
  categories: CategoryType[]
}

const ProfilePage: NextPage<ProfilePageProps> = (props: ProfilePageProps) => {
  const { profile, highlightedBody, categories } = props

  return (
    <ProfileLayout profile={profile} highlightedBody={highlightedBody} categories={categories} />
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

  const props: ProfilePageProps = {
    profile: profile,
    highlightedBody: $.html(),
    categories: categoryData
  }

  return { props }
}

export default ProfilePage