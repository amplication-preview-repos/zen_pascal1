import { Question } from "../question/Question";

export type Response = {
  answer: string | null;
  createdAt: Date;
  id: string;
  question?: Question | null;
  updatedAt: Date;
};
