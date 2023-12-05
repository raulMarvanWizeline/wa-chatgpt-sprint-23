import React from 'react';
import AceEditor from 'react-ace';

// Import modes
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/mode-csharp';
// Import themes
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/theme-xcode';

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  fontSize: number;
  mode: string; // 'javascript', 'python', etc.
  theme: string; // 'github', 'monokai', etc.
}

const CodeEditor: React.FC<CodeEditorProps> = ({ value, onChange, fontSize, mode, theme }) => {
  return (
    <div className="ml-4 p-2 border border-gray-300 rounded-lg shadow-sm w-fit">
      <AceEditor
          className="!w-[800px]"
          mode={mode}
          theme={theme}
          name="UNIQUE_ID_OF_DIV"
          value={value}
          onChange={onChange}
          fontSize={fontSize}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          setOptions={{
            enableBasicAutocompletion: false,
            enableLiveAutocompletion: false,
            enableSnippets: false,
            showLineNumbers: true,
            tabSize: 2,
          }}
      />
    </div>
  );
};

export default CodeEditor;
