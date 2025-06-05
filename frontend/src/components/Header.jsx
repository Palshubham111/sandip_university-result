

function Header() {
  return <>
  <style>
    {`
      .nav-link.text-danger {
        transition: color 0.3s ease;
      }
      .nav-link.text-danger:hover {
        color: #000000 !important;
        text-decoration: none;
      }
    `}
  </style>
  
<div className="container">
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div className="col-md-3 mb-2 mb-md-0 ">
        <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
          {/* <svg className="bi" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg> */}
          <img src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2156076223/settings_images/ac72ede-88c-cf2-b0e7-431cc1f751e8_Sandip_University_Logo.png" height="100" width="100" alt="" />
        </a>
      </div>
      
       
       <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 text-1xl font-bold ">
         <li><a href="/" className="nav-link px-2 font-bold text-danger">Home</a></li>
         <li><a href="/results" className="nav-link px-2 text-danger">Results</a></li>
         <li><a  className="nav-link px-2 text-danger">Pricing</a></li>
         <li><a href="#" className="nav-link px-2 text-danger">Fees</a></li>
         <li><a className="nav-link px-2 text-danger">About</a></li>
         
       </ul>
       
      
      

      <div className="col-md-3 text-end">
        <a className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer" 
        
          
       
          
          >Login</a>
        
      </div>
    </header>
  </div>
     
  </>
}
export default Header;