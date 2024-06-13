import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";

export type ResponseCreateInput = {
  answer?: string | null;
  question?: QuestionWhereUniqueInput | null;
};
