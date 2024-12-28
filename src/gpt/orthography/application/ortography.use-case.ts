import { OrthographyUseCaseParams } from '../domain';

export const ortographyCheckUseCase = async (
  options: OrthographyUseCaseParams,
) => {
  const { prompt } = options;
  return { prompt };
};
