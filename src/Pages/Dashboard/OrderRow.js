import React from 'react';
import { Link } from 'react-router-dom';

const OrderRow = ({ tool, index }) => {
    return (
        <tr >
            <th>{index + 1}</th>
            <td>{tool.name}</td>
            <td>{tool.toolName}</td>
            <td>{tool.quantity}</td>
            <td>$ {tool.price}</td>
            <td>
                {(tool.price && !tool.paid) && <Link to={`/dashboard/payment/${tool._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}
                {tool.shifted === true && <p className='text-success'>Shifted</p>}
                {(tool.paid === true && !tool.shifted) && <p className='text-warning'>pending</p>}
            </td>
            <td>
                {(tool.price && tool.paid) && <>
                    <p><span className='text-success'>Paid</span></p>
                    <p><small className='text-success'>TransactionId: {tool.transactionId}</small></p>
                </>}
            </td>
        </tr>
    )
};

export default OrderRow;