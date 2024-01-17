import openai from 'openai';
export default function handler(req, res) {
  if (req.method=="POST") {
    console.log('req.body');
  }
  var _text;
  const generateText = async (prompt) => {
    const response = await openai.Completion.create({
      engine: 'text-davinci-003',
      prompt: prompt,
    });

    return response.choices[0].text;
  };

  generateText('Once upon a time').then(text => {
    console.log({text});
    _text=text
  }).catch(error => {
    console.error('Error:', error);
  });


  res.status(200).json({text:_text})
  // res.end("")
}
