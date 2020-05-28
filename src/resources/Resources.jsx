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
export const ResourceList = (props) => (
  <List {...props} actions={<ListActions />}>
    <Datagrid rowClick={'show'}>
      <TextField source='id' />
      <TextField source='resource_table' />
      <TextField source='resource_name' />
    </Datagrid>
  </List>
);

export const ResourceShow = (props) => (
  <Show {...props} actions={<ShowActions />}>
    <SimpleShowLayout>
      <TextField source='id' />
      <TextField source='resource_table' />
      <TextField source='resource_name' />
    </SimpleShowLayout>
  </Show>
);
