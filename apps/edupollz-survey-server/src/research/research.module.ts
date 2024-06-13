import { Module } from "@nestjs/common";
import { ResearchModuleBase } from "./base/research.module.base";
import { ResearchService } from "./research.service";
import { ResearchController } from "./research.controller";
import { ResearchResolver } from "./research.resolver";

@Module({
  imports: [ResearchModuleBase],
  controllers: [ResearchController],
  providers: [ResearchService, ResearchResolver],
  exports: [ResearchService],
})
export class ResearchModule {}
