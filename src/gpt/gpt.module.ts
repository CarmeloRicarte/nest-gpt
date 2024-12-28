import { Module } from '@nestjs/common';
import { GptService } from './domain/services/gpt.service';
import { GptController } from './infrastucture/controllers/gpt.controller';

@Module({
  controllers: [GptController],
  providers: [GptService],
})
export class GptModule {}
