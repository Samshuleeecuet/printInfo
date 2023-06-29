import moment from 'moment/moment';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import useUser from '../../hooks/useUser/useUser';
import { Form } from 'react-router-dom';
import usePayment from '../../hooks/usePayment/usePayment';

const AddPayment = () => {
    const [isUser] = useUser();
    const [PaymentInfo,setPaymentInfo] = useState({});
    const [AllPayment,refetch] = usePayment('')
    const handleSubmit = ()=>{
        const date = moment(new Date()).format('MMMM Do YYYY, h:mm:ss a');
    }
    const handleChange = (e)=>{
        const id = e.target.value
        console.log(id)
        const found = AllPayment.find(payment=> payment.cuetId === id)
        console.log(found)
        setPaymentInfo(found)
    }
    return (
        <div className='p-5 font-mono'>
        <div className='min-h-screen w-2/6 mx-auto'>
             <h2 className='text-center text-2xl font-extrabold pb-10 '> Add New Payment Information</h2>
             <Form onSubmit={handleSubmit} className='border p-4 rounded border-red-400'>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">User Name</span>
                    </label>
                    <input type="text" name='name' value={PaymentInfo?.name || ''} placeholder="User Name" className="input border rounded-lg h-12 w-full pl-4 mb-4 border-red-400" required/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">CUET ID</span>
                    </label>
                    <input onChange={handleChange} type="text" name='cuetid' placeholder="CUET ID" className="input border rounded-lg h-12 w-full pl-4 mb-4 border-red-400" required/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Total Amount</span>
                    </label>
                    <input type="text" name='total' value={PaymentInfo?.total || ''} placeholder="Total Due Amount" className="input border rounded-lg h-12 w-full pl-4 mb-4 border-red-400" required/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Total Due Amount</span>
                    </label>
                    <input type="text" name='due' value={PaymentInfo?.due || ''} placeholder="Total Due Amount" className="input border rounded-lg h-12 w-full pl-4 mb-4 border-red-400" required/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Total Paid Amount</span>
                    </label>
                    <input type="text" name='paid' placeholder="Total Paid Amount" className="input border rounded-lg h-12 w-full pl-4 mb-4 border-red-400" required/>
                </div>
                <input className='btn btn-accent text-white' type="submit" value="Add Paid Amount" />
             </Form>
            {/* <form className='border-2 p-5 rounded-lg w-full' onSubmit={handleSubmit(onSubmit)}>
               <label htmlFor="name">User Name</label>
               <input className='border rounded-lg h-12 w-full pl-4 mb-4 border-red-400' defaultValue="" type='text' id='name' placeholder='User Name' {...register("name",{required: true})} required/>
               <br/>
               <label htmlFor="cuetID">CUET ID</label>
               <input onChange={handleChange} className='border rounded-lg h-12 w-full pl-4 mb-4 border-red-400' defaultValue="" type='text' name='cuetID' placeholder='CUET ID' {...register("cuetId",{required: true})} required/>
               <br/>
               <div className='flex gap-4'>
               <div>
               <label htmlFor="black_single">Black (Single)</label>
               <br/>
               <input className='border rounded-lg h-12 w-32 pl-4 mb-4 border-red-400' name='black_single' defaultValue={0} type='number' placeholder='Black Print(Single)' {...register("blacksingle")} required/>
               </div>
               <br/>
               <div>
               <label htmlFor="black_double">Black (Double)</label>
               <br/>
               <input className='border rounded-lg h-12 w-32 pl-4 mb-4 border-red-400' name='black_double' defaultValue={0} type='number' placeholder='Black Print(Double)' {...register("blackdouble")} required/>
               </div>
               <br/>
               <div>
               <label htmlFor="front">Front Page</label>
               <br/>
               <input className='border rounded-lg h-12 w-32 pl-4 mb-4 border-red-400' name='front' defaultValue={0} type='number' placeholder='Front Page Print' {...register("front")} required/>
               </div>
               </div>
               <div className='flex gap-4'>
               <div>
               <label htmlFor="graph">Graph Print</label>
               <br/>
               <input className='border rounded-lg h-12 w-52 pl-4 mb-4 border-red-400' name='graph' defaultValue={0} type='number' placeholder='Graph Print' {...register("graph")} required/>
               </div>
               <br/>
               <div>
               <label htmlFor="color">Image Print</label>
               <br/>
               <input className='border rounded-lg h-12 w-52 pl-4 mb-4 border-red-400' name='color' defaultValue={0} type='number' placeholder='Image Print' {...register("color")} required/>
               </div>
               <br/>
               </div>
               <div className='flex gap-4'>
               <div>
               <label htmlFor="discount">Discount</label>
               <br/>
               <input className='border rounded-lg h-12 w-52 pl-4 mb-4 border-red-400' name='discount' defaultValue={0} type='number' placeholder='Discount' {...register("discount")} required/>
               </div>
               <br/>
               <div>
               <label htmlFor="addition_amount">Additional Amount</label>
               <br/>
               <input className='border rounded-lg h-12 w-52 pl-4 mb-4 border-red-400' name='addition_amount' defaultValue={0} type='number' placeholder=' Addition Amount' {...register("addition_amount")} required/>
               </div>
               <br/>
               </div>
               <br/>
              
               <input className='btn btn-accent text-white' type="submit" value="Add Print Info" />
            </form> */}
        </div>
        </div>
    );
};

export default AddPayment;