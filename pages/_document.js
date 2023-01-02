import { Html, Head, Main, NextScript } from 'next/document'
import Link from 'next/link'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <link href='https://fonts.googleapis.com/css2?family=Mulish:wght@200;300;400;500;600;700;800;900;1000&display=swap' 
              rel='stylesheet'/>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
