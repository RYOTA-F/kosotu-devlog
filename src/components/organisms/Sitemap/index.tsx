import { FC } from 'react'
/* Components */
import { H1 } from '@/components/atoms/Heading'
import SitemapItem from '@/components/atoms/SItemapItem'
/* Const */
import { SITE, SITEMAP, PAGE } from '@/const/index'
import { TITLE, ARIA_LABEL } from './const'
/* Hooks */
import useSitemapData from '@/hooks/useSitemapData'
/* Styles */
import { SitemapWrapper, List, ListItem } from './index.styles'

const Sitemap: FC = () => {
  const { sitemap } = useSitemapData()

  return (
    <SitemapWrapper aria-label={ARIA_LABEL}>
      <H1>{TITLE}</H1>
      {sitemap.length && (
        <List>
          <SitemapItem type={SITEMAP.TOP} label={SITE.TITLE} url={PAGE.ROOT} />

          {/* 親カテゴリ */}
          {sitemap.map((parent) => (
            <ListItem key={parent.id}>
              <SitemapItem
                type={SITEMAP.PARENT}
                label={parent.name}
                url={parent.url}
              />

              {/* 子カテゴリ */}
              {parent.children.length ? (
                <List>
                  {parent.children.map((children) => (
                    <ListItem key={children.id}>
                      <SitemapItem
                        type={SITEMAP.CHILDREN}
                        label={children.name}
                        url={children.url}
                      />

                      {/* 投稿 */}
                      {children.blogs.length ? (
                        <List>
                          {children.blogs.map((blog) => (
                            <ListItem key={blog.title}>
                              <SitemapItem
                                type={SITEMAP.BLOG}
                                label={blog.title}
                                url={blog.url}
                              />
                            </ListItem>
                          ))}
                        </List>
                      ) : null}
                    </ListItem>
                  ))}
                </List>
              ) : null}
            </ListItem>
          ))}
        </List>
      )}
    </SitemapWrapper>
  )
}

export default Sitemap
export * from './const'
