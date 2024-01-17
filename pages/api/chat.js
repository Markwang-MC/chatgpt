import openai from 'openai';
export default function handler(req, res) {
  if (req.method=="POST") {
    console.log('req.body');
  }

  response = openai.Completion.create(
  engine="davinci-codex",
  prompt="What is the meaning of life?",
  max_tokens=50,
  temperature=0.7,
  n=1,
  stop=None,
  echo=True
)

reply = response.choices[0].text.strip()
print('ChatGPT Reply:', reply)


  res.status(200).json({s:1})
  // res.end("")
}
