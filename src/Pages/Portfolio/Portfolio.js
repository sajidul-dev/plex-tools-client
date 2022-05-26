import React from 'react';
import Myimg from '../../assets/Myimg.jpg'

const Portfolio = () => {
    return (
        <div className='w-4/6 mx-auto text-center'>
            <h2 className='text-2xl text-primary my-5'>My portfolio</h2>
            <div className="avatar">
                <div className="w-40 rounded-full">
                    <img src={Myimg} alt='' />
                </div>
            </div>
            <h2 className='text-xl'>Name: Mohammad Sajidul Alam</h2>
            <h2 className='text-xl'>Email: mdsajidulalam1245@gmail.com</h2>
            <h2 className='text-xl'>Education: Bsc in Computer Science and Engineering</h2>
            <h2 className='text-xl'>Institution: Port City International University</h2>
            <h2 className='text-xl'>Skills: HTML5,CSS3,Javscript,React Js, Firebase Authentication, MongoDB(Database),Stripe(Payment System)</h2>
            <h2 className='text-xl font-semibold'>Projects: </h2>
            <a className='btn btn-sm btn-accent text-white my-3' href="https://warehouse-management-949b6.web.app/">Warehouse Management</a>
            <br />
            <a className='btn btn-sm btn-accent text-white mb-3' href="https://unitreat-2da99.web.app/">Unitreat</a>
            <br />
            <a className='btn btn-sm btn-accent text-white' href=" https://airpods-plus-react.netlify.app/">Airpod Plus</a>
        </div>
    );
};

export default Portfolio;