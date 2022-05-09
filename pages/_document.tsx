import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* local Font */}
          <link
            rel="preload"
            href="/fonts/Caveat.ttf"
            as="font"
            crossOrigin=""
            type="font/ttf"
          />
          <link
            as="font"
            href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@400;700&display=swap"
            rel="preload"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
