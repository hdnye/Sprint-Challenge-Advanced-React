import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import axios from 'axios';


// class SearchForm extends React.Component {
//     constructor(props) {
//         super(props);
//           this.state = {
//               name: ''
//          };
//     }

export default function SearchForm(props) {
    const [search, setSearch] = useState('');

   
   useEffect(() => {
    axios.get('http://localhost:5000/api/players')
    .then(res => {
      const  searchPlayers = res.data.filter(players => players.name.toLowerCase().includes(search.toLocaleLowerCase()) );     
      setSearch(searchPlayers);
 });
 },[search]);

    const changeHandler = event => {
        event.preventDefault()
        setSearch({ name: event.target.value })
    };

    const submitHandler = event => {
        event.preventDefault();
        setSearch({ name: '' });
    }


       return (
           <div className='searchForm'>
              <form onSubmit={searchPlayers}>
                  <label htmlFor='search'></label><br></br>
                      <input 
                           type='text'
                            name='search'
                            placeholder='Search'
                            value={search}
                            onChange={changeHandler}
                         />
                      <Button type='submit' onClick={submitHandler}>Submit</Button>  
                  </form>
             </div> 
           );
        };

       
                


              













