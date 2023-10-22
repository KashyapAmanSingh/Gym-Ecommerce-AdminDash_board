import React from 'react'

const MainPage = () => {
  return (
    <div>
      <div className="container ">
      
      <h4 className='bg-dark text-center pt-5 fw-bold fs-2 text-info'>Sales and Inventory Overview</h4>

        <div className="row  py-5 px-5">
          <div className='d-flex justify-content-between text-center'>
            <div className="col-sm-4  bg-white">
              <h2 className="card-title mt-2 text-muted">Today&apos;s orders </h2>
              <h6 className='my-2 text-info fw-bold fs-2'> 250</h6>
              <p>250 orders since last day  </p>

            </div>
            <div className="col-sm-4  bg-white mx-3 ">

              <h2 className="card-title mt-2 text-muted ">  Weekly orders</h2>
              <h6 className='my-2 text-info fw-bold fs-2'> 500</h6>
              <p>500 orders since last  week  </p>
            </div>
            <div className="col-sm-4 bg-white">
              <h2 className="card-title mt-2 text-muted">  Monthly orders </h2>
              <h6 className='my-2 text-info fw-bold fs-2'> 2000</h6>
              <p className=''>2000 orders since last month   </p>

            </div>
          </div>
        </div>

        {/* Total Revenue */}

        <div className="row d-flex px-5">
          <div className='d-flex justify-content-between text-center '>
            <div className="col-sm-4  bg-white align-middle">
              <h2 className=" card-title mt-2 text-muted">Today&apos;s Revenue</h2>
              <h6 className='my-2 text-info fw-bold fs-2' >$5000</h6>
              <p>$5000 revenue since last day   </p>

            </div>
            <div className="col-sm-4  bg-white mx-3 ">

              <h2 className="card-title  mt-2 text-muted">Weekly Revenue   </h2>
              <h6 className='my-2 text-info fw-bold fs-2'>$25000</h6>
              <p>$25000 revenue since last  week </p>
            </div>
            <div className="col-sm-4  bg-white align-middle">

              <h2 className="card-title  mt-2 text-muted">   Monthly Revenue </h2>

              <h6 className='my-2 text-info fw-bold fs-2'> $100000</h6>
              <p> $100000 revenue since last month  </p>

            </div>
          </div>
        </div>

        <div className="row py-5 px-5 ">
          <div className='d-flex justify-content-between text-center '>
            <div className="col-sm-4   bg-white ">
              <h2 className="card-title mt-2 text-muted ">Total Category </h2>
              <h6 className='my-2 text-info fw-bold fs-2 mb-5'>5</h6>

            </div>
            <div className="col-sm-4 mx-3  bg-white ">
              <h2 className="card-title mt-2 text-muted">Total Products </h2>
              <h6 className='my-2 text-info fw-bold fs-2 mb-5'>18</h6>

            </div>
            <div className="col-sm-4   bg-white">
              <h2 className="card-title mt-2 text-muted">Total Customer</h2>
              <h6 className='my-2 text-info fw-bold fs-2 mb-5'>05</h6>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPage


//Here we will show the statics selll etc category in demand etc,