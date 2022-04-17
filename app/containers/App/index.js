/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * Use this to setup navigation paths
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { HashRouter, Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <HashRouter basename={process.env.PUBLIC_URL}>
      <Helmet
        titleTemplate="%s - Tan Ting's Web Portfolio"
        defaultTitle="Tan Ting's web portfolio"
      >
        <meta name="description" content="Tan Ting's web portfolio" />
      </Helmet>
      <Header />
      <ContentWrapper>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={FeaturePage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </ContentWrapper>
      <Footer />
      <GlobalStyle />
      </HashRouter>
    </AppWrapper>
  );
}
