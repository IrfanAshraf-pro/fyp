import React, { useState } from "react";
import Edit from "../../../assests/edit_white.svg";
import EditBlack from "../../../assests/edit_black.svg";
import PageHeader from "../../components/PageHeader";
import PP from "../../../assests/login_image.jpg";
import {  useSelector } from "react-redux";

const Profile = () => {
  const [file, setFile] = useState([]);
  const [image, setImage] = useState(PP);
  const { user } = useSelector((state) => state.auth);


  const handleChange = (e) => {
    setFile([...file, e.target.files[0]]);
    onImageChange(e)
  };
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
   }
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      {/* heading */}
      <PageHeader>Profile</PageHeader>
      {/* Avatar div */}
      <div className="w-48 rounded-full">
        <div className="rounded-circle ">
          <img
            src={image}
            alt="user avatar"
            className="h-[192px]  w-[192px] bg-auto rounded-circle ring-2 ring-blue-300 imgnegative"
          />
        </div>
      </div>
      <div className="relative p-2">
        <label htmlFor="pickProfileImage"  className="absolute p-2 -right-24 cursor-pointer -top-20 bg-blue-500 rounded-full hover:bg-blue-700">
            <img
              src={Edit}
              alt="edit icon"
              className="inline-block w-6 h-6 rounded-sm stroke-current"
            />
            <input
              type="file"
              id="pickProfileImage"
              onChange={handleChange}
              className="hidden"
            />
        </label>
      </div>
      {/* Avatar name and email div */}
      <div className="flex items-center justify-between w-11/12 py-2 px-4 bg-gray-700 rounded-lg sm:w-3/4 md:w-2/4">
        <div className="flex flex-col justify-center">
          <span className="text-lg text-white uppercase">{user.name}</span>
          <span className="text-sm text-white ">{user.email}</span>
        </div>
        <button className="btn btn-square ">
          <img
            src={Edit}
            alt="edit icon"
            className="inline-block w-5 h-5 stroke-current"
          />
        </button>
      </div>
    </div>
  );
};

export default Profile;
