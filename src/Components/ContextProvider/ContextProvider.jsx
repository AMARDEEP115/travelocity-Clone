import React from "react";

export const AppContext=React.createContext();

AppContext.displayName="A.D.Travels";

function ContextProvider({children}){
    const [isAuth,setIsAuth]=React.useState(false);
    const [token,setToken]=React.useState(null);
    const [name,setName]=React.useState("");
    const [loading,setLoading]=React.useState(true);

        function Access(x,y){
            setLoading(true);
            return fetch("https://reqres.in/api/login",{
                method:"POST",
                body:JSON.stringify({email:x,password:y}),
                headers:{
                    "Content-Type":"application/json"
                }
            }).then((res)=>res.json()).then((res)=>{
                setToken(res?.token);

                if(token!=null){
                    setIsAuth(true);
                    setLoading(false);
                }
                setName("User");
            }).catch(err=>{
                setLoading(false);
                console.log(err);
            });
        }

    const Logout=()=>{
        setIsAuth(false);
        setToken(null);
        setName("");
    }

    function Signin(x,y,z){
        setName(z);

        fetch("https://reqres.in/api/login",{
                method:"POST",
                body:JSON.stringify({email:x,password:y}),
                headers:{
                    "Content-Type":"application/json"
                }
            });
            setIsAuth(true);
            setLoading(false);
            setToken("xyz");
            setName(z);
    }

    const val={isAuth,token,Access,Logout,name,loading,Signin};

    return <AppContext.Provider value={val}>
        {children}
    </AppContext.Provider>
}

export default ContextProvider;
