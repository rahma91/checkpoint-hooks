import React from 'react'
import { Form } from "react-bootstrap";

const FilterByName = ({setRecherche}) => {
    
    return (
        <div >
            <Form.Control type="text" placeholder="Enter le nom movie" 
            style={{width:'400px',  display:'flex' ,justifyContent:'center'  }}
            onChange ={(e) => setRecherche(e.target.value)}
            />

        </div>
    )
}

export default FilterByName
