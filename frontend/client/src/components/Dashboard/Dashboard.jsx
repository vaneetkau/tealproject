import React from 'react';
import './DashboardCSS.css';
import pig from './Pig.png';
import pigSmall from './Pig-sm.png';
import income from './Income.png';
import housing from './Housing.png';
import lifestyle from './Lifestyle.png';
import transportation from './Transportation.png';
import LoanCalculator from "../LoanCal"

const Dashboard = () => {
  const UserName = 'Camila!';
  const Date = 'October 1, 2023';

  return (
    <div className='container-fluid bgcolor-primary m-0'>
      <div className='row'>
        <div className='container-fluid bgcolor-offwhite col-lg-12 p-5 main-container-border-radius'>
         <div className='d-flex flex-column justify-content-start align-items-start'>
  <h1 className='color-primary'>Welcome {UserName}</h1>
  <h5 className='color-grey'>{Date}</h5>
</div>




          <div className='row mt-5'>
            <div className='col-lg-8'>
              <div className='d-flex flex-row container-lg p-3 shadow bg-white border border-radius'>
<div className='d-flex flex-column justify-content-start align-items-start mt-2 p-2'>
  <h6 className='color-mango' style={{ fontWeight: 600 }}>
    You are one step closer!
  </h6>
  <p className='lh-base fs-6 text-start'>
    You are up to date with your payments, your next payment will be 9th November.
  </p>
</div>

                <img
                  className='d-none d-sm-inline align-item-center shadow border border-radius m-3'
                  src={pig}
                  alt=''
                />
              </div>

              {/* Cards Section */}
<div className='row mt-5'>
  <div className='col-lg-2 col-md-3 col-sm-4'>
    <div className='card border-radius w-100 h-auto'>
      <div className='card-body color-primary'>
        <h2 className='card-title text-center'>5%</h2>
        <p className='card-text text-center'>Interest rate</p>
      </div>
    </div>
  </div>
  <div className='col-lg-2 col-md-3 col-sm-4'>
    <div className='card border-radius w-100 h-auto'>
      <div className='card-body color-primary'>
        <h2 className='card-title text-center'>700</h2>
        <p className='card-text text-center'>Credit Score</p>
      </div>
    </div>
  </div>
  <div className='col-lg-2 col-md-3 col-sm-4'>
    <div className='card border-radius w-100 h-auto'>
      <div className='card-body color-primary'>
        <h2 className='card-title text-center'>1k</h2>
        <p className='card-text text-center'>Savings</p>
      </div>
    </div>
  </div>
  <div className='col-lg-2 col-md-3 col-sm-4'>
    <div className='card border-radius w-100 h-auto'>
      <div className='card-body color-primary'>
        <h2 className='card-title text-center'>5k</h2>
        <p className='card-text text-center'>Paid</p>
      </div>
    </div>
  </div>
</div>


            </div>

            {/* Right Sidebar */}
                        <div className='col-lg-4 mt-2'>
              <div className='bg-white shadow p-4 border border-radius' style={{ width: '100%' }}>
              <LoanCalculator />
              </div>
            </div>
            {/* Removed the second column */}
          </div>

          {/* Bottom Section */}
          <div className='container-fluid shadow p-3 mt-5 bgcolor-lightBlue color-primary border border-radius'>
            <div className='row justify-content-around col-lg-12'>
              <div className='col-lg-6'>
                <div className='color-primary m-3'>
                  <span>
                    <i className='small-pig-logo' src={pigSmall} alt='Pig'></i> <h4>My Budget</h4>
                  </span>
                </div>
                <div className='d-flex mt-3 col-lg-12'>
                  <div className='color-primary m-3 col-lg-6'>
                    <h5 className='mt-2'>Pockets</h5>
                    <div className='row mt-3'>
                        <div class="col-md-4 d-flex flex-column align-items-center">
                            <div class="card w-100 h-50">
                                <div class="card-body color-primary">
                                    <div>0</div>
                                </div>
                            </div>
                                <span className='color-primary mt-2'>Materials</span>
                        </div>
                        <div class="col-md-4 d-flex flex-column align-items-center">
                            <div class="card w-100 h-50">
                                <div class="card-body color-primary">
                                    <div>3</div>
                                </div>
                            </div>
                                <span className='color-primary mt-2'>Projects</span>
                        </div>
                        <div class="col-md-4 d-flex flex-column align-items-center">
                            <div class="card w-100 h-50">
                                <div class="card-body color-primary">
                                    <div>0</div>
                                </div>
                            </div>
                                <span className='color-primary mt-2'>Winter Shop</span>
                        </div>                   
                    </div>
                  </div>
                  <div className='color-primary m-3  col-lg-6'>
                    <h5 className='mt-2'>Goals</h5>
                    <div className='row mt-3'>
                    <div class="col-md-4 d-flex flex-column align-items-center">
                        <div class="card w-100 h-50" style={{ width: "100%" }}>
                            <div class="card-body color-primary">
                                <div>2</div>
                            </div>
                        </div>
                            <span className='color-primary mt-2'>Loan1</span>
                    </div>
                    <div class="col-md-4 d-flex flex-column align-items-center">
                        <div class="card w-100 h-50">
                            <div class="card-body color-primary">
                                <div>1</div>
                            </div>
                        </div>
                            <span className='color-primary mt-2'>Loan2</span>
                    </div>
                    <div class="col-md-4 d-flex flex-column align-items-center">
                        <div class="card w-100 h-50">
                            <div class="card-body color-primary">
                                <div>6</div>
                            </div>
                        </div>
                            <span className='color-primary mt-2'>Loan3</span>
                    </div>                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 m-4'>
                <h5>Expenses</h5>
                <hr />
                <div className='d-flex justify-content-between'>
                  <div>
                    <img className='px-1' src={income} alt='' />
                    <span>Income</span>
                  </div>
                  <span>3000</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                       <div>
                           <img className='px-1' src={housing} alt="" />
                           <span>Housing</span>
                       </div>
                       <span>1200</span>
                   </div>
                   <hr/>
                   <div className="d-flex justify-content-between">
                       <div>
                       <img className='px-1' src={lifestyle} alt="" />
                       <span>Lifestyle</span>
                       </div>
                       <span>1620</span>
                   </div>
                   <hr/>
                   <div className="d-flex justify-content-between">
                       <div>
                           <img className='px-1' src={transportation} alt="" />
                           <span>Transportation</span> 
                       </div>
                       <span>180</span>
                   </div>
                   <hr />                <div className='d-flex justify-content-end'>
                  <button className='btn btn-outline-white color-primary bg-white shadow px-4'>Edit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
