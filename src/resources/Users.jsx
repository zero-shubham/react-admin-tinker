import React from 'react';
import { ListActions, ShowActions } from '../Actions';
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  Show,
  SimpleShowLayout,
  Create,
  SimpleForm,
  TextInput,
  SelectInput,
  ReferenceInput,
  ReferenceArrayInput,
  SelectArrayInput,
  Edit,
} from 'react-admin';

// actions={<ListActions hasCreate={true} />}
export const UserList = (props) => (
  <List {...props} actions={<ListActions />}>
    <Datagrid rowClick={'show'}>
      <TextField source='id' />
      <EmailField source='user_name' />
      <TextField source='group' />
    </Datagrid>
  </List>
);

export const UserShow = (props) => (
  <Show {...props} actions={<ShowActions />}>
    <SimpleShowLayout>
      <TextField source='id' />
      <EmailField source='user_name' />
      <TextField source='group' />
    </SimpleShowLayout>
  </Show>
);

export const UserCreate = (props) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source='user_name' />
        <TextInput source='password' />
        <ReferenceInput source='group' reference='groups'>
          <SelectInput optionText='group' optionValue='group' />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

export const UserEdit = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source='user_name' />
        <TextInput source='password' />
        <ReferenceInput source='group' reference='groups'>
          <SelectInput optionText='group' optionValue='group' />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
