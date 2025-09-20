"use client";
import Split from "react-split";
import ProblemDescription from "./problemDescription";
import Playground from "./Playground/playground";

type Props = {};

const Workspace = (props: Props) => {
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
          <ProblemDescription />
        </div>
        <div style={{width: "100%", height: "100%"}}>
          <Playground />
        </div>
      </Split>
    </div>
  );
};

export default Workspace;
