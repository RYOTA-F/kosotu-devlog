import React from 'react'
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
  DocumentInitialProps,
} from 'next/document'
import { googleTagManagerId } from '@/libs/gtag'

import createEmotionServer from '@emotion/server/create-instance'
import { cache } from '@emotion/css'

export const renderStatic = (html: string) => {
  if (html === undefined) {
    throw new Error('did you forget to return html from renderToString?')
  }
  const { extractCritical } = createEmotionServer(cache)
  const { ids, css } = extractCritical(html)

  return { html, ids, css }
}

export default class CustomDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const page = await ctx.renderPage()
    const { css, ids } = await renderStatic(page.html)
    const initialProps = await Document.getInitialProps(ctx)

    return {
      ...initialProps,
      styles: (
        <React.Fragment>
          {initialProps.styles}
          <style
            data-emotion={`css ${ids.join(' ')}`}
            dangerouslySetInnerHTML={{ __html: css }}
          />
        </React.Fragment>
      ),
    }
  }

  render(): JSX.Element {
    return (
      <Html prefix="og: https://ogp.me/ns#">
        <Head />
        <body>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `
              <iframe
                src="https://www.googletagmanager.com/ns.html?id=${googleTagManagerId}"
                height="0"
                width="0"
                style="display:none;visibility:hidden"
              />`,
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
