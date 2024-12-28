import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import { ortographyCheckUseCase } from '../../orthography/application/ortography.use-case';
import { OrthographyDto } from '../../orthography/domain/dto/orthography.dto';

@Injectable()
export class GptService {
  private openai = new OpenAI({
    apiKey: process.env.GEMINI_API_KEY,
    baseURL: 'https://generativelanguage.googleapis.com/v1beta/openai/',
  });
  async orthographyCheck(orthographyDto: OrthographyDto) {
    return await ortographyCheckUseCase(this.openai, {
      prompt: orthographyDto.prompt,
    });
  }
}
