import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ResearchEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="abstract" multiline source="abstract" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
