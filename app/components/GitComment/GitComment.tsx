import React from "react";
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

const GitComment: React.FC<GitCommentProps> = ({ username, comment, createdAt, codeSuggestion, line }) => {
  return (
    <div className="flex space-x-4 p-4 border-b border-gray-200 pb-10">
      <div className="min-w-[50px]">
        <MonkeyLogo className="!fill-white" />
      </div>
      <div>
        <div className="flex items-center space-x-2">
          <h5 className="font-bold">{username}</h5>
          <span className="text-sm text-gray-500">{createdAt}</span>
        </div>
        <p className="text-white mt-1"><span className="text-gray-500">At {line}: </span>{comment}</p>
        {codeSuggestion && (
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
              style={{ minHeight: '110px', width: '700px' }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default GitComment;
