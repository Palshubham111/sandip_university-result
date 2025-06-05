 import Header from "../components/Header"
 import Footer from "../components/Footer"


 function Signup(){
  
  const handlesubmit = (event) =>{
    console.log(event.target.value)
  }


  return<>
   <Header/>
  <div className="w-130 border border-amber-300 flex justify-center ml-36 p-5 ">
   
   <form action="" onSubmit={handlesubmit}>
   <h3 className="">signup</h3>
   <br />

    <label htmlFor="name">Fullname :</label>
    <input className="border" type="text" name="name" id="name" placeholder="enter name" />
    <br />
    <br />
    <label htmlFor="name">Email :</label>
    <input className="border" type="text" name="name" id="name" />
    <br />
    <br />
    <label htmlFor="name">Password :</label>
    <input className="border" type="text" name="name" id="name" />
    
   </form>
  </div>
  <Footer/>
  
  </>
 }
 export default Signup;