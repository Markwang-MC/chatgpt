import openai from 'openai';
export default function handler(req, res) {
  if (req.method=="POST") {
    const openai = new OpenAI({
      apiKey: process.env['OPENAI_API_KEY']
    });

    console.log(openai);
    const chatCompletion = openai.chat.completions.create({
      messages: [{ role: 'user', content: 'Say this is a test' }],
      model: 'gpt-3.5-turbo',
      stream: false
    });
    console.log(chatCompletion);
  }

  res.status(200).json({s:1})
}
