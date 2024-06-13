import { ResearchWhereInput } from "./ResearchWhereInput";
import { ResearchOrderByInput } from "./ResearchOrderByInput";

export type ResearchFindManyArgs = {
  where?: ResearchWhereInput;
  orderBy?: Array<ResearchOrderByInput>;
  skip?: number;
  take?: number;
};
