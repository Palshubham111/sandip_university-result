import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from "./Footer";
import Header from "./Header";

function Home() {
  const [prn, setPrn] = useState('');
  const [dob, setDob] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateDate = (dateStr) => {
    const regex = /^\d{2}-\d{2}-\d{4}$/;
    if (!regex.test(dateStr)) {
      return false;
    }
    const [day, month, year] = dateStr.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    return date.getDate() === day && date.getMonth() === month - 1 && date.getFullYear() === year;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!prn.trim()) {
      setError('Please enter your PRN');
      return;
    }

    if (!validateDate(dob)) {
      setError('Please enter a valid date in dd-mm-yyyy format');
      return;
    }

    try {
      const response = await fetch(`http://localhost:5006/api/results/${prn}?dob=${dob}`);
      const data = await response.json();
      
      if (response.ok) {
        navigate(`/result/${prn}`, { state: { resultData: data } });
      } else {
        setError(data.message || 'Incorrect PRN or Date of Birth');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to connect to the server. Please try again later.');
    }
  };

  return <>
    <Header/>
    <div className="flex bg-gray-200 h-190">
      <div className="h-50 w-190 bg-white shadow-2xs">
        <div className="heading font-serif font-bold flex justify-center">
          <h1>Results</h1>
        </div>
        <div className="bg-red-500 text-white w-120 h-8 flex justify-center ml-2">
          <p>End-semister Examination-MAY 2025</p>
        </div>
        <div className="boxs">
          <form onSubmit={handleSubmit} className="result h-52 w-150 mt-7">
            <div className="prn mt-4">
              <label htmlFor="prn">PRN:</label> 
              <input 
                type="text" 
                id="prn" 
                value={prn}
                onChange={(e) => setPrn(e.target.value)}
                className="text-gray h-7 w-50 border border-black" 
                placeholder="Enter your PRN"
              /> 
            </div>

            <div className="dob mr-10 mt-3">
              <label htmlFor="dob">dd-mm-yyyy: </label> 
              <input 
                type="text" 
                id="dob" 
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="text-gray h-7 w-50 border border-black" 
                placeholder="dd-mm-yyyy" 
              />
            </div>

            {error && <div className="text-red-500 mt-2">{error}</div>}

            <div className="buttons ml-76 mt-6">
              <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <Footer/>
  </>;
}

export default Home;