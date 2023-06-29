import React from 'react';
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb';
import cover from './../../../images/cover/cover-01.png';
import useUser from '../../../hooks/useUser/useUser';
const Profile = () => {
    const [isUser] = useUser();
    console.log(isUser)
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
              <img className="rounded-full w-28 h-28" src={isUser?.photourl} alt="profile" />
            </div>
          </div>
          <div className="mt-20">
            <h3 className="mb-1.5 text-2xl font-semibold text-black dark:text-white">
              {isUser?.name}
            </h3>
            <p className="font-medium">{isUser?.email}</p>
            <p className="font-medium">{isUser?.phone}</p>
            <div className="mx-auto mt-4.5 mb-5.5 grid max-w-94 grid-cols-3 rounded-md border border-stroke py-2.5 shadow-1 dark:border-strokedark dark:bg-[#37404F]">
              <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 dark:border-strokedark xsm:flex-row">
                <span className="font-semibold text-black dark:text-white">
                  259
                </span>
                <span className="text-sm font-bold">Total Sell Amount</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 dark:border-strokedark xsm:flex-row">
                <span className="font-semibold text-black dark:text-white">
                  129K
                </span>
                <span className="text-sm font-bold">Total Due Amount</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 px-4 xsm:flex-row">
                <span className="font-semibold text-black dark:text-white">
                  2K
                </span>
                <span className="text-sm font-bold">Total Paid Amount</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>

    );
};

export default Profile;