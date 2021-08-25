import React,{createContext,useState} from 'react';
import mockFollowers from '../mockData/mockFollowers';
import mockRepos from '../mockData/mockRepos';
import mockUser from '../mockData/mockUser';
export const AppContext = createContext();
export const AppContextProvider = ({children}) => {
    const [users,setUsers] = useState(mockUser);
    const [repos,setRepos] = useState(mockRepos);
    const [follower,setFollower] = useState(mockFollowers);
    return(
        <AppContext.Provider value={{users,repos,follower}}>
            {children}
        </AppContext.Provider>
    )
}