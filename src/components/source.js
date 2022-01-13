import axios from 'axios'
import React from 'react'

const Question = () => {
    const [quiz, setstate] = React.useState()


    React.useEffect(() => {

        const api = async () => {
            try {
                const api = await axios.get("https://my-json-server.typicode.com/Naveen132895/quiz-api/questions")
                setstate(api.data)
            } catch (error) {
                console.error(error.message);
            }
        }
        api()

    }, [])
    if (quiz)
        return quiz
}

export default Question