import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb';
import cover from './../../../images/cover/cover-01.png';
import useUser from '../../../hooks/useUser/useUser';
import AvaterImg from './../../../assets/images/placeholder.jpg';
import { Bar, BarChart, CartesianGrid, LabelList, Legend, ReferenceLine, Tooltip, XAxis, YAxis } from 'recharts';
import usePaymentHistory from '../../../hooks/usePayment/usePaymentHistory';
import useUserPrint from '../../../hooks/useUser/useUserPrint';
import usePayment from '../../../hooks/usePayment/usePayment';

const Profile = () => {
    const [isUser] = useUser();
    const [AllPayment,] = usePayment(`${isUser?.cuetId}`)
    const [UserPrints,refetch] = useUserPrint()
      const totalblacksingle = UserPrints.reduce((total,item)=> total + item.blacksingle,0)
      const totalblackdouble = UserPrints.reduce((total,item)=> total + item.blackdouble,0)
      const totalfront = UserPrints.reduce((total,item)=> total + item.front,0)
      const totalgraph = UserPrints.reduce((total,item)=> total + item.graph,0)
      const totalcolor = UserPrints.reduce((total,item)=> total + item.color,0)

    const data = [
      {
        name: `${isUser?.cuetId}`,
        total: `${AllPayment[0]?.total}`,
        paid: `${AllPayment[0]?.paid}`,
        due: `${AllPayment[0]?.due}`,
      }
    ];
    const data1 = [
      {
        name: `${isUser?.cuetId}`,
        Black_Single: `${totalblacksingle}`,
        Black_Double: `${totalblackdouble}`,
        Front: `${totalfront}`,
        Graph: `${totalgraph}`,
        Color: `${totalcolor}`,
      }
    ]
    
    return (
        <>
      <Breadcrumb pageName="Profile" />

      <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="relative z-20 h-35 md:h-65">
          <img
            src={cover}
            alt="profile cover"
            className="h-full w-full rounded-tl-sm rounded-tr-sm object-cover object-center"
          />
        </div>
        <div className="w-full px-4 pb-6 text-center lg:pb-8 xl:pb-11.5">
          <div className='relative bg- flex flex-col items-center z-30 rounded-full' >
            <div className="absolute -top-14 border-8 border-gray-500/0.5 rounded-full">
              <img className="rounded-full w-28 h-28" src={isUser?.photourl || AvaterImg} alt="profile" />
            </div>
          </div>
          <div className="mt-20">
            <h3 className="mb-1.5 text-2xl font-semibold text-black dark:text-white">
              {isUser?.name}
            </h3>
            <p className="font-medium">{isUser?.cuetId}</p>
            <p className="font-medium">{isUser?.email}</p>
            <p className="font-medium">{isUser?.phone}</p>
          </div>
        </div>
      </div>
      <div className=''>
          <div className='w-1/2 font-mono mx-auto'>
          <p className='text-center font-bold text-2xl mt-5'>Amount Information</p>
          <div className='flex p-6'>
      <div className="mx-auto text-center mt-4.5 mb-5.5 grid max-w-94 grid-cols-1 rounded-md border border-stroke py-2.5 shadow-1 dark:border-strokedark dark:bg-[#37404F]">
              <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 dark:border-strokedark xsm:flex-row">
                <span className="font-semibold text-black dark:text-white">
                {`${AllPayment[0]?.total}`}
                </span>
                <span className="text-sm font-bold">Total Amount</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 dark:border-strokedark xsm:flex-row">
                <span className="font-semibold text-black dark:text-white">
                {`${AllPayment[0]?.paid}`}
                </span>
                <span className="text-sm font-bold">Total Paid Amount</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 px-4 xsm:flex-row">
                <span className="font-semibold text-black dark:text-white">
                {`${AllPayment[0]?.due}`}
                </span>
                <span className="text-sm font-bold">Total Due Amount</span>
              </div>
      </div>
      <BarChart
          width={400}
          height={300}
          data={data}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <ReferenceLine y={0} stroke="#000" />
          <Bar dataKey="total" fill="blue" label={{ position: 'middle',fill:'white' }}>
          </Bar>
          <Bar dataKey="paid" fill="green" label={{ position: 'middle',fill:'white' }}>
          </Bar>
          <Bar dataKey="due" fill="red" label={{ position: 'middle',fill:'white' }} >
           
          </Bar>
      </BarChart>

      </div>
          </div>
          <div className='w-2/3 font-mono mx-auto'>
          <p className='text-center font-bold text-2xl mt-5'>Page Information</p>
          <div className='flex p-6'>
      <div className="mx-auto text-center mt-4.5 mb-5.5 grid max-w-94 grid-cols-1 rounded-md border border-stroke py-2.5 shadow-1 dark:border-strokedark dark:bg-[#37404F]">
              <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 dark:border-strokedark xsm:flex-row">
                <span className="font-semibold text-black dark:text-white">
                {totalblacksingle}
                </span>
                <span className="text-sm font-bold">Black (single)</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 dark:border-strokedark xsm:flex-row">
                <span className="font-semibold text-black dark:text-white">
                {totalblackdouble}
                </span>
                <span className="text-sm font-bold">Black (double)</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 px-4 xsm:flex-row">
                <span className="font-semibold text-black dark:text-white">
                  {totalfront}
                </span>
                <span className="text-sm font-bold">Front Page</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 px-4 xsm:flex-row">
                <span className="font-semibold text-black dark:text-white">
                  {totalgraph}
                </span>
                <span className="text-sm font-bold">Graph Page</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 px-4 xsm:flex-row">
                <span className="font-semibold text-black dark:text-white">
                  {totalcolor}
                </span>
                <span className="text-sm font-bold">Image Page</span>
              </div>
      </div>
      <BarChart
          width={600}
          height={300}
          data={data1}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <ReferenceLine y={0} stroke="#000" />
          <Bar dataKey="Black_Single" fill="blue" label={{ position: 'middle',fill:'white' }} >
          </Bar>
          <Bar dataKey="Black_Double" fill="green" label={{ position: 'middle',fill:'white' }}>

          </Bar>
          <Bar dataKey="Front" fill="red" label={{ position: 'middle',fill:'white' }} >
          </Bar>
          <Bar dataKey="Graph" fill="green" label={{ position: 'middle',fill:'white' }} >
           
          </Bar>
          <Bar dataKey="Color" fill="red" label={{ position: 'middle',fill:'white' }}>
          
          </Bar>
      </BarChart>

      </div>
          </div>
      </div>
    </>

    );
};

export default Profile;