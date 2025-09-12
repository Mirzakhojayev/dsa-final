import React from 'react'
import Split from 'react-split'
import ProblemDescription from './problemDescription'

type Props = {}

const Workspace = (props: Props) => {
  return (
    <div className="w-full h-[100vh]">
      <Split
        className='split'
        sizes={[45, 55]}
        minSize={0}
        expandToMin={false}
        gutterSize={5}
        gutterAlign='center'
        snapOffset={30}
        dragInterval={1}
        direction='horizontal'
        cursor='col-resize'>
        <ProblemDescription />
      </Split>
    </div>
  )
}

export default Workspace