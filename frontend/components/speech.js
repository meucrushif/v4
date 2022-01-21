import React, { useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Speech = () => {
    
 const [value, setValue] = useState({transcript: '', listening: '', resetTranscript: ''})
 useEffect(()=>{
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
      } = useSpeechRecognition();
    
      setValue({transcript: transcript, listening: listening})
      if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
      }
 },[])


  return (
    <div>
      <p>Microphone: {value.listening ? 'on' : 'off'}</p>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={value.resetTranscript}>Reset</button>
      <p>{value.transcript}</p>
    </div>
  );
};
export default Speech;