import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-dracula";

interface GitCommentProps {
  username: string;
  userImage: string;
  comment: string;
  createdAt: string;
  codeSuggestion?: string;
}

const GitComment: React.FC<GitCommentProps> = ({ username, userImage, comment, createdAt, codeSuggestion }) => {
  return (
    <div className="flex space-x-4 p-4 border-b border-gray-200">
      <img src={userImage} alt={`${username}'s profile`} className="w-10 h-10 rounded-full" />
      <div>
        <div className="flex items-center space-x-2">
          <h5 className="font-bold">{username}</h5>
          <span className="text-sm text-gray-500">{createdAt}</span>
        </div>
        <p className="text-white mt-1">{comment}</p>
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
              style={{ width: '100%', minHeight: '100px' }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default GitComment;
