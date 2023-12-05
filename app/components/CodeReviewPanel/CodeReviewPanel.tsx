import { useEffect, useState } from 'react';
import EditorSettings from '../EditorSettings/EditorSettings';
import CodeEditor from '../CodeEditor/CodeEditor';
import GitComment from '../GitComment/GitComment';
import useOpenAIHook from '~/hooks/useOpenAI';
import { useLoaderData } from '@remix-run/react';

interface CommentType {
    comment: string;
    codeSuggestion?: string;
}

const CodeReviewPanel = () => {
    const { OPENAI_API_KEY, OPENAI_API_URL } = useLoaderData<any>();
    const [code, setCode] = useState('');
    const [fontSize, setFontSize] = useState(14);
    const [mode, setMode] = useState('javascript');
    const [theme, setTheme] = useState('monokai');
    const { response, onSubmitQuery } = useOpenAIHook();
    
    const [comments, setComments] = useState<CommentType[]>([]);

    const handleAnalyzeCode = (e: any) => {
        e.preventDefault();
        const query = "say something";
        onSubmitQuery(query, OPENAI_API_KEY, OPENAI_API_URL);
    };

    useEffect(() => {
        if (response) {
            console.log(response);
            setComments(response as any);
        }
    }, [response]);

    return (
        <div className="flex h-screen flex-cols-2">
            <div className="col-span-1 flex-1 p-4 border-r border-gray-700">
                <form onSubmit={handleAnalyzeCode}>
                    <EditorSettings
                        fontSize={fontSize}
                        setFontSize={setFontSize}
                        mode={mode}
                        setMode={setMode}
                        theme={theme}
                        setTheme={setTheme}
                    />
                    <CodeEditor
                        value={code}
                        onChange={setCode}
                        fontSize={fontSize}
                        mode={mode}
                        theme={theme}
                    />
                    <button
                        type="submit"
                        className="ml-4 btn btn-primary mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
                        disabled={!code || code.length <= 0 || !theme || !mode || !fontSize}
                    >
                        Code review
                    </button>
                 </form>
            </div>
            <div className="col-span-1 flex-1 p-4 overflow-auto text-white bg-gray-800 overflow-scroll">
                <h1 className="text-2xl font-bold mb-10">Code Review</h1>
                {comments.map((comment, index) => (
                    <GitComment key={index} comment={comment.comment} username={'Code Review Bot'} userImage={'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png'} createdAt={'Today'} codeSuggestion={comment?.codeSuggestion}/>
                ))}
            </div>
        </div>
    );
};

export default CodeReviewPanel;
