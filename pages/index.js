import {useState,useEffect} from "react"
import axios from "axios"
export default function Index() {
  const endpoint = 'https://api.openai.com/v1/engines/davinci/completions';
  const apiKey = process.env.OPENAI_API_KEY;
  const prompt = 'Once upon a time';
  const maxTokens = 100;


  axios.post("/api/chat",{
    endpoint:endpoint,
    apiKey:apiKey,
    prompt:prompt,
    maxTokens:maxTokens
  })
  .then((res)=>{
    console.log(res.data);
  })

return "hello"
return (<div className="fixed inset-0 flex place-items-center place-content-center">hello</div>)
}



// git add .
// git commit -m update
// git push github master:main
