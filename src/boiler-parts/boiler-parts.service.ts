import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BoilerPartsModel } from './model/boiler-parts.model';
import { IBoilerPartsQuery } from './types';

@Injectable()
export class BoilerPartsService {
  constructor(
    @InjectModel(BoilerPartsModel)
    private boilerPartsModel: typeof BoilerPartsModel,
  ) {}

  async paginateAndFilter(
    query: IBoilerPartsQuery,
  ): Promise<{ count: number; rows: BoilerPartsModel[] }> {
    const limit = +query.limit;
    const offset = +query.offset * 20;
    return this.boilerPartsModel.findAndCountAll({
      limit,
      offset,
    });
  }

  async bestsellers(): Promise<{ count: number; rows: BoilerPartsModel[] }> {
    return this.boilerPartsModel.findAndCountAll({
      where: { bestsellers: true },
    });
  }
}
