# OpenAI Chat Completions API

Different roles in the messages array help define the context and purpose of each message.

## System role

The "system" role is used to provide instructions or context that sets the behavior or personal of the AI assistant.

The content act as a high level guide the AI should follow.

Example: `{role: "system", content: "You are a helpful AI assistant."}`

## User role

The "user" role represents the user's input or message to the AI assistant.

Example: `{role: "user", content: "What is the capital of France?"}`

## Assistant role

The "assistant" role represents the AI assistant's response to the user's message.

Example: `{role: "assistant", content: "The capital of France is Paris."}`

## Code example

```js
openai.chat.completions.create({
  model: 'gpt-3.5-turbo',
  messages: [
    {
      role: 'system',
      content:
        'You are an AI assistant, answer any questions to the best of your ability.',
    },
    { role: 'user', content: 'What is the capital of France?' },
  ],
})
```
