import { Configuration, OpenAIApi } from "openai"
import startInfiniteChatWithAI from './functions/infinite.js'
import singlePromptToAI from './functions/single.js'

export const openai = new OpenAIApi(new Configuration({
  apiKey: 'YOUR_API_KEY',
}));

process.argv.length === 3 ? startInfiniteChatWithAI() : singlePromptToAI()
