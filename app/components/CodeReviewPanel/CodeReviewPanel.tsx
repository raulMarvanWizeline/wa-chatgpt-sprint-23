import { useState } from 'react';
import EditorSettings from '../EditorSettings/EditorSettings';
import CodeEditor from '../CodeEditor/CodeEditor';


const CodeReviewPanel = () => {
    const [code, setCode] = useState('// Escribe tu código aquí...');
    const [fontSize, setFontSize] = useState(14);
    const [mode, setMode] = useState('javascript');
    const [theme, setTheme] = useState('monokai');
    
    const [comments, setComments] = useState<string[]>([
        "Comentario 1: Revisa la sintaxis en la línea 5.",
        "Comentario 2: ¿Podrías simplificar esta función?",
        // Agrega más comentarios aleatorios
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
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                Code review
                </button>
            </div>
            <div className="col-span-1 flex-1 p-4 overflow-auto text-white bg-gray-800">
                {comments.map((comment, index) => (
                    <div key={index} className="p-2 border-b border-gray-700">
                        {comment}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CodeReviewPanel;
