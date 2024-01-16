import openai from 'openai';
export default function handler(req, res) {
  if (req.method=="POST") {
    console.log('req.body');
  }

  const generateText = async (prompt) => {
    const response = await openai.Completion.create({
      engine: 'text-davinci-003',
      prompt: prompt,
    });

    return response.choices[0].text;
  };

  generateText('Once upon a time').then(text => {
    console.log({text});
  }).catch(error => {
    console.error('Error:', error);
  });


  res.status(200).json({x:1})
  // res.end("")
}
