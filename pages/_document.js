import Document, {Head, Main, NextScript} from 'next/document';
import {ServerStyleSheet} from 'styled-components';
import Segment from '../components/Segment';

export default class MyDocument extends Document {
  static getInitialProps({renderPage}) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return {...page, styleTags};
  }

  render() {
    return (
      <html>
        <Head>
          {this.props.styleTags}
          <link
            href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css"
            rel="stylesheet"
            type="text/css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <Segment writeKey="zPpyFcjlzWuZNWPCoAMCRGZCmRsLqv5J" />
        </body>
      </html>
    );
  }
}
