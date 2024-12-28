import { Controller, Post } from '@nestjs/common';
import { GptService } from '../../domain/services/gpt.service';

@Controller('gpt')
export class GptController {
  constructor(private readonly gptService: GptService) {}

  @Post('orthography-check')
  orthographyCheck() {
    return this.gptService.orthographyCheck();
  }
}
