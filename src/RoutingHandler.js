import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MyPage from '../src/components/react-with-redux/page';

const Main = () => (
    <main className='container'>
      <Switch>
          <Route exact path='/list' component={MyPage}/>          
      </Switch>
    </main>
  )
  export default Main;