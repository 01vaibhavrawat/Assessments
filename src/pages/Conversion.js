import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Badge } from "reactstrap"
  
function Conversion() {
    return (
        <>
        <div style={{
            display: 'block', width: 700, padding: 30, margin: "auto"
        }}>
            <h4>All users who joined from your link. ( Can take upto 24 hours to update. )</h4>
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Country</th>
                        <th>Time</th>
                        <th>Commission from user</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                </tbody>
            </Table>
        <br />
        <br />
        <Badge>Total commission earned: 0</Badge>
        <br />
        <br />
        <Button onClick={()=> window.alert("No commission earned yet.")}>Withdrawal your commission</Button>
        </div>
        </>
    );
}
  
export default Conversion;