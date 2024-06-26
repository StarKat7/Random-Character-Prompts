import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'
import axios from 'axios'
import RandomWord from '@/components/RandomWord'
import RomancePrompt from '@/components/RomancePrompt'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // So first off the states will have to hold the character's name, what they're doing, and where they're doing it at the very least.
  const [character, setCharacter] = useState('')
  const [verb, setVerb] = useState('')
  const [location, setLocation] = useState('')
  const [prompt, setPrompt] = useState('')

  // API calls to the random word and dictionary APIs will happen only after a button press, so no need for a useEffect yet

  const handlePrompt = async () => {
    // This will fire off the API calls, first to the random word API(for one noun and one verb) then the dictionary API. The dictionary API will help with the proper usage of the word.
    const randomWord = await axios.get('https://random-word-api.vercel.app/api?words=1')
    console.log(randomWord.data[0])
    const definition = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${randomWord.data[0]}`)
    console.log(definition)
  }

  return (
    <>
      <Head>
        <title>Character Prompts Randomizer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className='components'>
        <h2>Character Activity Prompts</h2>
        <RandomWord />
        <RomancePrompt />
        {/* <button onClick={() => handlePrompt()}>Generate Prompt</button> */}
        </div>
      </main>
    </>
  )
}
