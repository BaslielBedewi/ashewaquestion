import { useState } from "react";
import { Table } from 'antd'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar, Line } from "react-chartjs-2";
import CustomCards from "./CustomCards";
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
const labels = ['መስከረም', 'ጥቅምት', 'ህዳር', 'ታህሳስ', 'ጥር', 'የካቲት', 'መጋቢት', 'ሚያዚያ', 'ግንቦት', 'ሰኔ', 'ሐምሌ', 'ነሃሴ'];
const data_totalVisitors = {
    labels,
    datasets: [
        {
            label: 'Total Visitors',
            data: [4, 100, 14, 50, 70],
            borderColor: '#00B728',
            backgroundColor: '#00B728',
        },
    ],
};
const data_totalContacts = {
    labels,
    datasets: [
        {
            label: 'Total Contacts Shared',
            data: [18, 10, 14, 5, 7],
            borderColor: '#00B728',
            backgroundColor: '#00B728',
        },
    ],
};

const dataSource = [
    {
      chat_id: '1',
      name: 'Mike',
      phone: 16487,
      location: 'Addis Ababa',
    },
  ];
  
  const columns = [
    {
      title: 'Chat_ID',
      dataIndex: 'chat_id',
      key: 'chatid',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
        title: 'Location',
        dataIndex: 'location',
        key: 'location',
      },
  ];



const Dashboard = () => {
    const [amount, setamount] = useState(0)
    // const { data, isLoading, error } = useFetch("http://localhost:8000/data");
    console.table({ amount })

    return (
        <>
            <div className="flex justify-center flex-wrap bg-slate-100 h-fit">
                <CustomCards
                    title={"Questions"}
                    description={"Total Questions"}
                    totalnumber={amount}
                />
                <CustomCards
                    title={"Answers"}
                    description={"Total Answers"}
                    totalnumber={amount}
                />

            </div>
            <div className="w-2/4 flex justify-start items-start m-0 bg-slate-100">
                <Line data={data_totalVisitors} />
                <Bar className="bg-slate-100" data={data_totalContacts} />
            </div>
             <h1 className="text-center m-4 text-primary mt-6 border-b-2">Contacts shared</h1>
            <Table  columns={columns}  dataSource={dataSource} pagination={false}/>
           6 
        </>
    );
}

export default Dashboard;