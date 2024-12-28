import { Injectable } from '@nestjs/common';
import { ortographyCheckUseCase } from '../../application/ortography/ortography.use-case';

@Injectable()
export class GptService {
  async orthographyCheck() {
    return await ortographyCheckUseCase();
  }
}
