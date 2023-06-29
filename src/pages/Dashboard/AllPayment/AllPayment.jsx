import React, { useState } from 'react';
import { Form } from 'react-router-dom';
import usePayment from '../../../hooks/usePayment/usePayment';

const AllPayment = () => {
    const [searchvalue,setSearchvalue] = useState('');
    const [AllPayment,refetch] = usePayment(searchvalue)

    const handleChange =(e)=>{
        setSearchvalue(e.target.value)
    }
      const handleSearch = (e) =>{
        e.preventDefault();
        const value = e.target.searchvalue.value;
        setSearchvalue(value)
      }
      const totalAmount = AllPayment.reduce((total,item)=> total + item.total,0)
      const totalDue = AllPayment.reduce((total,item)=> total + item.due,0)
      const totalPaid = AllPayment.reduce((total,item)=> total + item.paid,0)
    return (
        <div className='w-full p-4'>
            <div className='text-center mt-5 mb-5'>
            <Form onSubmit={handleSearch}>
            <input onChange={handleChange} type="text" name='searchvalue' placeholder="Type CUET ID to search" className="input input-bordered input-primary w-full max-w-xs" />
            <input type="submit" className='btn btn-outline ml-2' value="Search" />
            </Form>
          </div>
        
  <p className='text-center text-3xl font-bold mb-5'>Total Payment Information</p>
  <div className="overflow-x-auto">
  <table className="table table-xs table-pin-rows table-pin-cols">
    <thead>
      <tr>
        <th>Total Amount</th> 
        <th>Paid</th> 
        <th>Due</th>
      </tr>
    </thead> 
    <tbody>
    <tr>
        <th>{totalAmount}</th> 
        <th>{totalPaid}</th> 
        <th>{totalDue}</th>
      </tr>
    </tbody>
  </table>
</div>



            <p className='text-center mt-10 text-3xl font-bold mb-5'>All Payment Information</p>
            <div className="overflow-x-auto">
  <table className="table table-xs table-pin-rows table-pin-cols">
    <thead>
      <tr>
        <th>#</th> 
        <td>User Name</td>
        <td>CUET Id</td> 
        <td>Total Amount</td> 
        <td>Paid</td> 
        <td>Due</td> 
        <td>Date</td>
      </tr>
    </thead> 
    <tbody>
        {
          AllPayment &&  AllPayment.map((item,index)=> <tr key={index}>
            <td>{++index}</td>
            <td>{item.name}</td>
            <td>{item.cuetId}</td>
            <td>{item.total}</td>
            <td>{item.paid}</td>
            <td>{item.due}</td>
            <td>{item.date}</td>
          </tr>)
        }
    </tbody> 
  </table>
  
</div>
        </div>
    );
};

export default AllPayment;