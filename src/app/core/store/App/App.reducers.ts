import {ActionReducerMap} from '@ngrx/store';
import {IAppState} from './App.state';
import {userReducers} from '../user/user.reducers';
import {configReducers} from '../Config/Config.reducers';
import {routerReducer} from '@ngrx/router-store';
import {authReducers} from '../auth/auth.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  auth: authReducers,
  users: userReducers,
  config: configReducers,
};

