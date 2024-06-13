import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";

export type ResponseUpdateInput = {
  answer?: string | null;
  question?: QuestionWhereUniqueInput | null;
};
