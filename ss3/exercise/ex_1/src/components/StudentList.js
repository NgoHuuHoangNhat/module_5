import { Component } from 'react';
class StudentList extends Component {
 
    constructor() {
        super();
        this.state =  {
            listStudent: [{
                id: 1,
                name: 'Kim Ngoc Thanh',
                age: 20,
                address: 'Ha Noi'
            },
            {
                id: 2,
                name: 'Le Huy',
                age: 50,
                address: 'Da Nang'
            },
            {
                id: 3,
                name: 'Dam Thoai Tin ',
                age: 26,
                address: 'Da Nang'
            },
            {
                id: 4,
                name: 'Banh Thi Queen',
                age: 29,
                address: 'Quang Tri'
            },
            {
                id: 5,
                name: 'Ngo Huu Hoang Nhat',
                age: 27,
                address: 'Quang Tri'
            },
            {
                id: 6,
                name: 'Tran Viet Duy',
                age: 36,
                address: 'Hoi An'
            }]
        }
    }   
    render() {
        return (
            <>
                <table style={{ borderCollapse: "collapse" }} border={1}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.listStudent.map((element, index) => {
                            return (
                                <tr key={index}>
                                    <td>{element.id}</td>
                                    <td>{element.name}</td>
                                    <td>{element.age}</td>
                                    <td>{element.address}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </>
        )
    }

}

export default StudentList;