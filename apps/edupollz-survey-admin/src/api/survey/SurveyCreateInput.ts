import { QuestionCreateNestedManyWithoutSurveysInput } from "./QuestionCreateNestedManyWithoutSurveysInput";

export type SurveyCreateInput = {
  description?: string | null;
  questions?: QuestionCreateNestedManyWithoutSurveysInput;
  status?: "Option1" | null;
  title?: string | null;
};
