import React from 'react'

const MainPage = () => {
  return (
    <div>
      <div className="container mt-5">

        <div className="row my-5">
          <div className='d-flex justify-content-between text-center'>
            <div className="col-sm-4  r bg-white">
              <h2 className="card-title mt-2 text-muted">Total Orders of Day </h2>
              <h6 className='my-2 text-info fw-bold fs-2'> 250</h6>
              <p>250 orders today   </p>

            </div>
            <div className="col-sm-4  bg-white mx-3">

              <h2 className="card-title mt-2 text-muted ">Total Orders of Week </h2>
              <h6 className='my-2 text-info fw-bold fs-2'> 500</h6>
              <p>500 orders this week  </p>
            </div>
            <div className="col-sm-4 bg-white">
              <h2 className="card-title mt-2 text-muted">Total Orders of Month </h2>
              <h6 className='my-2 text-info fw-bold fs-2'> 2000</h6>
              <p className=''>2000 orders this month   </p>

            </div>
          </div>
        </div>

        {/* Total Revenue */}

        <div className="row d-flex ">
        <div className='d-flex justify-content-between text-center '>
            <div className="col-sm-4  bg-white align-middle">
              <h2 className=" card-title mt-2 text-muted">Total Revenue Day  </h2>
              <h6 className='my-2 text-info fw-bold fs-2' >$5000</h6>
              <p>$5000 revenue today   </p>

            </div>
            <div className="col-sm-4  bg-white mx-3 ">

              <h2 className="card-title  mt-2 text-muted">Total Revenue Week  </h2>
              <h6 className='my-2 text-info fw-bold fs-2'>$25000</h6>
              <p>$25000 revenue this  week </p>
            </div>
            <div className="col-sm-4  bg-white align-middle">

              <h2 className="card-title  mt-2 text-muted">Total Revenue Month </h2>

              <h6  className='my-2 text-info fw-bold fs-2'> $100000</h6>
              <p> $100000 revenue this month   </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPage


//Here we will show the statics selll etc category in demand etc,