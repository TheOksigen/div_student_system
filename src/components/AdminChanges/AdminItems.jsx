import React, { useContext, useEffect, useRef, useState } from "react";
import {  Form, Input, Popconfirm, Table } from "antd";
import Deleteble from "./Options/Deleteble";
import { AdminProvider } from "../Context/AdminContext";
function AdminItems() {
  const {obj, adminObj}=useContext(AdminProvider)
  const {selectedHooks, objPost}=obj
  const { SelectedQueryHook, postQueryHook, deleteHook } = selectedHooks;
  // const { data, error, isLoading, refetch: yenile } =  selectedHooks.SelectedQueryHook;
  // const [post, postData] = postQueryHook && postQueryHook;
  // const [del, delData] = deleteHook && deleteHook;
  // const [dataSource, setDataSource] = useState([]);
  // const [inp, setInp] = useState({});
  // const[objData, setObjData]=useState({})
  // useEffect(() => {
  //   setObjData(objPost[SelectedQueryHook.endpointName]);
  //   setDataSource(data);
  // }, [data]);

  // //  IN NORMAL ANT DESIGN IT DELETE FOR DATA'S KEY BUT WE CHANGE IT TO ID. ///
  // const handleDelete = (id) => {
  //   console.log(id);
  //   const newData = dataSource.filter((item) => item.id !== id);
  //   del(id);
  //   setDataSource(newData);
  //   yenile()
  // };

  
  // const defaultColumns = [
  //   {
  //     title: "name",
  //     dataIndex: "name",
  //     width: "70%",
  //     editable: true,
  //   },
  //   {
  //     title: "operation",
  //     dataIndex: "operation",
  //     render: (_, record) =>
  //       dataSource.length >= 1 ? (
  //         <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.id)}>
  //           <a>Delete</a>
  //         </Popconfirm>
  //       ) : null,
  //   },
  // ];

  // const handleAdd = () => {
  //   console.log(objData);
  //   objData && post(objData);
  //   yenile();
  //   const newData = {
  //     key: objData.name,
  //     name: objData.name,
  //   };
  //   inp !== "" && setDataSource([...dataSource, newData]), setInp({});
  // };
  // const handleSave = (row) => {
  //   const newData = [...dataSource];
  //   const index = newData.findIndex((item) => row.key === item.key);
  //   const item = newData[index];
  //   newData.splice(index, 1, {
  //     ...item,
  //     ...row,
  //   });
  //   setDataSource(newData);
  // };
  // const components = {
  //   body: {
  //     row: EditableRow,
  //     cell: EditableCell,
  //   },
  // };
  // const columns = defaultColumns.map((col) => {
  //   if (!col.editable) {
  //     return col;
  //   }
  //   return {
  //     ...col,

  //     onCell: (record) => ({
  //       record,
  //       editable: col.editable,
  //       dataIndex: col.dataIndex,
  //       title: col.title,
  //       handleSave,
  //     }),
  //   };
  // });

  return (
    <>
      {/* <div>
        <Deleteble {...{ handleAdd, objData, inp, setInp,setObjData }} />
        <Table components={components} rowClassName={() => "editable-row"} bordered dataSource={dataSource} columns={columns} />
      </div>
      <div className=" w-[90vw]  md:w-2/3   m-auto mt-20"></div> */}
      <h1>salam</h1>
    </>
  );
}

export default AdminItems;

// const EditableContext = React.createContext(null);
// const EditableRow = ({ index, ...props }) => {
//   const [form] = Form.useForm();
//   return (
//     <Form form={form} component={false}>
//       <EditableContext.Provider value={form}>
//         <tr {...props} />
//       </EditableContext.Provider>
//     </Form>
//   );
// };
// const EditableCell = ({ title, editable, children, dataIndex, record, handleSave, ...restProps }) => {
//   const [editing, setEditing] = useState(false);
//   const inputRef = useRef(null);
//   const form = useContext(EditableContext);
//   useEffect(() => {
//     if (editing) {
//       inputRef.current.focus();
//     }
//   }, [editing]);
//   const toggleEdit = () => {
//     setEditing(!editing);
//     form.setFieldsValue({
//       [dataIndex]: record[dataIndex],
//     });
//   };

//   const save = async () => {
//     try {
//       const values = await form.validateFields();
//       toggleEdit();
//       handleSave({
//         ...record,
//         ...values,
//       });
//     } catch (errInfo) {
//       console.log("Save failed:", errInfo);
//     }
//   };
//   let childNode = children;
//   if (editable) {
//     childNode = editing ? (
//       <Form.Item
//         style={{
//           margin: 0,
//         }}
//         name={dataIndex}
//         rules={[
//           {
//             required: true,
//             message: `${title} is required.`,
//           },
//         ]}
//       >
//         <Input ref={inputRef} onPressEnter={save} onBlur={save} />
//       </Form.Item>
//     ) : (
//       <div
//         className="editable-cell-value-wrap"
//         style={{
//           paddingRight: 24,
//         }}
//         onClick={toggleEdit}
//       >
//         {children}
//       </div>
//     );
//   }
//   return <td {...restProps}>{childNode}</td>;
// };
