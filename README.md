# Code Reviewer App

## Introduction

The Code Reviewer App is a React-based application that offers an automated code reviewing experience using OpenAI's API. This simple interface allows users to choose the font size, programming language, and Ace editor theme. Users can input their code into the editor, submit it for review, and receive AI-generated code review comments displayed on the right side of the interface.

## Features

- **Customizable Ace Editor**: Select your preferred font size, programming language, and editor theme.
- **Code Input**: A dedicated space to input and edit your code.
- **Automated Code Review**: After submitting your code, the OpenAI API provides insightful code review comments.

## Dependencies

This project uses several dependencies listed below:

### Main Dependencies
- `@remix-run/{css-bundle, node, react, serve}`: Provides the core functionality for the Remix framework.
- `ace-builds`: Core builds for the Ace editor.
- `axios`: For making HTTP requests.
- `dotenv`: To manage environment variables.
- `isbot`: Detect bots/spiders/crawlers.
- `openai`: OpenAI's official SDK for JavaScript.
- `react` and `react-dom`: Core React libraries.
- `react-ace`: React component for Ace editor.
- `tailwindcss`: Utility-first CSS framework.

### Development Dependencies
- `@remix-run/dev` and `@remix-run/eslint-config`: Development tools for Remix applications.
- `@types/{react, react-dom, tailwindcss}`: TypeScript definitions.
- `eslint`: Linting utility.
- `gh-pages`: For deploying the app to GitHub Pages.
- `typescript`: TypeScript language support.

## Setup

1. Clone the repository.
2. Run `npm install` to install the dependencies.
3. Create a `.env` file and add your OpenAI API key as `OPENAI_API_KEY`.
4. Run `npm start` to start the application.

## Usage

- Start the application.
- Customize the editor settings as needed.
- Write or paste your code in the editor.
- Click the 'Submit for Review' button to send your code to the OpenAI API.
- View the AI-generated review comments on the right side of the screen.

## Contributing

Contributions are welcome. Please fork the repository and submit a pull request with your proposed changes.

## License

[MIT License](LICENSE)
