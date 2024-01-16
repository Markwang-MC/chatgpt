import {useRef,useEffect} from 'react'
export default function Photo_script() {
  const ref = useRef(null);
  useEffect(()=>{
    if (!ref.current) return ;
    if(ref.current.classList.contains("big_Photo_right_visibal")||ref.current.classList.contains("big_Photo_left_visibal")) return;
    if(!ref.current.classList.contains("big_Photo_left")) ref.current.classList.add("big_Photo_left");
    else if(!ref.current.classList.contains("big_Photo_right")) ref.current.classList.add("big_Photo_right");
    function scroll() {
      var offsetY=window.scrollY
      var top = ref.current.getBoundingClientRect().top
      if (top<400) {
        if (ref.current.classList.contains("big_Photo_left")) ref.current.classList.add('big_Photo_left_visibal')
        else if (ref.current.classList.contains("big_Photo_right")) ref.current.classList.add('big_Photo_right_visibal')
      }
    }
    window.addEventListener("scroll", scroll);
    return ()=>{
      window.removeEventListener("scroll", handleScroll);
    }
  },[])
  return ref;
}
