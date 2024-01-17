import React, { useState } from "react";
import { Button, Modal } from "antd";

const Deleteble = ({ handleAdd, inp, setInp, objData, getValInp, setObjData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  function handleValue(deyer, e){
    setObjData({...objData, [deyer]: e.target.value})
  }
  const handleOk = () => {
    setIsModalOpen(false);
    gonder()
  };

  const gonder = () => {
    console.log(objData, "esmer")
   handleAdd()
  }
  const handleCancel = () => {
    setIsModalOpen(false);
  };
 
  

  return (
    <div className="w-full flex justify-end my-6">
      <Button
        className=" bg-blue-600"
        type="primary"
        onClick={() => {
           setIsModalOpen(true);
        }}
      >
        Elave Et+
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          {Object.keys(objData).map((deyer, i) => (
            <div key={i}>
              <label htmlFor={deyer}>{deyer}</label>
              <br />
              <input
                className="bg-gray-50 border outline-blue-300 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                type="text"
                // value={objData[item]}
                onChange={(e)=>handleValue(deyer,e)}
              />
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
};
export default Deleteble;
