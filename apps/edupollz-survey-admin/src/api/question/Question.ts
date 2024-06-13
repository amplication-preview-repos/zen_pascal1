import { Response } from "../response/Response";
import { Survey } from "../survey/Survey";

export type Question = {
  createdAt: Date;
  id: string;
  responses?: Array<Response>;
  survey?: Survey | null;
  text: string | null;
  updatedAt: Date;
};
