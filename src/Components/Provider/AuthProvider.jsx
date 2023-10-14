// import React, { createContext, useState } from 'react';
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// export const authContext =createContext(null);
// const AuthProvider = ({children}) => {
//     const [user,setUser]=useState(null)

//     const createUser=(email,password)=>{
//       return  createUserWithEmailAndPassword(auth, email, password);
//     }
//     const auth=getAuth()
//     const authInfo ={
//         user,
//         createUser,
//     }
//     return (
//         <AuthProvider.Provider value={authInfo}>
//             {children}
//         </AuthProvider.Provider>
//     );
// };

// export default AuthProvider;