import React from 'react';

interface EditorSettingsProps {
  fontSize: number;
  setFontSize: (size: number) => void;
  mode: string;
  setMode: (mode: string) => void;
  theme: string;
  setTheme: (mode: string) => void;
  disabled?: boolean;
}

const EditorSettings: React.FC<EditorSettingsProps> = ({ fontSize, setFontSize, mode, setMode, theme, setTheme, disabled }) => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div>
        <label htmlFor="fontSize" className="block">Font size</label>
        <input
          id="fontSize"
          type="number"
          value={fontSize}
          min={8}
          max={24}
          onChange={(e) => setFontSize(Number(e.target.value))}
          disabled={disabled}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="mode" className="block">Language</label>
        <select
          id="mode"
          value={mode}
          onChange={(e) => setMode(e.target.value)}
          disabled={disabled}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="csharp">C#</option>
        </select>
      </div>
      <div>
        <label htmlFor="theme" className="block">Theme</label>
        <select
          id="theme"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          disabled={disabled}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option value="github">Github</option>
          <option value="monokai">Monokai</option>
          <option value="xcode">XCode</option>
        </select>
      </div>
    </div>
  );
};

export default EditorSettings;
