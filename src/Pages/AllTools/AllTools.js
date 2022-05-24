import React from 'react';
import useTools from '../../hooks/useTools';
import Tool from '../Home/Tool';
import Loading from '../Shared/Loading';

const AllTools = () => {
    const [tools, isLoading] = useTools()
    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            {
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8 px-14'>
                    {
                        tools.map(tool => <Tool key={tool._id} tool={tool}></Tool>)
                    }
                </div>
            }
        </div>
    );
};

export default AllTools;