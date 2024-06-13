import { Question } from "../question/Question";

export type Survey = {
  createdAt: Date;
  description: string | null;
  id: string;
  questions?: Array<Question>;
  status?: "Option1" | null;
  title: string | null;
  updatedAt: Date;
};
