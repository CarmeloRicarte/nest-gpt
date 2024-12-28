import { Test, TestingModule } from '@nestjs/testing';
import { GptService } from '../services/gpt.service';

describe('GptService', () => {
  let service: GptService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GptService],
    }).compile();

    service = module.get<GptService>(GptService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
