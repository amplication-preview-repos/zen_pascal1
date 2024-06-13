import { ResponseUpdateManyWithoutQuestionsInput } from "./ResponseUpdateManyWithoutQuestionsInput";
import { SurveyWhereUniqueInput } from "../survey/SurveyWhereUniqueInput";

export type QuestionUpdateInput = {
  responses?: ResponseUpdateManyWithoutQuestionsInput;
  survey?: SurveyWhereUniqueInput | null;
  text?: string | null;
};
