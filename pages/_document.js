import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
            <meta name="apple-mobile-web-app-capable" content="yes"></meta>
            <meta name="mobile-web-app-capable" content="yes"></meta>
            <link rel="manifest" href="/manifest.json"></link>
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