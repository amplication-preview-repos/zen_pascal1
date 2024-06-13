/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Survey } from "./Survey";
import { SurveyCountArgs } from "./SurveyCountArgs";
import { SurveyFindManyArgs } from "./SurveyFindManyArgs";
import { SurveyFindUniqueArgs } from "./SurveyFindUniqueArgs";
import { CreateSurveyArgs } from "./CreateSurveyArgs";
import { UpdateSurveyArgs } from "./UpdateSurveyArgs";
import { DeleteSurveyArgs } from "./DeleteSurveyArgs";
import { QuestionFindManyArgs } from "../../question/base/QuestionFindManyArgs";
import { Question } from "../../question/base/Question";
import { SurveyCreateInput } from "./SurveyCreateInput";
import { SurveyWhereUniqueInput } from "./SurveyWhereUniqueInput";
import { SurveyUpdateInput } from "./SurveyUpdateInput";
import { SurveyService } from "../survey.service";
@graphql.Resolver(() => Survey)
export class SurveyResolverBase {
  constructor(protected readonly service: SurveyService) {}

  async _surveysMeta(
    @graphql.Args() args: SurveyCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Survey])
  async surveys(@graphql.Args() args: SurveyFindManyArgs): Promise<Survey[]> {
    return this.service.surveys(args);
  }

  @graphql.Query(() => Survey, { nullable: true })
  async survey(
    @graphql.Args() args: SurveyFindUniqueArgs
  ): Promise<Survey | null> {
    const result = await this.service.survey(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Survey)
  async createSurvey(@graphql.Args() args: CreateSurveyArgs): Promise<Survey> {
    return await this.service.createSurvey({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Survey)
  async updateSurvey(
    @graphql.Args() args: UpdateSurveyArgs
  ): Promise<Survey | null> {
    try {
      return await this.service.updateSurvey({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Survey)
  async deleteSurvey(
    @graphql.Args() args: DeleteSurveyArgs
  ): Promise<Survey | null> {
    try {
      return await this.service.deleteSurvey(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Question], { name: "questions" })
  async findQuestions(
    @graphql.Parent() parent: Survey,
    @graphql.Args() args: QuestionFindManyArgs
  ): Promise<Question[]> {
    const results = await this.service.findQuestions(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.Mutation(() => Survey)
  async CreateSurvey(
    @graphql.Args()
    args: SurveyCreateInput
  ): Promise<Survey> {
    return this.service.CreateSurvey(args);
  }

  @graphql.Mutation(() => Survey)
  async DeleteSurvey(
    @graphql.Args()
    args: SurveyWhereUniqueInput
  ): Promise<Survey> {
    return this.service.DeleteSurvey(args);
  }

  @graphql.Query(() => [Survey])
  async GetAllSurveys(
    @graphql.Args()
    args: SurveyFindManyArgs
  ): Promise<Survey[]> {
    return this.service.GetAllSurveys(args);
  }

  @graphql.Query(() => Survey)
  async GetSurveyById(
    @graphql.Args()
    args: SurveyFindUniqueArgs
  ): Promise<Survey> {
    return this.service.GetSurveyById(args);
  }

  @graphql.Mutation(() => Survey)
  async UpdateSurvey(
    @graphql.Args()
    args: SurveyUpdateInput
  ): Promise<Survey> {
    return this.service.UpdateSurvey(args);
  }
}