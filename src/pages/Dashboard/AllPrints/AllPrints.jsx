import React, { useState } from 'react';
import useAllPrints from '../../../hooks/useUser/useAllPrints';
import { Form } from 'react-router-dom';

const AllPrints = () => {
    const [searchvalue,setSearchvalue] = useState('');
    const [AllPrints,] = useAllPrints(searchvalue)
    const handleChange =(e)=>{
        setSearchvalue(e.target.value)
      }
      const handleSearch = (e) =>{
        e.preventhefault();
        const value = e.target.searchvalue.value;
        setSearchvalue(value)
      }
      console.log(AllPrints)
      const totalAmount = AllPrints.reduce((total,item)=> total + item.total,0)
      const totalblacksingle = AllPrints.reduce((total,item)=> total + item.blacksingle,0)
      const totalblackdouble = AllPrints.reduce((total,item)=> total + item.blackdouble,0)
      const totalfront = AllPrints.reduce((total,item)=> total + item.front,0)
      const totalgraph = AllPrints.reduce((total,item)=> total + item.graph,0)
      const totalcolor = AllPrints.reduce((total,item)=> total + item.color,0)
      const totaldiscount = AllPrints.reduce((total,item)=> total + item.discount,0)
      const totaladditional = AllPrints.reduce((total,item)=> total + item.additional,0)

    return (
        <div className='w-full p-4'>
            <div className='text-center mt-5 mb-5'>
            <Form onSubmit={handleSearch}>
            <input onChange={handleChange} type="text" name='searchvalue' placeholder="Type CUET ID to search" className="input input-bordered input-primary w-full max-w-xs" />
            <input type="submit" className='btn btn-outline ml-2' value="Search" />
            </Form>
          </div>
        
  <p className='text-center text-3xl font-bold mb-5'>Total Amount Information</p>
  <div className="overflow-x-auto">
  <table className="table table-xs table-pin-rows table-pin-cols">
    <thead>
      <tr>
        <th>Black<br/>(single)</th> 
        <th>Black<br/>(double)</th> 
        <th>Front<br/> Page</th> 
        <th>Graph<br/> Print</th> 
        <th>Image<br/> Print</th> 
        <th>Total<br/> Discount</th> 
        <th>Total<br/> Additional Charge</th>
        <th>Total<br/> Amount</th> 
      </tr>
    </thead> 
    <tbody>
      <tr>
        <th>{totalblacksingle}</th> 
        <th>{totalblackdouble}</th> 
        <th>{totalfront}</th> 
        <th>{totalgraph}</th> 
        <th>{totalcolor}</th> 
        <th>{totaldiscount} tk</th> 
        <th>{totaladditional} tk</th>
        <th>{totalAmount} tk</th> 
      </tr>
    </tbody>
  </table>
</div>



            <p className='text-center mt-10 text-3xl font-bold mb-5'>All Print Information</p>
            <div className="overflow-x-auto">
  <table className="table table-xs table-pin-rows table-pin-cols">
    <thead>
      <tr>
        <th>#</th> 
        <th>User Name</th> 
        <th>CUET Id</th> 
        <th>Black<br/>(single)</th> 
        <th>Black<br/>(double)</th> 
        <th>Front<br/> Page</th> 
        <th>Graph<br/> Print</th>
        <th>Image<br/> Print</th> 
        <th>Discount</th> 
        <th>Additional<br/> Charge</th> 
        <th>Total<br/> Amount</th> 
        <th>Date</th> 
        <th>Issued By</th> 
      </tr>
    </thead> 
    <tbody>
      {
        AllPrints && AllPrints.map((print,index)=> <tr key={index}>
            <th>{++index}</th>
            <th>{print.name}</th>
            <th>{print.cuetId}</th>
            <th>{print.blacksingle}</th>
            <th>{print.blackdouble}</th>
            <th>{print.front}</th>
            <th>{print.graph}</th>
            <th>{print.color}</th>
            <th>{print.discount}</th>
            <th>{print.additional}</th>
            <th>{print.total}</th>
            <th>{print.date}</th>
            <th>{print.issuedBy}</th>

        </tr>)
      }
    </tbody> 
  </table>
  
</div>
        </div>
    );
};

export default AllPrints;