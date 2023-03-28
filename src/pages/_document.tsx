import { Html, Head, Main, NextScript } from 'next/document'
import { FontLoader } from 'next/font'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

render() {
  return (
    <Html lang="en">
      <FontLoader urls={['/fonts/SpaceMono-Regular.ttf']} />
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
    )
  }
}

export default MyDocument
