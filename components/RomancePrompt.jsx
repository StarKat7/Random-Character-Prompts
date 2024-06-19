import {romancePrompts} from '../prompts/romance_prompts'
import { useState } from 'react'

export default function RomancePrompt() {
    const [prompt, setPrompt] = useState('')

    const handleRomancePrompt = () => {
        const prompt = romancePrompts[Math.floor(Math.random() * (romancePrompts.length - 1))]
        console.log(prompt)
        setPrompt(prompt)
    }

    return (
        <div className="component">
            Romance Prompt
            <div><div>{prompt}</div>
            <button onClick={() => handleRomancePrompt()}>Get Romance Prompt</button>
            </div>
        </div>
    )
}