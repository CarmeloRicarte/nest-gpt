import { Body, Controller, Post } from '@nestjs/common';
import { GptService } from '../../domain/services/gpt.service';
import { OrthographyDto } from '../../orthography/domain';

@Controller('gpt')
export class GptController {
  constructor(private readonly gptService: GptService) {}

  @Post('orthography-check')
  orthographyCheck(@Body() orthographyDto: OrthographyDto) {
    return this.gptService.orthographyCheck(orthographyDto);
  }
}
