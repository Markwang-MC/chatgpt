import openai from 'openai';
export default function handler(req, res) {
  if (req.method=="POST") {
    console.log(req.body);
  }

  const response = await openai.Completion.create({
    engine: 'davinci',
    prompt: 'Once upon a time',
    max_tokens: 5
  });
  res.status(200).json({x:1})
  // res.end("")
}
