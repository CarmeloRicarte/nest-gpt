import OpenAI from 'openai';

interface Options {
  prompt: string;
}

const FIRST_AI_RESPONSE = 0;

export const prosConsDicusserUseCase = async (
  openai: OpenAI,
  { prompt }: Options,
) => {
  const response = await openai.chat.completions.create({
    model: 'gemini-1.5-flash',
    messages: [
      {
        role: 'system',
        content: `Se te dará una pregunta y tu tarea es dar una respuesta con pros y contras,
                la respuesta debe de ser en formato markdown,
                los pros y contras deben de estar en una lista.
                `,
      },
      {
        role: 'user',
        content: prompt,
      },
    ],
    temperature: 0.3,
    max_tokens: 500,
  });

  return response.choices[FIRST_AI_RESPONSE].message;
};
