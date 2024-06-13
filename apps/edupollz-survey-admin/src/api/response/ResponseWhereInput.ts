import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";

export type ResponseWhereInput = {
  answer?: StringNullableFilter;
  id?: StringFilter;
  question?: QuestionWhereUniqueInput;
};
