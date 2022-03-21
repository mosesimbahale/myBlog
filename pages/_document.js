import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head><script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9042691303834139"
     crossorigin="anonymous"></script></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
