import './App.css'

import {Navbar, Button, Card, TextInput} from 'flowbite-react'
import logo from './assets/logo.svg'
import {useEffect, useState} from "react";

import Switcher from "./Switcher.jsx";


function App() {

    const [memeImages, setMemeImages] = useState([])

    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        imageURL: 'https://via.assets.so/game.png?id=1&q=95&w=360&h=360&fit=fill'
    })

    function handleChange(event) {
        const {name, value} = event.target
        setMeme((prevMeme) => {
            return {...prevMeme, [name]: value}
        })
    }

    useEffect(() => {
        async function fetchImages () {
            const response = await fetch('https://api.imgflip.com/get_memes')
            const json = await response.json()
            setMemeImages(json.data.memes)
        }
        fetchImages()
    }, [])

    function getMemeImage() {
        const url = memeImages[Math.floor(Math.random() * memeImages.length)].url
        setMeme((prevMeme) => {
            return {...prevMeme, imageURL: url}
        })
    }


    return (

        <>
            <Navbar>
                <Switcher/>
            </Navbar>

            <main className={"max-w-xl mx-auto my-10"}>
                <Card>
                    <div className={"flex flex-col gap-y-4 gap-x-2 md:flex-row md:justify-between"}>
                        <TextInput className={"w-full"} name={"topText"} placeholder={"Top text"}
                                   value={meme.topText}
                                   onChange={handleChange}
                        />
                        <TextInput className={"w-full"} name={"bottomText"} placeholder={'Bottom Text'}
                                   value={meme.bottomText}
                                   onChange={handleChange}
                        />
                    </div>
                    <Button onClick={getMemeImage}>Get Meme Image</Button>
                    <div className={"relative overflow-hidden rounded border border-gray-200 dark:border-gray-700"}>
                        <img src={meme.imageURL} alt="" className={"object-cover w-full h-full"}/>
                        <span
                            className={"text-4xl font-extrabold text-white text-center w-full absolute top-0 py-4"}>
                            {meme.topText}
                        </span>
                        <span
                            className={"text-4xl font-extrabold text-white text-center w-full absolute bottom-0 py-4"}>
                            {meme.bottomText}
                        </span>
                    </div>
                </Card>
            </main>
        </>
    )
}

export default App
