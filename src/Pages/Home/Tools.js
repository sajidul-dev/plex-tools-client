import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const Tools = () => {
    const { data: tools, isLoading } = useQuery('tools', () => fetch('http://localhost:5000/tools').then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }


    return (
        <div>
            <h2>This is from tools: {tools.length}</h2>
        </div>
    );
};

export default Tools;