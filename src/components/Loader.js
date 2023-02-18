import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner } from "reactstrap"
  
function App() {
    return (
        <div style={{
            display: 'block', width: 1000, padding: 30,
        }}>
            <Spinner type="grow" color="success"
                children={false} /> 
        </div>
    );
}
  
export default App;