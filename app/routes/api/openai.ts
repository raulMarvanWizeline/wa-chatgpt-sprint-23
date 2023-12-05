import { json } from '@remix-run/node';
import sendQueryToOpenAI from '~/utils/sendQueryToOpenAI';

interface Props {
    request: any;
}

export const action = async ({ request }: Props) => {
    const formData = await request.formData();
    const query = formData.get('query');
    const OPENAI_API_KEY = formData.get('OPENAI_API_KEY');
    const OPENAI_API_URL = formData.get('OPENAI_API_URL');

    const response = await sendQueryToOpenAI(query, OPENAI_API_KEY, OPENAI_API_URL);
    return json({ response });
};