import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ResearchWhereInput = {
  abstract?: StringNullableFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
};
