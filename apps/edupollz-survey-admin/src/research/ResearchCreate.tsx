import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ResearchCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="abstract" multiline source="abstract" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
