import type { MetaFunction } from "@remix-run/node";
import CodeReviewPanel from "~/components/CodeReviewPanel/CodeReviewPanel";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="App">
      <CodeReviewPanel />
    </div>
  );
}
