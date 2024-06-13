import { QuestionUpdateManyWithoutSurveysInput } from "./QuestionUpdateManyWithoutSurveysInput";

export type SurveyUpdateInput = {
  description?: string | null;
  questions?: QuestionUpdateManyWithoutSurveysInput;
  status?: "Option1" | null;
  title?: string | null;
};
