import { StringFilter } from "../../util/StringFilter";
import { ResponseListRelationFilter } from "../response/ResponseListRelationFilter";
import { SurveyWhereUniqueInput } from "../survey/SurveyWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type QuestionWhereInput = {
  id?: StringFilter;
  responses?: ResponseListRelationFilter;
  survey?: SurveyWhereUniqueInput;
  text?: StringNullableFilter;
};
