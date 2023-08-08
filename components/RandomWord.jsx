import axios from "axios"
import { useState } from "react"

export default function RandomWord() {
    const [oneRandomWord, setOneRandomWord] = useState('')

    const handleOneWordPrompt = async () => {
        // For those who just want one random word to build a prompt around
        const randomWord = await axios.get('https://random-word-api.vercel.app/api?words=1')
        console.log(randomWord.data[0])
        setOneRandomWord(randomWord.data[0])
    }

    return (
        <div>
            Random Word Component Here
            <div>
                <div>{oneRandomWord}</div>
                <button onClick={() => handleOneWordPrompt()}>Single Word Prompt</button>
            </div>
        </div>
    )
}