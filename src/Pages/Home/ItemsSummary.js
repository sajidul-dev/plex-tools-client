import React from 'react';
import { FaPencilRuler, FaBrush } from 'react-icons/fa';
import { BsLightbulb, BsTools, BsFillLockFill, BsScissors, BsFillTagsFill } from 'react-icons/bs';
const ItemsSummary = () => {
    return (
        <div className='my-12 px-8 lg:flex justify-center'>
            <div className='hover:text-primary mx-8'>
                <h1 className='text-7xl font-thin'><FaPencilRuler className='w-5/6 mx-auto ' /></h1>
                <h2 className='text-lg my-3 text-center'>ACCESORIES</h2>
            </div>
            <div className='hover:text-primary mx-8'>
                <h1 className='text-7xl'><BsLightbulb className='w-5/6 mx-auto ' /></h1>
                <h2 className='text-lg my-3 text-center'>POWER TOOLS</h2>
            </div>
            <div className='hover:text-primary mx-8'>
                <h1 className='text-7xl'><BsTools className='w-5/6 mx-auto ' /></h1>
                <h2 className='text-lg my-3 text-center'>HAND TOOLS</h2>
            </div>
            <div className='hover:text-primary mx-8'>
                <h1 className='text-7xl'><BsFillLockFill className='w-5/6 mx-auto ' /></h1>
                <h2 className='text-lg my-3 text-center'>
                    HANDSAW</h2>
            </div>
            <div className='hover:text-primary mx-8'>
                <h1 className='text-7xl'><BsScissors className='w-5/6 mx-auto ' /></h1>
                <h2 className='text-lg my-3 text-center'>OPEN PILERS</h2>
            </div>
            <div className='hover:text-primary mx-8'>
                <h1 className='text-7xl'><FaBrush className='w-5/6 mx-auto ' /></h1>
                <h2 className='text-lg my-3 text-center'>PAINT TOOLS</h2>
            </div>
            <div className='hover:text-primary mx-8'>
                <h1 className='text-7xl'><BsFillTagsFill className='w-5/6 mx-auto ' /></h1>
                <h2 className='text-lg my-3 text-center'>PLUMBING TOOLS</h2>
            </div>

        </div>
    );
};

export default ItemsSummary;