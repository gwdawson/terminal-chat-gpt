import { openai } from "../index.js";

const single = async () => {
  console.clear();
  console.log('\u001b[1mWelcome to the OpenAI CLI!\u001b[0m\n');
  process.argv.splice(0, 3);

  const promptFlag = '\x1b[32m?\x1b[0m \u001b[1mYou:\u001b[0m';
  const promptMessage = `\x1b[36m${process.argv.join(' ')}\x1b[0m\n`;
  console.log(promptFlag, promptMessage);

  const { data: { choices: {0: { text: response }} }} = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: process.argv.join(' '),
    temperature: 0,
    max_tokens: 800,
  });
  
  const responseFlag = '\x1b[32m?\x1b[0m \u001b[1mOpenAI:\u001b[0m';
  const responseMessage = `\x1b[33m${response.trim()}\x1b[0m`;
  console.log(responseFlag, responseMessage);
}

export default single;
