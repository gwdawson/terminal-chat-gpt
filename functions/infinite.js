import inquirer from 'inquirer';
import { openai } from "../index.js";

const infinite = async () => {

  const { input } = await inquirer.prompt([
    {
      name: 'input',
      message: 'You:'
    },
  ]);
  
  const exitValues = ['exit', 'quit']
  if (exitValues.includes(input.toLowerCase())) {
    process.exit();
  }

  const { data: { choices: {0: { text: response }} }} = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: input,
    max_tokens: 4000,
  });

  const responseFlag = '\n\x1b[32m?\x1b[0m \u001b[1mOpenAI:\u001b[0m';
  const responseMessage = `\x1b[33m${response.trim()}\x1b[0m\n`;
  console.log(responseFlag, responseMessage);
  

  infinite();
}

const startInfinite = () => {
  console.clear();
  console.log('\u001b[1mWelcome to the OpenAI CLI! Type "exit" or "quit" to exit the program.\u001b[0m\n')
  infinite();
}

export default startInfinite;
