import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import axios from 'axios';
//import localStorage from './hooks/localStorage';



export default function SearchForm(props) {
    const [search, setSearch] = useState();


const submitHandler = event => {

    axios.get(`http://localhost:5000/api/players/${search}`)
        .then(res => {
          res.data.filter(players => players.name.toLowerCase().includes());     
          setSearch({ search: event.target.value});
     });
    }  
    

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

         


              
// export default class SearchForm extends React.Component {
//     constructor(props) {
//         super(props);
//           this.state = {
//               search: ''
//           };
//        };

// componentDidMount() {
//     localStorage('search', JSON.stringify(this.state));
// }
   
//    useEffect(() => {
//     axios.get('http://localhost:5000/api/players')
//     .then(res => {
//       res.data.filter(players => players.name.toLowerCase().includes());     
//       this.setState(search);
//   });
//  },[search]);
     
//     const submitHandler = event => {
//         event.preventDefault()
//         this.setState({ search: event.target.value })
//     };

// render() {
//        return (
//         <div className='search-form>
//          <form onSubmit={this.submitHandler}>
//           <input
//               type='text'
//               name='search'
//               placeholder='Search'
//               value={this.state.search}
//               onChange={this.changeHandler}
//              /><br></br>

//              <Button>Submit</Button> 
//             </form> <br></br>
//           </div>
//     ) 
// }








