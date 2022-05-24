import React from 'react';
import useTools from '../../hooks/useTools';
import Loading from '../Shared/Loading';
import Tool from './Tool';

const Tools = () => {
    const [tools, isLoading] = useTools()

    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <h2>This is from tools: {tools.length}</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8 px-8'>
                {
                    tools.map(tool => <Tool key={tool._id} tool={tool}></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;