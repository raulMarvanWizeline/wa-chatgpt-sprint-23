import { useEffect, useState } from 'react';
import EditorSettings from '../EditorSettings/EditorSettings';
import CodeEditor from '../CodeEditor/CodeEditor';
import GitComment from '../GitComment/GitComment';
import useOpenAIHook from '~/hooks/useOpenAI';
import { useLoaderData } from '@remix-run/react';
import Loader from '../Loader/Loader';

interface CommentType {
    comment: string;
    line : number;
    codeSuggestion?: string;
}

const CodeReviewPanel = () => {
    const { OPENAI_API_KEY, OPENAI_API_URL } = useLoaderData<any>();
    const [code, setCode] = useState('');
    const [fontSize, setFontSize] = useState(14);
    const [mode, setMode] = useState('javascript');
    const [theme, setTheme] = useState('monokai');
    const { response, onSubmitQuery } = useOpenAIHook();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const defaultResponse: CommentType[] = [
        {
          "comment": "Something went wrong, please try again later.",
          "line": 1
        }
    ];
    const [comments, setComments] = useState<CommentType[]>([]);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const handleAnalyzeCode = (e: any) => {
        e.preventDefault();
        setIsSubmitting(true);
        const language = mode === 'javascript' ? `${mode} with react. Add best react practices to the review` : mode;
        const query = `Do code review of the following code. The programming language is ${language}, it must be a strict review, and you will respond to a json with an array of comments with all the improvements you find. Avoid adding comments on each line of code, only for those that you think can be improved and corrected, or if you consider that they are bad practices or that could cause an execution interruption. The response will be in a json, which will contain the array, and each comment with the following format:
        {
            comments: [
                {
                    comment: "This is a mandatory attribute comment and could be also a question about code.",
                    line: number, // This is the mandatory line number of the code that is being reviewed.
                    codeSuggestion: "This is a code change suggestion and is optional. Just add the suggestion change here, not explanations or comments"
                }
            ]
        }
        Always add at least one comment. The json array format and attributes are mandatory. The code to review is:
        ${code}`;
        onSubmitQuery(query, OPENAI_API_KEY, OPENAI_API_URL);
    };

    useEffect(() => {
        if (response) {
            try {
                const jsonResponse: any = JSON.parse(response);
                console.log(jsonResponse);
                setComments(jsonResponse['comments']);
            }
            catch (e) {
                console.log(e);
                setComments(defaultResponse);
            }
            finally {
                setIsSubmitting(false);
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                        disabled={isSubmitting}
                    />
                    <CodeEditor
                        value={code}
                        onChange={setCode}
                        fontSize={fontSize}
                        mode={mode}
                        theme={theme}
                        disabled={isSubmitting}
                    />
                    <button
                        type="submit"
                        className="ml-4 btn btn-primary mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
                        disabled={!code || code.length <= 0 || !theme || !mode || !fontSize || isSubmitting}
                    >
                        Code review
                    </button>
                 </form>
            </div>
            <div className="col-span-1 flex-1 p-4 overflow-auto text-white bg-gray-800 overflow-scroll pb-16">
                <h1 className="text-2xl font-bold mb-10">Code Review</h1>
                {isSubmitting && <Loader text="Analyzing code..." />}
                {comments.map((comment, index) => (
                    <GitComment key={index} comment={comment.comment} line={comment.line} username={'Code Review Bot'} createdAt={'Today'} codeSuggestion={comment?.codeSuggestion}/>
                ))}
            </div>
        </div>
    );
};

export default CodeReviewPanel;
