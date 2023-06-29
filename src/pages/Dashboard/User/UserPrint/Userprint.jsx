import React from 'react';
import useUserPrint from '../../../../hooks/useUser/useUserPrint';

const Userprint = () => {
    const [UserPrints,refetch] = useUserPrint()
    const totalAmount = UserPrints.reduce((total,item)=> total + item.total,0)
      const totalblacksingle = UserPrints.reduce((total,item)=> total + item.blacksingle,0)
      const totalblackdouble = UserPrints.reduce((total,item)=> total + item.blackdouble,0)
      const totalfront = UserPrints.reduce((total,item)=> total + item.front,0)
      const totalgraph = UserPrints.reduce((total,item)=> total + item.graph,0)
      const totalcolor = UserPrints.reduce((total,item)=> total + item.color,0)
      const totaldiscount = UserPrints.reduce((total,item)=> total + item.discount,0)
      const totaladditional = UserPrints.reduce((total,item)=> total + item.additional,0)
    return (
        <div>
            <p className='text-center text-3xl font-bold mt-5 mb-5'>Total Amount Information</p>
  <div className="overflow-x-auto lg:w-3/4 lg:mx-auto">
  <table className="table table-xs table-pin-rows table-pin-cols">
    <thead>
      <tr>
        <th>Black(single)</th> 
        <th>Black(double)</th> 
        <th>Front Page</th> 
        <th>Graph Print</th> 
        <th>Image Print</th> 
        <th>Total Discount</th> 
        <th>Total Additional Charge</th>
        <th>Total Amount</th> 
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
        <td>CUET Id</td> 
        <td>Black(single)</td> 
        <td>Black(double)</td> 
        <td>Front Page</td> 
        <td>Graph Print</td>
        <th>Image Print</th> 
        <th>Discount</th> 
        <th>Additional Charge</th> 
        <th>Total Amount</th> 
        <th>Date</th> 
        <th>Status</th>
        <th>Issued By</th> 
      </tr>
    </thead> 
    <tbody>
      {
        UserPrints && UserPrints.map((print,index)=> <tr key={index}>
            <td>{++index}</td>
            <td>{print.cuetId}</td>
            <td>{print.blacksingle}</td>
            <td>{print.blackdouble}</td>
            <td>{print.front}</td>
            <td>{print.graph}</td>
            <td>{print.color}</td>
            <td>{print.discount}</td>
            <td>{print.additional}</td>
            <td>{print.total}</td>
            <td>{print.date}</td>
            <td>{print.status}</td>
            <td>{print.issuedBy}</td>

        </tr>)
      }
    </tbody> 
  </table>
</div>
</div>
)}


export default Userprint;