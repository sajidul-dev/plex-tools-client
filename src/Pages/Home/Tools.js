import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Tool from './Tool';

const Tools = () => {
    const { data: tools, isLoading } = useQuery('tools', () => fetch('http://localhost:5000/alltools').then(res => res.json()))

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