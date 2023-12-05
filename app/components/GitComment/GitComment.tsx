import React, { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-dracula";
import MonkeyLogo from "../icons/MonkeyLogo";

interface GitCommentProps {
  username: string;
  comment: string;
  createdAt: string;
  codeSuggestion?: string;
  line: number;
}

const GitComment: React.FC<GitCommentProps> = ({
  username,
  comment,
  createdAt,
  codeSuggestion,
  line,
}) => {
  const [resolved, setResolved] = useState(false);

  const handleCheckboxChange = () => {
    setResolved(!resolved);
  };

  return (
    <div className={`flex space-x-4 p-4 border-b border-gray-200 ${resolved ? "pb-4" : "pb-10"}`}>
      <div>
        <div className="flex items-center space-x-2 items-center">
          <div className="min-w-[20px]">
            <MonkeyLogo className="!fill-white" />
          </div>
          <h5 className="font-bold">{username}</h5>
          <span className="text-sm text-gray-500 mr-16">{createdAt}</span>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={resolved}
              onChange={handleCheckboxChange}
              className="ml-[350px] border-green-400 h-5 w-5 text-green-600 focus:ring-green-400"
            />
            <label className="text-green-600">Resolved</label>
          </div>
        </div>
        <div id="comment-bot" className="mt-5">
          <p className={`text-white mt-1 ${resolved ? 'hidden' : ''}`}>
            <span className="text-gray-500">At {line}: </span>
            {comment}
          </p>
          {codeSuggestion && !resolved && (
            <div className="mt-2">
              <AceEditor
                height="fit-content"
                mode="javascript"
                theme="dracula"
                value={codeSuggestion}
                readOnly
                name="codeSuggestion"
                editorProps={{ $blockScrolling: true }}
                fontSize={16}
                style={{ minHeight: "110px", width: "700px" }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GitComment;
