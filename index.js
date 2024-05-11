import 'dotenv/config'

import OpenAI from 'openai'
const openai = new OpenAI()

openai.chat.completions.create({
  model: 'gpt-3.5-turbo',
  messages: [
    {
      role: '',
      content:
        'You are an AI assistant, answer any questions to the best of your ability',
    },
  ],
})
