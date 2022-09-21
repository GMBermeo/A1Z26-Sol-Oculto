import Document, { Html, Head, NextScript, Main } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="robots" content="all" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "http://schema.org",
                "@type": "Person",
                name: "Guilherme Bermêo",
                url: "https://a1z26.bermeo.dev/",
                sameAs: [
                  "https://github.com/GMBermeo",
                  "https://www.linkedin.com/in/gmbermeo/",
                  "https://guilhermebermeo.com",
                  "https://gmbermeo.com",
                  "https://bermeo.com.br",
                  "https://open.spotify.com/artist/4cdJMNyV0fp9j3RjKosbFd",
                  "https://www.youtube.com/channel/UCSsc5f356wsiB8OlNcya3zA",
                  "https://www.instagram.com/guilherme.bermeo",
                  "https://www.deezer.com/artist/101164342?utm_source=deezer&utm_content=artist-101164342&utm_term=3783706082_1596109592&utm_medium=web",
                  "https://music.apple.com/br/artist/guilherme-bermeo/1522907458?uo=4&app=music",
                  "https://play.google.com/store/music/artist/Guilherme_Bermeo?id=Asdnaa4jt7s5g7sc24obfigamr4",
                  "https://guilhermebermeo.bandcamp.com/",
                  "https://www.behance.net/guilhermebermeo",
                  "https://music.163.com/#/artist?id=36028747",
                  "http://www.kuwo.cn/singer_detail/5532015",
                  "https://y.qq.com/n/yqq/singer/002TUXMq1927t7.html",
                ],
                email: "mailto:guilherme@bermeo.dev",
                image: "/avatar1.jpg",
                jobTitle: "Front-end Developer",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Brasília",
                  addressRegion: "DF",
                },
              }),
            }}
          />
          <meta name="author" content="Guilherme Bermêo" />
          <title>A1Z26 - O Enigma do Sol Oculto</title>
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
          <meta
            name="description"
            content="A1Z26 tool to assist 'O Enigma do Sol Oculto players', convert letters to numbers. Numbering the letters so A=1, Z=26, etc is one of the simplest ways of converting them to numbers."
          />
          <link
            rel="canonical"
            href="https://a1z26.bermeo.dev/"
            key="canonical"
          />
          <meta name="language" content="English" />
          <meta
            name="keywords"
            content="A1Z26, O Enigma do Sol Oculto, Jambô, Livro Jogo, Tool, Cipher, Cypher, Convert, Letters, Numbers, A=1, Z=26, Karen Soarele, Bermeo"
          />
          <link rel="manifest" href="/manifest.json"></link>
          {/* Global Site Tag (gtag.js) - Google Analytics
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
          </Script> */}
        </Head>
        <body>
          <Main />
          <NextScript />
          <script type="application/ld+json"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
