import {cache} from "react";
import type {Metadata} from "next";
import {notFound} from "next/navigation";
import Topbar from "@/app/components/TopBar";
import Workspace from "@/app/components/Workspace/workspace";
import {ApiError, getQuestion} from "@/lib/api";

type Props = {
  params: Promise<{problemId: string}>;
};

// Shared by generateMetadata and the page, so the API is called once per request.
// Errors other than 404 (e.g. server down) are rethrown and handled by error.tsx.
const loadQuestion = cache(async (slug: string) => {
  try {
    return await getQuestion(slug, {cache: "no-store"});
  } catch (err) {
    if (err instanceof ApiError && err.status === 404) notFound();
    throw err;
  }
});

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {problemId} = await params;
  const question = await loadQuestion(problemId);
  return {title: `${question.order}. ${question.title} | dsa.uz`};
}

const ProblemPage = async ({params}: Props) => {
  const {problemId} = await params;
  const question = await loadQuestion(problemId);

  return (
    <div>
      <Topbar />
      <Workspace question={question} />
    </div>
  );
};

export default ProblemPage;
