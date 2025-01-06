import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import { ortographyCheckUseCase } from '../../orthography/application';
import { OrthographyDto } from '../../orthography/domain';
import {
  prosConsDicusserStreamUseCase,
  prosConsDicusserUseCase,
} from '../../pros-cons-discusser/application';
import { ProsConsDiscusserDto } from '../../pros-cons-discusser/domain';

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

  async prosConsDicusser({ prompt }: ProsConsDiscusserDto) {
    return await prosConsDicusserUseCase(this.openai, { prompt });
  }

  async prosConsDicusserStream({ prompt }: ProsConsDiscusserDto) {
    return await prosConsDicusserStreamUseCase(this.openai, { prompt });
  }
}
