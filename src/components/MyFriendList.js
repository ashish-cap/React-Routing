import {useNavigate} from 'react-router-dom';
export const MyFriendList = () => {
    const navigate = useNavigate();
    return(
        <div>
        <h1>List of people</h1>
        <button onClick={()=>navigate('profile')}> My Friend List</button>
        </div>
    )
}