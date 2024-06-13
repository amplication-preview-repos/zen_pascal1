import { ResponseCreateNestedManyWithoutQuestionsInput } from "./ResponseCreateNestedManyWithoutQuestionsInput";
import { SurveyWhereUniqueInput } from "../survey/SurveyWhereUniqueInput";

export type QuestionCreateInput = {
  responses?: ResponseCreateNestedManyWithoutQuestionsInput;
  survey?: SurveyWhereUniqueInput | null;
  text?: string | null;
};
