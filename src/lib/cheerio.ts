import cheerio from 'cheerio'
import hljs from 'highlight.js'
import 'highlight.js/styles/base16/edge-dark.css'
/* Types */
import { IBlog } from '@/types/microCMS/blog'

/**
 * 投稿本文をパース
 */
export const perseBlogBody = (contents: IBlog['body']) => {
  // HTMLを読み取り
  const $ = cheerio.load(contents, { _useHtmlParser2: true })

  // pre > code タグをパース
  $('pre code').each((_, element) => {
    const result = hljs.highlightAuto($(element).text())
    $(element).html(result.value)
    $(element).addClass('hljs')
  })

  return $.html()
}
