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

# Semantic Search

Semantic search is a technique that uses the meaning of words and phrases to find relevant information. AI models like GPT-3 can be used to perform semantic search by understanding the context and intent of the search query.

For example, the question "how to tie a tie?" If we simply look at each word individually, we might not get the best results. However, if we understand the context and intent of the question, we can provide more relevant and accurate results.

# Embeddings and Vectors

Computers are better at understanding numbers than text. Embeddings and vectors are numerical representations of words and phrases that capture their meaning and context. These numerical representations can be used in machine learning models to perform tasks like semantic search, text classification, and language modeling.

You think of this as a way to translate text into a language that computers can understand and work with more easily.

# LLMs represent words as high-dimensional vectors

"High-dimensional vectors" are numbers that are super long. Instead of representing a word as a single number, we represent it as a vector of many numbers. This allows us to capture more information about the word's meaning and context.

LLMs don't assign random numbers to words. Instead, they learn the best numerical representations for words by training on large amounts of text data. This process helps the model understand the relationships between words and phrases, making it better at tasks like semantic search and language generation.

Words like "king" and "queen" might have similar vectors because they are related concepts. Similarly, words like "cat" and "dog" might have similar vectors because they are both animals.
