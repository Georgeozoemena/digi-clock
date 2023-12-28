import React, {useState} from 'react'


let Timer= ()=>{
    const [time, setTime] = useState('Time')

    let greet= ()=>{
        let period = new Date().getHours()
        let currentDay = new Date().toDateString()

        if (period < 12){
            return `Good morning, sunshine 😊. Guess what it's ${currentDay}`
        } else if (period >= 12 && period <= 15) {
            return "Good Afternoon 😊, How's your day going."
        } else {
            return "Good Night😊, Have a good rest 😴."
        }
    }
    

    const [quote, setQuote] = useState('')

    const randomQuotes = [
        `"Always remember you are a champ and unique✨, conquer today with all venom"`,
        `"You are a Genius 🧠, always remember that"`,
        `"Always remember, You are a victor 💪"`,
    ]
    
    let print = randomQuotes[Math.floor(Math.random() * randomQuotes.length)]
    

    let message= ()=> {
        setQuote(print)
    }
        

    let clock= ()=> {
        let tick = new Date().toLocaleTimeString()
        setTime(tick)
    }

    setInterval(clock, 1000)

    return (
        <div className='main'>
            <div className="div">
                <p className='quote'>{quote}</p>
            </div>
            <div className="container">
                <p className='greet'>{greet()}</p>
                <p>{time}</p>
                <button onClick={message}>Message</button>
            </div>
        </div>
    )
}

export default Timer