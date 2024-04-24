// 1 / fillter
//     < tên biến >.fillter(x => <điều kiện lọc>)
// 2/ findIndex
//     (x=> <Biểu thức lamda>) => số nguyên
//     let index:Number = data.findIndex (x =>x.studentCode=='0909003')
//     console.log (index) =>1

import React, { useState } from "react";
import { Table, Input, Button } from "antd";
import { title } from "process";
import { timeEnd, timeLog } from "console";


const Test1 = () => {
    const [searchText, setSearchText] = useState('');
    const columns = [
        { title: 'ID', dataIndex: 'id', key: 'id' },
        { title: 'Student Code', dataIndex: 'studentCode', key: 'studentCode' },
        { title: 'Student Name', dataIndex: 'studentName', key: 'studentName' },
        { title: 'Final Test', dataIndex: 'result', key: 'result' },
        { title: 'Home Town', dataIndex: 'hometown', key: 'hometown' }

    ]
    const data = [
        { id: 1, studentCode: '0909001', studentName: 'Lê Văn Thắng', result: 8, hometown: 'TPHCM' },
        { id: 2, studentCode: '0909003', studentName: 'Trần Minh Tâm', result: 7.5, hometown: 'Đồng Nai' },
        { id: 3, studentCode: '0909002', studentName: 'Lý Uyển Nhi', result: 8.6, hometown: 'TPHCM' },
        { id: 4, studentCode: '0909004', studentName: 'Trịnh Thị Thu Thảo', result: 6, hometown: 'Tiền Giang' },
        { id: 5, studentCode: '0909005', studentName: 'Lê Văn Lợi', result: 8, hometown: 'Khánh Hòa' },
    ]
    const [searchData, setSearchData] = useState(data);
    const [myProvinces, setMyProvinces] = useState<string[]>([]);
    return (
        // <Table columns={columns} dataSource={data.filter(x => x.studentName.includes('Văn'))} />
        // <Table columns={columns} dataSource={data} />
        <div>
            <div style={{ display: 'inline' }}>
                Find student by name: <Input type="text" style={{ width: '20%' }} value={searchText} onChange={(e) => setSearchText(e.currentTarget.value)}
                    onKeyPress={(e) => {
                        if (e.key == 'Enter') {
                            setSearchData(data.filter(x => x.studentName.toLowerCase().includes(searchText.toLowerCase().trim())))
                        }
                    }} />&nbsp;
                <input type="checkbox" onChange={(e) => {
                    if (e.currentTarget.checked) {
                        setMyProvinces([...myProvinces, 'TPHCM']);
                    }
                    else {
                        setMyProvinces(myProvinces.filter(province => province !== 'TPHCM'));
                    }
                }
                }
                />&nbsp;TPHCM &nbsp;
                <input type="checkbox" onChange={(e) => {
                    if (e.currentTarget.checked) {
                        setMyProvinces([...myProvinces, 'Đồng Nai']);
                    }
                    else {

                        setMyProvinces(myProvinces.filter(province => province !== 'Đồng Nai'));
                    }
                }
                } />&nbsp;Đồng NAi &nbsp;
                <input type="checkbox" onChange={(e) => {
                    if (e.currentTarget.checked) {
                        setMyProvinces([...myProvinces, 'Khánh Hòa']);
                    }
                    else {
                        setMyProvinces(myProvinces.filter(province => province !== 'Khánh Hòa'));
                    }
                }
                } />&nbsp;Khánh Hòa &nbsp;
                <input type="checkbox" onChange={(e) => {
                    if (e.currentTarget.checked) {
                        setMyProvinces([...myProvinces, 'Tiền Giang']);
                    }
                    else {
                        setMyProvinces(myProvinces.filter(province => province !== 'Tiền Giang'));
                    }
                }
                } />&nbsp;Tiền Giang &nbsp;
                <Button type="primary" onClick={() => {
                    // Cập nhật điểm 
                    let index: any = data.findIndex(a => a.id == 2)
                    if (index != -1)
                        data[index].result = 9;
                    let previous = data.slice(0, index);
                    let nexts = data.slice(index + 1);
                    setSearchData([...previous, data[index], ...nexts]);
                    
                    //Lọc theo tỉnh
                    setSearchData(data.filter(student => myProvinces.length === 0 || myProvinces.includes(student.hometown)));
                }
                }
                style={{ backgroundColor: 'blue' }} >Lọc dữ liệu</Button>
            </div>
            <Table columns={columns} dataSource={searchData} />
            /</div>
    )
}
export default Test1;