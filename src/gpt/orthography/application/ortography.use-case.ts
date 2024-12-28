import OpenAI from 'openai';
import { OrthographyUseCaseParams } from '../domain';

const FIRST_AI_RESPONSE = 0;

export const ortographyCheckUseCase = async (
  openai: OpenAI,
  options: OrthographyUseCaseParams,
) => {
  const { prompt } = options;

  const response = await openai.chat.completions.create({
    model: 'gemini-1.5-flash',
    messages: [
      {
        role: 'system',
        content: `Te serán proveídos textos en español con posibles errores ortográficos y gramaticales. Tu tarea es corregirlos y retornar el texto corregido.
          Debes responder en formato JSON como en el siguiente ejemplo:
          Ejemplo de salida:
          {
            userScore: number, //  dar un porcentaje de acierto por el usuario
            errors: string[], // ['error => solución']
            message: string // Usa emojis y texto para felicitar al usuario'
          }
          Si no hay errores, retornar un mesaje de felicitación indicando al ususaio que no hay errores en el texto.
          Las palabras usadas deben existir en el diccionario de la Real Academia Española.
          `,
      },
      {
        role: 'user',
        content: prompt,
      },
    ],
    temperature: 0.3,
    max_tokens: 150,
    response_format: {
      type: 'json_object',
    },
  });

  return response.choices[FIRST_AI_RESPONSE].message.content;
};
