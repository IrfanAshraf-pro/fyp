import React from "react";
import Edit from '../../../assests/edit_white.svg'
import EditBlack from '../../../assests/edit_black.svg'
import PageHeader from "../../components/PageHeader";
import PP from '../../../assests/login_image.jpg'


const Profile = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      {/* heading */}
     <PageHeader>Profile</PageHeader>
      {/* Avatar div */}
      <div className="w-48 rounded-full ">
        <div className="rounded-full ">
          <img src={PP} alt="user avatar" className='rounded-full imgnegative'/>
        </div>
      </div>
      <div className="relative p-2">
      <button className="absolute -right-24 -top-20 btn btn-square btn-ghost">
        <img src={EditBlack} alt='edit icon' className="inline-block w-6 h-6 stroke-current" />
      </button>
      </div>
      {/* Avatar name and email div */}
      <div className="flex items-center justify-between w-11/12 p-2 bg-gray-700 rounded-lg sm:w-3/4 md:w-2/4">
        <div className="">
          <p className="text-lg uppercase text-primary">Name</p>
          <p className="text-sm text-primary ">email@gmail.com</p>
        </div>
        <button className="btn btn-square ">
        <img src={Edit} alt='edit icon' className="inline-block w-6 h-6 stroke-current" />

        </button>
      </div>

    </div>
  );
};

export default Profile;
