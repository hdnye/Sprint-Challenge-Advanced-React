import React, { useEffect } from 'react';
import { Button } from 'reactstrap';
import axios from 'axios';
import localStorage from './localStorage';



// export default class SearchForm extends React.Component {
//     constructor(props) {
//         super(props);
//           this.state = {
//               search: ''
//           };

export default function SearchForm(props) {
    const [search, setSearch] = localStorage('');

   
//    useEffect(() => {
//     axios.get('http://localhost:5000/api/players')
//     .then(res => {
//       res.data.filter(players => players.name.toLowerCase().includes());     
//       setSearch(search);
//  });
//  },[search]);

const submitHandler = event => {

    axios.get('http://localhost:5000/api/players')
        .then(res => {
          res.data.filter(players => players.name.toLowerCase().includes());     
          setSearch({ search: event.target.value});
     });
    }  
    


    // const submitHandler = event => {
    //     event.preventDefault()
    //     setSearch({ name: event.target.value })
    // };

    const changeHandler = event => {
        event.preventDefault();
        setSearch({ name: '' });
    }


       return (
           <div className='searchForm'>
              <form onSubmit={submitHandler}>
                  <label htmlFor='search'></label><br></br>
                      <input 
                           type='text'
                            name='search'
                            placeholder='Search'
                            value={props.search}
                            onChange={changeHandler}
                         />
                      <Button type='submit'>Submit</Button>  
                  </form>
             </div> 
           );
        };

                


              













