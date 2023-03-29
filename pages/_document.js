import { Html,Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      {/* <Head /> */}
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;800&display=swap" rel="stylesheet"/>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-N9WX3T15YC"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-N9WX3T15YC');
              `,
            }}
          />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
