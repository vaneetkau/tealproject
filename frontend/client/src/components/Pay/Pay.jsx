import React from 'react'
import { Link } from "react-router-dom";
import Sidebar from '../../components/Sidebar/Sidebar'

const Pay = () => {
  return (
    <div>
        <Sidebar/>
        <div className='container-rounded-upper-left-corner'>
            <h2>My Pay</h2>
            <div>
                <h4>Current Invoice</h4>
                <table>
                    <tr>
                        <td>ScotiaBank Statement 789456</td>
                        <td>Oct/14/2023</td>
                        <td>Nov/04/2023</td>
                        <td>$200</td>
                        <td>Pending</td>
                    </tr>
                </table>
            </div>
            <div>
                <h4>Past Invoice</h4>
                <table>
                    <tr>
                        <td>ScotiaBank Statement 456132</td>
                        <td>Aug/20/2023</td>
                        <td>Oct/04/2023</td>
                        <td>$150</td>
                        <td>Complete</td>
                    </tr>
                    <tr>
                        <td>ScotiaBank Statement 456132</td>
                        <td>Aug/20/2023</td>
                        <td>Oct/04/2023</td>
                        <td>$150</td>
                        <td>Over Due</td>
                    </tr>
                    <tr>
                        <td>ScotiaBank Statement 456132</td>
                        <td>Aug/20/2023</td>
                        <td>Oct/04/2023</td>
                        <td>$150</td>
                        <td>Complete</td>
                    </tr>
                    <tr>
                        <td>ScotiaBank Statement 456132</td>
                        <td>Aug/20/2023</td>
                        <td>Oct/04/2023</td>
                        <td>$150</td>
                        <td>Pending</td>
                    </tr>
                </table>
            </div>
            <button className="submit-1X" type="submit"><Link to="/MyProfile" className='no-underline-link'>Edit Payment</Link></button>
        </div>
    </div>
  )
}

export default Pay
