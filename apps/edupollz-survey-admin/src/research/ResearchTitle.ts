import { Research as TResearch } from "../api/research/Research";

export const RESEARCH_TITLE_FIELD = "title";

export const ResearchTitle = (record: TResearch): string => {
  return record.title?.toString() || String(record.id);
};
