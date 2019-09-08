import React from 'react';

const EditDeleteControl = ({index,deleteProduct,editProduct}) => {
    return (
        <div>
            <div className="row">
                <div className="col">
                    <button className="btn btn-primary" onClick={()=>{editProduct(index)}}>Edit</button>
                </div>
                <div className="col">
                    <button className="btn btn-primary" onClick={()=>{deleteProduct(index)}}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default EditDeleteControl;