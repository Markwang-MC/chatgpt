import OpenAI from 'openai';
export default function handler(req, res) {
  if (req.method=="POST") {
    const openai = new OpenAI({
      apiKey: process.env['OPENAI_API_KEY']
    });

    const chatCompletion = openai.chat.completions.create({
      messages: [{ role: 'user', content: 'Say this is a test' }],
      model: 'gpt-3.5-turbo',
      stream: false
    });
    console.log(chatCompletion);
    res.status(200).json({s:chatCompletion,o:openai})
    res.status(405).json({s:chatCompletion,o:openai})

  }

}
