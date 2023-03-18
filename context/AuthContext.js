import React,{createContext} from 'react';
export const AuthContext=createContext();
export const AuthProvider=({children})=>{
   return(
       <AuthProvider.Provider value="Test Value">{children}</AuthProvider.Provider>
   );
}