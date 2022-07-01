import Link from 'next/link'
import React, { useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import Solo from '../../event/solo'
import axios from 'axios'
function StumbleGuys (){
  // const scriptURL = 'https://script.google.com/macros/s/AKfycbxdM4v_gkgI_O0vt-qVEO4jfDnCOd8PH5sKfTvMIMb3cm1Oe_II2Rj_WTBxu7dzO4r9/exec'
  // const form = document.forms['Amongus-Form']
  // form.addEventListener('submit', e => {
  //     e.preventDefault()
  //     fetch(scriptURL, {
  //             method: 'POST',
  //             body: new FormData(form)
  //         })
  //         .then(response => alert("Registration Successfull"))
  //         .catch(error => console.error('Error!', error.message)) 
  // })

  const [name, setName] = useState('');
  const [phoneNumber, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [institute, setInstitute] = useState('');
  const [discord, setDiscord] = useState('');

  const handleSubmit =(e)=>{
    e.preventDefault();
    // console.log(name,email,phone,institute,discord);
    const data =[{
      Name:name,
      Email:email,
      Phone:phoneNumber,
      Institute:institute,
      Discord:discord
    }]

    // axios.post("https://sheet.best/api/sheets/fb4b2b5c-2de7-40b6-9b23-4bf6c7eec0d8", data).then(response=>{
    //   // console.log(response);
    //   setName('');
    //   setEmail('');
    //   setInstitute('');
    //   setDiscord('');
    //   setPhone('');
    //   alert("YOU HAVE BEEN REGISTERED SUCCESSFULLY!");
      
    // });


    const SteinStore = require("stein-js-client");
    const store = new SteinStore("https://api.steinhq.com/v1/storages/62bdfc2d4906bb0537516dcf");

    store.append("Sheet1", data).then(response=>{
      // console.log(response);
      setName('');
      setEmail('');
      setInstitute('');
      setDiscord('');
      setPhone('');
      alert("YOU HAVE BEEN REGISTERED SUCCESSFULLY!");
      
    });

  }

return (
    // Stumble Guys
  <div className='justify-center'> 
    <Link href='../../event/solo' to={<Solo/>} alt='solo'>
    <div className='text-left flex flex-row'>
          <IoIosArrowBack className='text-xl items-center m-1' />
          <button className=' text-xl' >Back</button>
        </div>
    </Link>
    <div ><h1 className='md:text-5xl text-2xl px-5 py-3'> Stumble Guys</h1></div>
    <div className='md:px-40 md:py-10 px-10 py-3 form-font'>
      <form name="Amongus-Form" action="" method="POST" className='grid grid-cols-1  md:px-10 px-2 justify-center form-font' onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder='Name' className='white-glassmorphism my-3 bg-transparent px-3 py-5' required onChange={(e)=>setName(e.target.value)} value={name}/>
        <input name="phone-number" type="number" placeholder='Phone Number' className='white-glassmorphism my-3 bg-transparent px-3 py-5' required onChange={(e)=>setPhone(e.target.value)} value={phoneNumber}/>
        <input name="email" type="email" placeholder='E-mail' className='white-glassmorphism bg-transparent my-3 px-3 py-5 font-nuito' required onChange={(e)=>setEmail(e.target.value)} value={email}/>
        <input name="institute" type="text" placeholder='Institute' className='white-glassmorphism bg-transparent my-3 px-3 py-5' required onChange={(e)=>setInstitute(e.target.value)} value={institute}/>
        <input name="discord" type="text" placeholder='Discord Username' className='white-glassmorphism bg-transparent px-3 my-3 py-5' required onChange={(e)=>setDiscord(e.target.value)} value={discord}/>
        <div><button type="submit" className='md:text-2xl text-lg blue-glassmorphism hover:text-orange-500 md:w-2/5 w-3/5 justify-center rounded-xl my-3 px-3 py-4'>Register</button></div>
      </form>
    </div>
  </div>
)
}
export default StumbleGuys