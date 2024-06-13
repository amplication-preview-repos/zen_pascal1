import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ResearchService } from "./research.service";
import { ResearchControllerBase } from "./base/research.controller.base";

@swagger.ApiTags("research")
@common.Controller("research")
export class ResearchController extends ResearchControllerBase {
  constructor(protected readonly service: ResearchService) {
    super(service);
  }
}
