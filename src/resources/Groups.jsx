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
export const GroupList = (props) => (
  <List {...props} actions={<ListActions />}>
    <Datagrid rowClick={'show'}>
      <TextField source='id' />
      <TextField source='group' />
    </Datagrid>
  </List>
);

export const GroupShow = (props) => (
  <Show {...props} actions={<ShowActions />}>
    <SimpleShowLayout>
      <TextField source='id' />
      <TextField source='group' />
    </SimpleShowLayout>
  </Show>
);

export const GroupCreate = (props) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source='group' />
      </SimpleForm>
    </Create>
  );
};
