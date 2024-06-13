import { SortOrder } from "../../util/SortOrder";

export type QuestionOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  surveyId?: SortOrder;
  text?: SortOrder;
  updatedAt?: SortOrder;
};
