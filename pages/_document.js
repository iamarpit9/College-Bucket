import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <meta
          name="description"
          content="College Bucket providing gju old Q paper, gju notes, etc"
        />

        <meta name="author" content="CollgeBucket" />

        <meta property="og:site_name" content="College Bucket" />
        <meta property="og:site" content="https://www.collegebucket.in" />
        <meta property="og:title" content="College Bucket" />
        <meta
          property="og:description"
          content="College Bucket providing gju old Q paper, gju notes, etc"
        />
        <meta property="og:image" content="" />
        <meta property="og:url" content="" />
        <meta property="og:type" content="article" />

        <title>CollegeBucket</title>

        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700&display=swap&subset=latin-ext"
          rel="stylesheet"
        />
        <link href="css/bootstrap.css" rel="stylesheet" />
        <link href="css/fontawesome-all.css" rel="stylesheet" />
        <link href="/css/swiper.css" rel="stylesheet" />
        <link href="css/magnific-popup.css" rel="stylesheet" />
        <link href="css/styles.css" rel="stylesheet" />
        <link href="css/internship.css" rel="stylesheet" />

        <link rel="icon" href="images/favicon.png" />
      </Head>
      <body data-spy="scroll" data-target=".fixed-top">
        <div class="spinner-wrapper">
          <div class="spinner">
            <div class="bounce1"></div>
            <div class="bounce2"></div>
            <div class="bounce3"></div>
          </div>
        </div>
        <Main />
        <NextScript />

        <script src="javascript/jquery.min.js"></script>
        <script src="javascript/popper.min.js"></script>
        <script src="javascript/bootstrap.min.js"></script>
        <script src="javascript/jquery.easing.min.js"></script>
        <script src="javascript/swiper.min.js"></script>
        <script src="javascript/jquery.magnific-popup.js"></script>
        <script src="javascript/validator.min.js"></script>
        <script src="javascript/scripts.js"></script>
      </body>
    </Html>
  );
}
