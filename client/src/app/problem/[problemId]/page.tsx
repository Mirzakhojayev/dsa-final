import Topbar from "@/app/components/TopBar";
import Workspace from "@/app/components/Workspace/workspace";
import React from "react";

type Props = {};

const ProblemPage = (props: Props) => {
  return (
    <div>
      <Topbar />
      <Workspace />
    </div>
  );
};

export default ProblemPage;
