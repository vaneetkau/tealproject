import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import user from "../../User.png";
import TempLandingPage from "../TempLandingPage";
import loanEaseLogo from "../../LoanEaseLogo-White.png";
import LatestNews from '../LatestNews/LatestNews';
import LoanCalculator from '../LoanCalulator';
const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/TempLandingPage",
             name:"Home",
       },
       {
        path:"/LatestNews",
         name:"Latest News",
   },
   {
    path:"/LoanCalculator",
     name:"Loan Calculator",
},
{
    path:"/Home",
     name:"My Pay",
},
{
    path:"/Home",
     name:"Setting",
},
{
    path:"/Home",
     name:"Log Out",
}
  //     {
  //       path:"/MyProfile",
  //       name:"MyProfile",
  //       //icon:<FaUserAlt/>
  //   },
  //   {
  //       path:"/MyProfileSettings",
  //       name:"MyProfileSettings",
  //      // icon:<FaRegChartBar/>
  //   },
  //   {
  //       path:"/PaymentMethod",
  //       name:"PaymentMethod",
  //      // icon:<FaCommentAlt/>
  //   },
//      {
//         path:"/Statement",
//          name:"Statement",
//       // icon:<FaShoppingBag/>
//    }
  //   {
  //       path:"/Pay",
  //       name:"Pay",
  //      // icon:<FaThList/>
  //   },
  //   {
  //     path:"/LoanList",
  //     name:"LoanList",
  //    // icon:<FaShoppingBag/>
  // },
//   {
//     path:"/News",
//     name:"News",
//    // icon:<FaShoppingBag/>
// }
// // {
//   path:"/LoanCalculator",
//   name:"LoanCalculator",
//  // icon:<FaShoppingBag/>
// }
    ]
    return (
           <>
             <div className="sidebar">
                 <div className="top_section">
                     <div className='avatarpadding'>
                     <img src={user} height="200" width="200" />
                     </div>
             
                 </div>
             
                   {
                     menuItem.map((item, index)=>(
                         <NavLink to={item.path} key={index} className="link" activeclassName="active">
                             <div className="link_text">{item.name}</div>
                         </NavLink>
                     ))
                 }
                 <br/> <br/> <br/> <br/> <br/>
                 <div className='paddingleft' >
                 <img
                src={loanEaseLogo}
                height="100"
                width="160"
                alt="LoanEase Logo"
              />
                     </div>
             </div>
             
           </>
  
    );
};

export default Sidebar;