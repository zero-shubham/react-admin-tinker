import React, { useState } from 'react';
import { Admin, Resource } from 'react-admin';
import { authProvider } from './providers/AuthProvider';
import { dataProvider } from './providers/DataProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import { colors } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { CustomLoginPage } from './pages/LoginPage';
import { UserCreate, UserEdit, UserList, UserShow } from './resources/Users';
import { GroupList, GroupShow, GroupCreate } from './resources/Groups';
import {
  PermissionCreate,
  PermissionList,
  PermissionShow,
} from './resources/Permissions';
import { ResourceList, ResourceShow } from './resources/Resources';
import './App.css';

export const Context = React.createContext();

const styles = {
  main: {
    background:
      'url(https://images.pexels.com/photos/6966/abstract-music-rock-bw.jpg?crop=entropy&cs=srgb&dl=audio-e-guitars-guitars-music-6966.jpg&fit=crop&fm=jpg&h=853&w=1280)',
    backgroundSize: 'cover',
  },
};

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark', // Switching the dark mode on is a single property value change.
  },
});

const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: colors.blueGrey,
    secondary: colors.indigo,
  },
});

function App() {
  const [themeState, setThemeState] = useState('light');
  return (
    <Context.Provider
      value={{
        themeState,
        setThemeState,
      }}
    >
      <Admin
        theme={themeState === 'light' ? lightTheme : darkTheme}
        dataProvider={dataProvider}
        authProvider={authProvider}
        loginPage={withStyles(styles)(CustomLoginPage)}
      >
        <Resource
          name='users'
          list={UserList}
          show={UserShow}
          create={UserCreate}
          edit={UserEdit}
        />
        <Resource
          name='groups'
          list={GroupList}
          show={GroupShow}
          create={GroupCreate}
        />
        <Resource
          name='permissions'
          list={PermissionList}
          show={PermissionShow}
          create={PermissionCreate}
        />
        <Resource name='resources' list={ResourceList} show={ResourceShow} />
      </Admin>
    </Context.Provider>
  );
}

export default App;
