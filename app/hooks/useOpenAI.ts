import { useState } from 'react';
import sendQueryToOpenAI from '~/utils/sendQueryToOpenAI';

const useOpenAIHook = () => {
    const [response, setResponse] = useState('');

    const onSubmitQuery = async (query: string, OPENAI_API_KEY: string, OPENAI_API_URL: string) => {
        try {
            const aiResponse = await sendQueryToOpenAI(query, OPENAI_API_KEY, OPENAI_API_URL);
            setResponse(aiResponse);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return { response, onSubmitQuery };
};

export default useOpenAIHook;
