import { FC } from 'react'
import Link from 'next/link'
/* Const */
import { ARIA_LABEL } from './const'
/* Hooks */
import useSitemapData from '@/hooks/useSitemapData'

const Sitemap: FC = () => {
  const { sitemap } = useSitemapData()

  return (
    <section aria-label={ARIA_LABEL}>
      {sitemap.length && (
        <>
          {sitemap.map((parent) => (
            <div key={parent.id}>
              <Link href={parent.url}>{parent.name}</Link>

              {parent.children.length ? (
                <>
                  {parent.children.map((children) => (
                    <div key={children.id}>
                      <Link href={children.url}>{children.name}</Link>

                      {children.blogs.length ? (
                        <>
                          {children.blogs.map((blog) => (
                            <div key={blog.title}>
                              <Link href={blog.url}>{blog.title}</Link>
                            </div>
                          ))}
                        </>
                      ) : null}
                    </div>
                  ))}
                </>
              ) : null}
            </div>
          ))}
        </>
      )}
    </section>
  )
}

export default Sitemap
export * from './const'
