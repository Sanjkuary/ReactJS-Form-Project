import './App.css';
import Header from './components/Header';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data, { name, email, phone, address }]);
  };

  const removeItem = (index) => {
    let remove = data;
    remove.splice(index, 1);
    setData([...remove]);
  }
  return (
    <div className="App">
      <Header />
      {/* form section */}
      <div className='form'>
        <Stack direction="row" spacing={2}>
          <TextField
            value={name}
            onChange={(event) => setName(event.target.value)}
            id="outlined-basic"
            label="name"
            variant="outlined"
          />
          <TextField
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            id="outlined-basic"
            label="email"
            variant="outlined"
          />
          <TextField
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            id="outlined-basic"
            label="phone"
            variant="outlined"
          />
          <TextField
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            id="outlined-basic" 
            label="address" 
            variant="outlined"
          />
          <Button onClick={addData} variant="contained" color="success">
            <AddIcon />
          </Button>
        </Stack>
      </div>

      {/* Data section */}
      <div className='data'>
        <div className='data_show'>
          <u><h4>Serial No</h4></u>
          <u><h4>Name</h4></u>
          <u><h4>Email</h4></u>
          <u><h4>Phone</h4></u>
          <u><h4>Address</h4></u>
          <u><h4>Remove</h4></u>
        </div>
        {
          data.map((element, index) => {
            return (
              <div key={index} className='data_show'>
                <h4>{index + 1}</h4>
                <h4>{element.name}</h4>
                <h4>{element.email}</h4>
                <h4>{element.phone}</h4>
                <h4>{element.address}</h4>
                <Button onClick={() => removeItem(index)} variant="contained" color="error">
                  <DeleteOutlineIcon />
                </Button>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
