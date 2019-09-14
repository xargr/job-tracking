import App from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import Page from '../components/Page';
import JobContextProvider from '../components/context/JobContext';

const theme = {
  colors: {
    blue: '#2696f3',
    bg: '#f2f5fa'
  }
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <JobContextProvider>
        <Page>
          <Component {...pageProps} />
        </Page>
      </JobContextProvider>
    );
  }
}
