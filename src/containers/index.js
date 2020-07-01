import React from 'react';
import LazyComponent from '@/components/LazyComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useAppContext } from '@/contexts/app';

const HomePage = LazyComponent(() => import('./HomePage'));
const Scripts = LazyComponent(() => import('./Scripts'));
const ConfigKeys = LazyComponent(() => import('./ConfigKeys'));
const SettingsPage = LazyComponent(() => import('./SettingsPage'));
const AuthenticationPage = LazyComponent(() => import('./AuthenticationPage'));

const Containers = () => {
  const { authenticated } = useAppContext();

  return (
    <>
      <div>
        {!authenticated ? (
          <>
            <Switch>
              <Route exact path="/:authType" component={AuthenticationPage} />
              <Route path="*" render={() => <Redirect to="/sign-in" />} />
            </Switch>
          </>
        )
        :
        (
          <>
            <Switch>
              <Route path="/scripts" component={Scripts} />
              <Route path="/config-keys" component={ConfigKeys} />
              <Route path="/settings" component={SettingsPage} />
              <Route exact path="/" component={HomePage} />
            </Switch>
          </>
        )}
      </div>
    </>
  );
};

export default Containers;
