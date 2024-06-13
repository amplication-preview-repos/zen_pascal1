import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { QuestionListRelationFilter } from "../question/QuestionListRelationFilter";

export type SurveyWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  questions?: QuestionListRelationFilter;
  status?: "Option1";
  title?: StringNullableFilter;
};
