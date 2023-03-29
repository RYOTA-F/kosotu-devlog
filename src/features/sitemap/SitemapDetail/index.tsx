import { FC } from 'react'
/* Components */
import { H1 } from '@/components/Elements/Heading'
import SitemapItem from '@/features/sitemap/SitemapItem'
/* Const */
import { SITE, SITEMAP, PAGE } from '@/const/index'
import { TITLE, ARIA_LABEL } from './const'
/* Hooks */
import useSitemapData from '@/hooks/useSitemapData'

const SitemapDetail: FC = () => {
  const { sitemap } = useSitemapData()

  return (
    <section aria-label={ARIA_LABEL}>
      <H1>{TITLE}</H1>
      {sitemap.length && (
        <ul className="mb-5">
          <SitemapItem type={SITEMAP.TOP} label={SITE.TITLE} url={PAGE.ROOT} />

          {/* 親カテゴリ */}
          {sitemap.map((parent) => (
            <li key={parent.id} className="mt-2 ml-6">
              <SitemapItem
                type={SITEMAP.PARENT}
                label={parent.name}
                url={parent.url}
              />

              {/* 子カテゴリ */}
              {parent.children.length ? (
                <ul className="mb-5">
                  {parent.children.map((children) => (
                    <li key={children.id} className="mt-2 ml-6">
                      <SitemapItem
                        type={SITEMAP.CHILDREN}
                        label={children.name}
                        url={children.url}
                      />

                      {/* 投稿 */}
                      {children.blogs.length ? (
                        <ul className="mb-5">
                          {children.blogs.map((blog) => (
                            <li key={blog.title} className="mt-2 ml-6">
                              <SitemapItem
                                type={SITEMAP.BLOG}
                                label={blog.title}
                                url={blog.url}
                              />
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default SitemapDetail
export * from './const'
