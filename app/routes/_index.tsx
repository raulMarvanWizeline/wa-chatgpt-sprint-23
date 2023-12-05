import { json, type LoaderFunction, type MetaFunction } from "@remix-run/node";
import CodeReviewPanel from "~/components/CodeReviewPanel/CodeReviewPanel";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader: LoaderFunction = async () => {
  return json({
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    OPENAI_API_URL: process.env.OPENAI_API_URL,
  });
};

export default function Index() {
  return (
    <div className="bg-dark">
      <CodeReviewPanel />
    </div>
  );
}
