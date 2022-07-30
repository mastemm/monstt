import * as React from "react";
import {
  Datagrid,
  List,
  TextField,
  TextInput,
  DeleteButton,
  Edit,
  SimpleForm,
  Create,
} from "react-admin";

export function ContentList() {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="body" />
        <TextField source="author" />
        <TextField source="date" />
        <DeleteButton />
      </Datagrid>
    </List>
  );
}
export function ContentEdit() {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="id" />
        <TextInput source="title" />
        <TextInput source="body" />
        <TextInput source="author" />
        <TextInput source="date" />
      </SimpleForm>
    </Edit>
  );
}
export function ContentCreate() {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="title" />
        <TextInput source="id" />
        <TextInput source="body" />
        <TextInput source="author" />
        <TextInput source="date" />
      </SimpleForm>
    </Create>
  );
}
