import { Injectable } from '@nestjs/common';
import { ortographyCheckUseCase } from '../../orthography/application/ortography.use-case';
import { OrthographyDto } from '../../orthography/domain/dto/orthography.dto';

@Injectable()
export class GptService {
  async orthographyCheck(orthographyDto: OrthographyDto) {
    return await ortographyCheckUseCase({
      prompt: orthographyDto.prompt,
    });
  }
}
