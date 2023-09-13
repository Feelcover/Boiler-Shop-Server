import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { BoilerPartsController } from './boiler-parts.controller';
import { BoilerPartsService } from './boiler-parts.service';
import { BoilerPartsModel } from './model/boiler-parts.model';

@Module({
  imports: [SequelizeModule.forFeature([BoilerPartsModel])],
  controllers: [BoilerPartsController],
  providers: [BoilerPartsService],
  exports: [BoilerPartsService],
})
export class BoilerPartsModule {}
