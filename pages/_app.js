import App, { Container } from 'next/app';
import Page from '../components/Page';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <div className="wrapper">
          <Page>
            <Component {...pageProps} />
          </Page>
        </div>
      </Container>
    );
  }
}

export default MyApp;
