import {useState,useEffect} from "react"
import axios from "axios"
export default function Index() {
  const prompt = 'Once upon a time';

  axios.post("/api/chat",{
    text: prompt
  })
  .then((res)=>{
    console.log(res);
    return res.data.chatCompletion
  })

  .catch(error => {
    // 处理错误
    // console.log({error});
  });


return (<div className="fixed inset-0 flex place-items-center place-content-center">hello</div>)
}



// git add .
// git commit -m update
// git push github master:main
