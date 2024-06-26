import { Avatar, Rating } from "@mui/material";
import Profile from "../../assets/profile.png";
import { useState } from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AddIcon from "@mui/icons-material/Add";

const EmployeeCard = () => {
  const [value, setValue] = useState(4);
  return (
    // <div className='flex items-center gap-4 py-8 pr-4 pl-2 border-b border-gray-200 hover:shadow-lg shadow-gray-400 duration-500'>
    //   <Avatar alt='John Smith' src={Profile} sx={{ width: 100, height: 100 }} />
    //   <div className='space-y-1.5l'>
    //     <h1 className='text-xl'>John Smith</h1>
    //     <div className='md:flex gap-x-4'>
    //       <p className='font-sans text-indigo-500'>Software Engineer</p>
    //       <div className='flex gap-x-1'>
    //         <LocationOnOutlinedIcon fontSize='small' />

    //         <p>USA / California</p>
    //       </div>
    //     </div>
    //     <Rating
    //       name='simple-controlled'
    //       value={value}
    //       onChange={(event, newValue) => {
    //         setValue(newValue);
    //       }}
    //     />
    //   </div>
    //   <div className='hidden sm:block ml-auto text-center space-y-2'>
    //     <button className='rounded-md flex gap-x-2 items-center py-2.5 px-4 hover:border hover:border-indigo-400 bg-indigo-400 hover:bg-white hover:text-indigo-500 duration-500 text-white'>
    //       View Profile <AddIcon />
    //     </button>
    //     <p className='text-sm italic text-gray-600 font-thin'>
    //       <span>Date line: </span>1 day ago
    //     </p>
    //   </div>
    // </div>
    <div className='px-2 p-1 md:p-3 my-4 hover:shadow-lg max-w-4xl mx-auto shadow-slate-100 border border-gray-100 duration-500'>
      <div className='flex items-center gap-x-3'>
        <Avatar alt='John Smith' src={Profile} sx={{ width: 90, height: 90 }} />
        <div>
          <h1 className='text-xl'>John Smith</h1>
          <p className='font-[500] text-xl text-gray-700'>Software Engineer</p>
        </div>
        <button className='hidden px-5 py-2.5 sm:flex items-center ml-auto bg-indigo-500 hover:bg-slate-50 hover:text-indigo-500 rounded-full text-white hover:border border-indigo-500 gap-x-1 duration-500'>
          View Profile <AddIcon />{" "}
        </button>
      </div>
      <p className='px-8 py-3'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet enim
        animi totam itaque sed consequuntur adipisci, a qui, dolorum aspernatur
        obcaecati officiis vitae. Reiciendis aperiam mollitia consequuntur
        dignissimos, qui neque aliquam molestias tempore voluptatum eius ipsa
      </p>

      <div className='flex gap-x-2 items-center'>
        <Rating
          sx={{ px: 2 }}
          name='simple-controlled'
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        <p>4 review</p>
      </div>
      <button className='sm:hidden justify-center mx-auto w-4/5 py-2.5 mt-2 mb-1 flex items-center ml-auto bg-indigo-500 hover:bg-slate-50 hover:text-indigo-500 rounded-full text-white hover:border-2 border-indigo-500 gap-x-1 duration-500'>
        View Profile <AddIcon />
      </button>
    </div>
  );
};

export default EmployeeCard;
