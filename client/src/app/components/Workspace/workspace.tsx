"use client";
import Split from "react-split";
import ProblemDescription from "./problemDescription";
import Playground from "./Playground/playground";
import type {Question} from "@/types/question";

type Props = {
  question: Question;
};

const Workspace = ({question}: Props) => {
  return (
    <div className='w-full h-[100vh]'>
      <Split
        style={{display: "flex", width: "100%", height: "100%"}}
        sizes={[45, 55]}
        minSize={0}
        expandToMin={false}
        gutterSize={5}
        gutterAlign='center'
        snapOffset={30}
        dragInterval={1}
        direction='horizontal'
        cursor='col-resize'>
        <div style={{width: "100%", height: "100%"}}>
          <ProblemDescription question={question} />
        </div>
        <div style={{width: "100%", height: "100%"}}>
          {/* key: start with fresh editor state when navigating to another problem */}
          <Playground
            key={question.slug}
            question={question}
          />
        </div>
      </Split>
    </div>
  );
};

export default Workspace;
