import { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

export const config = { runtime: 'experimental-edge' }

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
