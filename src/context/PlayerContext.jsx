import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

 export const PlayerContext = createContext();

const PlayerContextProvider = (props)=>{
  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();

  const [track,setTrack] = useState(songsData[0]);
  const [playStatus,setPlayStatus] = useState(false);
  const [time,setTime] = useState({
    currenTime:{
      second:0,
      minute:0
    },
    totalTime:{
      second:0,
      minute:0
    }
  })
  const play = ()=>{
    audioRef.current.play();
    setPlayStatus(true)
  }
  const pause = ()=>{
    audioRef.current.pause();
    setPlayStatus(false);
  }

  const playwithId = async () => {
    await setTrack(songsData[id]);
    await audioRef.current.play();
    playStatus(true);
  }

  useEffect(()=>{
  setTimeout(() => {
    audioRef.current.ontimeupdate = () => {
      seekBar.current.style.width = (Math.floor(audioRef.current.currenTime/audioRef.current.duration*100))+"%";
    setTime({
      currenTime:{
        second: Math.floor(audioRef.current.currenTime % 60),
        minute: Math.floor(audioRef.current.currenTime / 60)
      },
      totalTime:{
        second: Math.floor(audioRef.current.duration % 60),
        minute: Math.floor(audioRef.current.duration / 60)
      }
    })
    }
  }, 1000);
  },[audioRef])

  const contextValue = {
   audioRef,
   seekBar,
   seekBg,
   track,setTrack,
   playStatus,setPlayStatus,
   time,setTime,
   play,pause,
   playwithId
  }
  return(
    <PlayerContext.Provider value={contextValue} >
    {props.children}
    </PlayerContext.Provider>
  )
}

export default PlayerContextProvider;