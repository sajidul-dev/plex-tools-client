import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Tool from './Tool';

const Tools = () => {
    const { data: tools, isLoading } = useQuery('tools', () => fetch('https://plex-tool-server.onrender.com/tools').then(res => res.json()))
    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='mt-8'>
            <h2 className='text-3xl text-center text-primary'>Tools</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8 px-8'>
                {
                    tools.map(tool => <Tool key={tool._id} tool={tool}></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;