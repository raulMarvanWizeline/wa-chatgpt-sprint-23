import axios from 'axios';


const sendQueryToOpenAI = async (query: string, OPENAI_API_KEY: string,  OPENAI_API_URL: string) => {
    try {
        const response = await axios.post(OPENAI_API_URL,
            {
                //max_tokens: 150,
                model: "gpt-3.5-turbo-1106",
                messages: [
                    {
                        role: "system",
                        content: "you the most skilled and experienced developer in the world",
                    },
                    {
                        role: "user", 
                        content: query,
                    }
                ],
                temperature: 0.2,
                response_format: {
                    type: "json_object"
                },
            },
            {
                headers: {
                    'Authorization': `Bearer ${OPENAI_API_KEY}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        return response.data.choices[0]['message']['content'];
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

export default sendQueryToOpenAI;
