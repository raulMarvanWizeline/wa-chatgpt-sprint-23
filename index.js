var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  mode: () => mode,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough(), stream = (0, import_node.createReadableStreamFromReadable)(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough(), stream = (0, import_node.createReadableStreamFromReadable)(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
var import_react2 = require("@remix-run/react");

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-LEEYSG2R.css";

// app/root.tsx
var import_jsx_runtime2 = require("react/jsx-runtime"), links = () => [
  { rel: "stylesheet", href: tailwind_default },
  ...void 0 ? [{ rel: "stylesheet", href: void 0 }] : []
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Links, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Outlet, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.ScrollRestoration, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Scripts, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.LiveReload, {})
    ] })
  ] });
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  loader: () => loader,
  meta: () => meta
});
var import_node2 = require("@remix-run/node");

// app/components/CodeReviewPanel/CodeReviewPanel.tsx
var import_react5 = require("react");

// app/components/EditorSettings/EditorSettings.tsx
var import_jsx_runtime3 = require("react/jsx-runtime"), EditorSettings = ({ fontSize, setFontSize, mode: mode2, setMode, theme, setTheme, disabled }) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex flex-col gap-4 p-4", children: [
  /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("label", { htmlFor: "fontSize", className: "block", children: "Font size" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      "input",
      {
        id: "fontSize",
        type: "number",
        value: fontSize,
        min: 8,
        max: 24,
        onChange: (e) => setFontSize(Number(e.target.value)),
        disabled,
        className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      }
    )
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("label", { htmlFor: "mode", className: "block", children: "Language" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
      "select",
      {
        id: "mode",
        value: mode2,
        onChange: (e) => setMode(e.target.value),
        disabled,
        className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("option", { value: "javascript", children: "JavaScript" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("option", { value: "python", children: "Python" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("option", { value: "csharp", children: "C#" })
        ]
      }
    )
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("label", { htmlFor: "theme", className: "block", children: "Theme" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
      "select",
      {
        id: "theme",
        value: theme,
        onChange: (e) => setTheme(e.target.value),
        disabled,
        className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("option", { value: "github", children: "Github" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("option", { value: "monokai", children: "Monokai" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("option", { value: "xcode", children: "XCode" })
        ]
      }
    )
  ] })
] }), EditorSettings_default = EditorSettings;

// app/components/CodeEditor/CodeEditor.tsx
var import_react_ace = __toESM(require("react-ace")), import_mode_javascript = require("ace-builds/src-noconflict/mode-javascript"), import_mode_python = require("ace-builds/src-noconflict/mode-python"), import_mode_csharp = require("ace-builds/src-noconflict/mode-csharp"), import_theme_github = require("ace-builds/src-noconflict/theme-github"), import_theme_monokai = require("ace-builds/src-noconflict/theme-monokai"), import_theme_xcode = require("ace-builds/src-noconflict/theme-xcode"), import_jsx_runtime4 = require("react/jsx-runtime"), CodeEditor = ({ value, onChange, fontSize, mode: mode2, theme, disabled }) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "ml-4 p-2 border border-gray-300 rounded-lg shadow-sm w-fit", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
  import_react_ace.default,
  {
    className: "!w-[800px]",
    readOnly: disabled,
    mode: mode2,
    theme,
    name: "UNIQUE_ID_OF_DIV",
    value,
    onChange,
    fontSize,
    showPrintMargin: !0,
    showGutter: !0,
    highlightActiveLine: !0,
    setOptions: {
      enableBasicAutocompletion: !1,
      enableLiveAutocompletion: !1,
      enableSnippets: !1,
      showLineNumbers: !0,
      tabSize: 2
    }
  }
) }), CodeEditor_default = CodeEditor;

// app/components/GitComment/GitComment.tsx
var import_react3 = require("react"), import_react_ace2 = __toESM(require("react-ace")), import_mode_javascript2 = require("ace-builds/src-noconflict/mode-javascript"), import_theme_dracula = require("ace-builds/src-noconflict/theme-dracula");

// app/components/icons/MonkeyLogo.tsx
var import_jsx_runtime5 = require("react/jsx-runtime"), MonkeyLogo = (props) => /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
  "svg",
  {
    width: "20",
    height: "20",
    viewBox: "0 0 50 50",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: `M25,1C11.8,1,1,11.8,1,25s10.8,24,24,24s24-10.8,24-24S38.2,1,25,1z M25,45
        c-11,0-20-9-20-20s9-20,20-20s20,9,20,20S36,45,25,45z` }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("circle", { cx: "17", cy: "22", r: "3" }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("circle", { cx: "33", cy: "22", r: "3" }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M25,28c-4.4,0-8,2.9-8,6.5S20.6,41,25,41s8-2.9,8-6.5S29.4,28,25,28z" })
    ]
  }
), MonkeyLogo_default = MonkeyLogo;

// app/components/GitComment/GitComment.tsx
var import_jsx_runtime6 = require("react/jsx-runtime"), GitComment = ({
  username,
  comment,
  createdAt,
  codeSuggestion,
  line
}) => {
  let [resolved, setResolved] = (0, import_react3.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: `flex space-x-4 p-4 border-b border-gray-200 ${resolved ? "pb-4" : "pb-10"}`, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "flex items-center space-x-2 items-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "min-w-[20px]", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(MonkeyLogo_default, { className: "!fill-white" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h5", { className: "font-bold", children: username }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "text-sm text-gray-500 mr-16", children: createdAt }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          "input",
          {
            type: "checkbox",
            checked: resolved,
            onChange: () => {
              setResolved(!resolved);
            },
            className: "ml-[350px] border-green-400 h-5 w-5 text-green-600 focus:ring-green-400"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("label", { className: "text-green-600", children: "Resolved" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { id: "comment-bot", className: "mt-5", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("p", { className: `text-white mt-1 ${resolved ? "hidden" : ""}`, children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("span", { className: "text-gray-500", children: [
          "At ",
          line,
          ": "
        ] }),
        comment
      ] }),
      codeSuggestion && !resolved && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
        import_react_ace2.default,
        {
          height: "fit-content",
          mode: "javascript",
          theme: "dracula",
          value: codeSuggestion,
          readOnly: !0,
          name: "codeSuggestion",
          editorProps: { $blockScrolling: !0 },
          fontSize: 16,
          style: { minHeight: "110px", width: "700px" }
        }
      ) })
    ] })
  ] }) });
}, GitComment_default = GitComment;

// app/hooks/useOpenAI.ts
var import_react4 = require("react");

// app/utils/sendQueryToOpenAI.ts
var import_axios = __toESM(require("axios")), sendQueryToOpenAI = async (query, OPENAI_API_KEY, OPENAI_API_URL) => {
  try {
    return (await import_axios.default.post(
      OPENAI_API_URL,
      {
        //max_tokens: 150,
        model: "gpt-3.5-turbo-1106",
        messages: [
          {
            role: "system",
            content: "you the most skilled and experienced developer in the world"
          },
          {
            role: "user",
            content: query
          }
        ],
        temperature: 0.2,
        response_format: {
          type: "json_object"
        }
      },
      {
        headers: {
          Authorization: `Bearer ${OPENAI_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    )).data.choices[0].message.content;
  } catch (error) {
    throw console.error("Error:", error), error;
  }
}, sendQueryToOpenAI_default = sendQueryToOpenAI;

// app/hooks/useOpenAI.ts
var useOpenAIHook = () => {
  let [response, setResponse] = (0, import_react4.useState)("");
  return { response, onSubmitQuery: async (query, OPENAI_API_KEY, OPENAI_API_URL) => {
    try {
      let aiResponse = await sendQueryToOpenAI_default(query, OPENAI_API_KEY, OPENAI_API_URL);
      setResponse(aiResponse);
    } catch (error) {
      console.error("Error:", error);
    }
  } };
}, useOpenAI_default = useOpenAIHook;

// app/components/CodeReviewPanel/CodeReviewPanel.tsx
var import_react6 = require("@remix-run/react");

// app/components/Loader/Loader.tsx
var import_jsx_runtime7 = require("react/jsx-runtime"), Loader = ({ text = "Loading..." }) => /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "flex flex-col items-center justify-center h-screen", children: [
  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "animate-spin rounded-full border-t-4 border-blue-500 border-solid h-12 w-12" }),
  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "mt-4 text-lg", children: text })
] }), Loader_default = Loader;

// app/components/CodeReviewPanel/CodeReviewPanel.tsx
var import_jsx_runtime8 = require("react/jsx-runtime"), CodeReviewPanel = () => {
  let { OPENAI_API_KEY, OPENAI_API_URL } = (0, import_react6.useLoaderData)(), [code, setCode] = (0, import_react5.useState)(""), [fontSize, setFontSize] = (0, import_react5.useState)(14), [mode2, setMode] = (0, import_react5.useState)("javascript"), [theme, setTheme] = (0, import_react5.useState)("monokai"), { response, onSubmitQuery } = useOpenAI_default(), defaultResponse = [
    {
      comment: "Something went wrong, please try again later.",
      line: 1
    }
  ], [comments, setComments] = (0, import_react5.useState)([]), [isSubmitting, setIsSubmitting] = (0, import_react5.useState)(!1), handleAnalyzeCode = (e) => {
    e.preventDefault(), setIsSubmitting(!0);
    let query = `Do code review of the following code. The programming language is ${mode2 === "javascript" ? `${mode2} with react. Add best react practices to the review` : mode2}, it must be a strict review, and you will respond to a json with an array of comments with all the improvements you find. Avoid adding comments on each line of code, only for those that you think can be improved and corrected, or if you consider that they are bad practices or that could cause an execution interruption. The response will be in a json, which will contain the array, and each comment with the following format:
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
  return (0, import_react5.useEffect)(() => {
    if (response)
      try {
        let jsonResponse = JSON.parse(response);
        console.log(jsonResponse), setComments(jsonResponse.comments);
      } catch (e) {
        console.log(e), setComments(defaultResponse);
      } finally {
        setIsSubmitting(!1);
      }
  }, [response]), /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "flex h-screen flex-cols-2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "col-span-1 flex-1 p-4 border-r border-gray-700", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("form", { onSubmit: handleAnalyzeCode, children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        EditorSettings_default,
        {
          fontSize,
          setFontSize,
          mode: mode2,
          setMode,
          theme,
          setTheme,
          disabled: isSubmitting
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        CodeEditor_default,
        {
          value: code,
          onChange: setCode,
          fontSize,
          mode: mode2,
          theme,
          disabled: isSubmitting
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        "button",
        {
          type: "submit",
          className: "ml-4 btn btn-primary mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed",
          disabled: !code || code.length <= 0 || !theme || !mode2 || !fontSize || isSubmitting,
          children: "Code review"
        }
      )
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "col-span-1 flex-1 p-4 overflow-auto text-white bg-gray-800 overflow-scroll pb-16", children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h1", { className: "text-2xl font-bold mb-10", children: "Code Review" }),
      isSubmitting && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Loader_default, { text: "Analyzing code..." }),
      comments.map((comment, index) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(GitComment_default, { comment: comment.comment, line: comment.line, username: "Code Review Bot", createdAt: "Today", codeSuggestion: comment?.codeSuggestion }, index))
    ] })
  ] });
}, CodeReviewPanel_default = CodeReviewPanel;

// app/routes/_index.tsx
var import_jsx_runtime9 = require("react/jsx-runtime"), meta = () => [
  { title: "New Remix App" },
  { name: "description", content: "Welcome to Remix!" }
], loader = async () => (0, import_node2.json)({
  OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  OPENAI_API_URL: process.env.OPENAI_API_URL
});
function Index() {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "bg-dark", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(CodeReviewPanel_default, {}) });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-BSLFBJMH.js", imports: ["/build/_shared/chunk-GNARTCJR.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-G4577IF6.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-6F4DQJA7.js", imports: void 0, hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 } }, version: "beec0eb5", hmr: void 0, url: "/build/manifest-BEEC0EB5.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "production", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
});
