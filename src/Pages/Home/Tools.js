import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Tool from './Tool';

const Tools = () => {
    const { data: tools, isLoading } = useQuery('tools', () => fetch('https://hidden-ravine-83246.herokuapp.com/tools').then(res => res.json()))
    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <h2>Tools</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8 px-8'>
                {
                    tools.map(tool => <Tool key={tool._id} tool={tool}></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;