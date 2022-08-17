import { Result, Space, Spin, Table } from "antd";
import React, { useState } from "react";
import "antd/lib/table/style/index.css";
import "antd/lib/space/style/index.css";
import "antd/lib/result/style/index.css";
import "antd/lib/spin/style/index.css";
import Popup from "./Popup";
import useFetch from "./useFetch";

function Tables() {
  const [initialValue,setInitialValue] = useState({});
  const [buttonpop, setbuttonpop] = useState(false);
  const { data, isLoading, error } = useFetch("http://localhost:8000/data");
  const [isdeleting, setdelete] = useState(false);
  const handledelete = (data) => {
    setdelete(true);
    fetch("http://localhost:8000/data/" + data.rec.id, 
    {
      method: "DELETE",
    }).then(() => {
      setdelete(true);
      window.location.reload(false);
      setdelete(false);
    });
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      id: "id",
    },
    {
      title: "Questions",
      dataIndex: "questions",
      key: "id",
    },
    {
      title: "Answers",
      dataIndex: "answers",
      key: "id",
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => {
        return (
          <Space size="middle">
            <button
              className="text-primary"
            onClick={()=> {
            setInitialValue(record)
            setbuttonpop(true)
            }}
            >
              Update
            </button>
            {!isdeleting && (
              <button
                className="text-redish"
                onClick={() => handledelete({ rec: record })}
              >
                Delete
              </button>
            )}
            {isdeleting && (
              <button
                disabled
                className="text-redish font-bold"
                onClick={() => handledelete({ rec: record })}
              >
                . . .
              </button>
            )}
          </Space>
        );
      },
    },
  ];

  return (
    <>
      {error && (
        <Result
          status="warning"
          title="Could not load data for the resource"
          className="mt-48"
        />
      )}
      {isLoading && (
        <div className="text-center m-[20px] mt-56">
          <Spin />
        </div>
      )}
      {data && (
        <Table
          rowKey={"id"}
          columns={columns}
          dataSource={data}
          className="mt-9 font-Bahnschrift"
          pagination={false}
        />
      )}
      {/* {console.log(initialValue)} */}
      <Popup initialValue={initialValue} isVisible={buttonpop} onCancel={setbuttonpop} isEdit={true} />
    </>
  );
}
export default Tables;
