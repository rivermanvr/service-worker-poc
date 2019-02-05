import React from 'react';
import { Route } from 'react-router-dom';

import Header from '../Header/Header'
import Results from '../Results/Results';

export default () => {
  return (
    <div>
      <Route path="/" render={ (router) => <Header router={ router } /> } />
      <Route path="/case1" render={ () => <Results case={ 1 } /> } />
      <Route path="/case2" render={ () => <Results case={ 2 } /> } />
      <Route path="/case3" render={ () => <Results case={ 3 } /> } />
    </div>
  )
};
