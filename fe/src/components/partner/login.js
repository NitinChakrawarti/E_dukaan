// import React from "react";
// import { useState } from "react";
// import Dash from "./sidebar";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLogged, setIsLogged] = useState(false);
//   const admin = [
//     {
//       user: "nitin",
//       pass: "nitin",
//     },
//   ];

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (username === admin[0].user && password === admin[0].pass) {
//       setIsLogged(true);
//     } else {
//       alert("Invalid Credentials try again ");
//     }
//   };

//   return (
//     // Login Page
//     <>
//       {isLogged === false ? <div className="flex flex-row">
//         <div className="left w-[50%] h-screen">
//           <img
//             src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1721174400&semt=sph"
//             alt="login"
//             className="w-full h-full object-cover"
//           />
//         </div>
//         <div className="right w-[45%] border">
//           <div className="flex flex-col items-center h-screen">
//             <div className="heading text-4xl font-bold pt-24 pb-24">
//               <h1>Admin Login</h1>
//             </div>
//             <form onSubmit={handleSubmit}>
//               <div className="pb-6">
//                 <label className="text-lg font-bold flex pb-3">Username</label>
//                 <input
//                   type="text"
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                   required
//                   className="w-[300px] h-[40px] border-2 border-gray-300 rounded-md pl-2 required:"
//                 />
//               </div>
//               <div className="pt-4">
//                 <label className="text-lg font-bold flex pb-3">Password</label>
//                 <input
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                   className="w-[300px] h-[40px] border-2 border-gray-300 rounded-md pl-2 required:"
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="w-[300px] h-[40px] bg-blue-500 text-white rounded-md mt-6"
//               >
//                 Login
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//       : <Dash /> }
      
//     </>
//   );
// };
// export default Login;
