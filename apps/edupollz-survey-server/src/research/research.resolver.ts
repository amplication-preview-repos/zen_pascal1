import * as graphql from "@nestjs/graphql";
import { ResearchResolverBase } from "./base/research.resolver.base";
import { Research } from "./base/Research";
import { ResearchService } from "./research.service";

@graphql.Resolver(() => Research)
export class ResearchResolver extends ResearchResolverBase {
  constructor(protected readonly service: ResearchService) {
    super(service);
  }
}
