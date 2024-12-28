import { Test, TestingModule } from '@nestjs/testing';
import { GptService } from '../../domain/services/gpt.service';
import { GptController } from '../controllers/gpt.controller';

describe('GptController', () => {
  let controller: GptController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GptController],
      providers: [GptService],
    }).compile();

    controller = module.get<GptController>(GptController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
