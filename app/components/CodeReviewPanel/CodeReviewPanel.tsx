import { useState } from 'react';
import EditorSettings from '../EditorSettings/EditorSettings';
import CodeEditor from '../CodeEditor/CodeEditor';
import GitComment from '../GitComment/GitComment';

interface CommentType {
    comment: string;
    codeSuggestion?: string;
}


const CodeReviewPanel = () => {
    const [code, setCode] = useState('// Escribe tu código aquí...');
    const [fontSize, setFontSize] = useState(14);
    const [mode, setMode] = useState('javascript');
    const [theme, setTheme] = useState('monokai');
    
    const [comments, setComments] = useState<CommentType[]>([
        { comment: "Comentario 1: Revisa la sintaxis en la línea 5.", codeSuggestion: `const sum = (a, b) => a + b;

const sum = (a, b) => a + b;` },
        { comment: "Comentario 2: ¿Podrías simplificar esta función?" },
        { comment: "Comentario 3: ¿Podrías simplificar esta función?", codeSuggestion: "const sum = (a, b) => a + b;" },
        { comment: "Comentario 1: Revisa la sintaxis en la línea 5.", codeSuggestion: "const sum = (a, b) => a + b;" },
        { comment: "Comentario 2: ¿Podrías simplificar esta función?" },
        { comment: "Comentario 3: ¿Podrías simplificar esta función?", codeSuggestion: "const sum = (a, b) => a + b;" },
        { comment: "Comentario 1: Revisa la sintaxis en la línea 5.", codeSuggestion: "const sum = (a, b) => a + b;" },
        { comment: "Comentario 2: ¿Podrías simplificar esta función?" },
        { comment: "Comentario 3: ¿Podrías simplificar esta función?", codeSuggestion: "const sum = (a, b) => a + b;" },
        { comment: "Comentario 1: Revisa la sintaxis en la línea 5.", codeSuggestion: "const sum = (a, b) => a + b;" },
        { comment: "Comentario 2: ¿Podrías simplificar esta función?" },
        { comment: "Comentario 3: ¿Podrías simplificar esta función?", codeSuggestion: "const sum = (a, b) => a + b;" },
    ]);

    console.log(setComments)

    const handleAnalyzeCode = () => {
        // Función para simular el análisis de código y generar comentarios
        // En un caso real, aquí se enviaría el código a un backend para su revisión
    };

    return (
        <div className="flex h-screen flex-cols-2">
            <div className="col-span-1 flex-1 p-4 border-r border-gray-700">
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
                onClick={handleAnalyzeCode} 
                className="btn btn-primary mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                Code review
                </button>
            </div>
            <div className="col-span-1 flex-1 p-4 overflow-auto text-white bg-gray-800 overflow-scroll">
                {comments.map((comment, index) => (
                    <GitComment key={index} comment={comment.comment} username={'Code Review Bot'} userImage={'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png'} createdAt={'Today'} codeSuggestion={comment?.codeSuggestion}/>
                ))}
            </div>
        </div>
    );
};

export default CodeReviewPanel;
