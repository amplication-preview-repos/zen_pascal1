/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Research as PrismaResearch } from "@prisma/client";

export class ResearchServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ResearchCountArgs, "select">): Promise<number> {
    return this.prisma.research.count(args);
  }

  async researchItems<T extends Prisma.ResearchFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ResearchFindManyArgs>
  ): Promise<PrismaResearch[]> {
    return this.prisma.research.findMany<Prisma.ResearchFindManyArgs>(args);
  }
  async research<T extends Prisma.ResearchFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ResearchFindUniqueArgs>
  ): Promise<PrismaResearch | null> {
    return this.prisma.research.findUnique(args);
  }
  async createResearch<T extends Prisma.ResearchCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ResearchCreateArgs>
  ): Promise<PrismaResearch> {
    return this.prisma.research.create<T>(args);
  }
  async updateResearch<T extends Prisma.ResearchUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ResearchUpdateArgs>
  ): Promise<PrismaResearch> {
    return this.prisma.research.update<T>(args);
  }
  async deleteResearch<T extends Prisma.ResearchDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ResearchDeleteArgs>
  ): Promise<PrismaResearch> {
    return this.prisma.research.delete(args);
  }
}
