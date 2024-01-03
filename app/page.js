// import Image from 'next/image'
import {useState,useEffect} from "react"
export default function Home() {
  const [about, setAbout] = useState(false);
  return (
    <div className="bg-white">
      <div className="w-full h-[75px] bg-amber-300 flex items-center justify-end rounded">
        <div className="mr-[50px]">
          <span className="mr-[50px]" onClick={setAbout(!about)}>about</span>
          <span>占位符</span>
        </div>
      </div>

      <div className="bg-neutral-300 w-full h-[500px] mx-3 mt-1 rounded">

      </div>
    </div>
  )
}
