import openai from 'openai';
export default function handler(req, res) {
  if (req.method=="POST") {
    console.log('req.body');
  }

  const openai = new OpenAI({
    apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
  });

  async function main() {
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: 'Say this is a test' }],
      model: 'gpt-3.5-turbo',
    });
  }

  main();
  // print('ChatGPT Reply:', reply)


  res.status(200).json({s:1})
  // res.end("")
}
