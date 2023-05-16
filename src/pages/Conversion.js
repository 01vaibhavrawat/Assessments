import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Badge } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";

import { getUsersByReferAction } from "../store/actions";

import Loader from "../components/Loader";
  
function Conversion() {

    const dispatch = useDispatch();
    const { usersByRefer, userLoading } = useSelector((state)=> state.Category);

    React.useEffect(()=>{
            dispatch(getUsersByReferAction({refer: "hw"}));
    }, [])

    return (
        <>
        {userLoading ? <Loader /> :
            
        <div style={{
            display: 'block', margin: "2% 5%",
        }}>
            <p>All users who joined from your link. (Can take upto 24 hours to update.)</p>
            <div style={{ overflow: "scroll", margin:"2% 0 0 0"}}>
            <Table>
                <thead>
                    <tr className="table-primary">
                        <th>Name</th>
                        <th>Country</th>
                        <th>Time</th>
                        <th>Commission from user</th>
                    </tr>
                </thead>
                <tbody>
                {usersByRefer.length < 1 && 
                    <tr className="table-info">
                        <td>NA</td>
                        <td>NA</td>
                        <td>NA</td>
                        <td>NA</td>
                    </tr>}
                {usersByRefer && usersByRefer.map((user, i)=>{
                    return(
                    <tr className="table-info">
                        <td>{user.fullname}</td>
                        <td>{user.country}</td>
                        <td>{user.createdAt}</td>
                        <td>0</td>
                    </tr>
                    )
                })}
                </tbody>
            </Table>
            </div>
        <br />
        <br />
        <Badge>Total commission earned: 0</Badge>
        <br />
        <br />
        <Button onClick={()=> {
            window.alert("No commission earned yet.");
        }}>Withdrawal your commission</Button>
        </div>
    }
        </>
    );
}
  
export default Conversion;