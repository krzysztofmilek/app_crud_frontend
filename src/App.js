import './App.css';
import axios from 'axios';
import { useState } from 'react';
import TableUser from './components/TableUser';
import AddFormUser from './components/AddFormUser';



function App(props) {
  const [users, setUsers] = useState([])
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    course: ""
  });


  const getValue = (e) => {


    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      [e.target.city]: e.target.value,
      [e.target.course]: e.target.value,
    }

    );


  } 

  

  const sortNameUp = (async () => {
    const res = await axios.get('http://localhost:8080/user/sortUp')
    setUsers(res.data)


  })
  const sortNameDown = (async () => {
    const res = await axios.get('http://localhost:8080/user/sortDown')
    setUsers(res.data)

  })


  const sortCityUp = (async () => {
    const res = await axios.get('http://localhost:8080/user/sortCityUp')
    setUsers(res.data)


  })
  const sortCityDown = (async () => {
    const res = await axios.get('http://localhost:8080/user/sortCityDown')
    setUsers(res.data)

  })

  const sortCourseUp = (async () => {
    const res = await axios.get('http://localhost:8080/user/sortCourseUp')
    setUsers(res.data)


  })
  const sortCourseDown = (async () => {
    const res = await axios.get('http://localhost:8080/user/sortCourseDown')
    setUsers(res.data)

  })



  const find = (async () => {


    const res = await axios.get('http://localhost:8080/user/findData/?', {
      params: {
        name: formData.name,
        city: formData.city,
        course: formData.course,
      }
    });
    console.log(res)
    setUsers(res.data)



  })



  const getUsers = async () => {
    const users = await axios.get('http://localhost:8080/user/');
    setUsers(users.data);

  }
  return (
    <div className="App">
      <AddFormUser
        getUsers={getUsers}
        buttonMetod={find}
        getValue={getValue}
                formData={formData}
         />
      <TableUser
        propsGetUser={getUsers}
        dataUsers={users}
        sortNameUp={sortNameUp} sortNameDown={sortNameDown}
        sortCityUp={sortCityUp} sortCityDown={sortCityDown}
        sortCourseUp={sortCourseUp} sortCourseDown={sortCourseDown}
      />
    </div>
  );
}

export default App;
