import { createContext, useRef, useState } from "react";
import { songsData } from "../assets/assets";

 export const PlayerContext = createContext();

const PlayerContextProvider = (props)=>{
  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();

  const [track,setTrack] = useState(songsData[0]);
  const [playStatus,setPlayStatus] = useState(false);
  cost [time,setTime] = useState({
    currenTime:{
      second:0,
      minute:0
    },
    todalTime:{
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

  const contextValue = {
   audioRef,
   seekBar,
   seekBg,
   track,
   setTrack,
   playStatus,
   setPlayStatus,
   time,
   setTime,
   play,pause
  }
  return(
    <PlayerContext.Provider value={contextValue} >
    {props.children}
    </PlayerContext.Provider>
  )
}

export default PlayerContextProvider;