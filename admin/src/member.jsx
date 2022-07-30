import * as React from "react";
import {
  Datagrid,
  List,
  TextField,
  TextInput,
  DeleteButton,
  Edit,
  SimpleForm,
  NumberInput,
  Create,
} from "react-admin";

export function MemberList() {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="lastname" />
        <TextField source="firstname" />
        <TextField source="rank" />
        <TextField source="category" />
        <TextField source="points" />
        <TextField source="avatar" />
        <DeleteButton />
      </Datagrid>
    </List>
  );
}
export function MemberEdit() {
  return (
    <Edit>
      <SimpleForm>
        <NumberInput source="id" />
        <TextInput source="lastname" />
        <TextInput source="firstname" />
        <NumberInput source="rank" />
        <TextInput source="category" />
        <NumberInput source="points" />
        <TextInput source="avatar" />
      </SimpleForm>
    </Edit>
  );
}
export function MemberCreate() {
  return (
    <Create>
      <SimpleForm>
        <NumberInput source="id" />
        <TextInput source="lastname" />
        <TextInput source="firstname" />
        <NumberInput source="rank" />
        <TextInput source="category" />
        <NumberInput source="points" />
        <TextInput source="avatar" />
      </SimpleForm>
    </Create>
  );
}
