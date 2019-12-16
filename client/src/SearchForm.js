import React, { useEffect } from 'react';
import {Container, Row, Col, Button } from 'reactstrap';
import LocalStorage from './LocalStorage';


// class SearchForm extends React.Component {
//     constructor(props) {
//         super(props);
//           this.state = {
//               name: ''
//          };
//     }

export default function SearchForm(props) {
    const [search, setSearch] = LocalStorage(false);

       
    const  searchPlayers = () => {
        props.data.filter(players => players.name.toLowerCase().includes(search));     
    }
  
    const changeHandler = event => {
        setSearch({ name: event.target.value })
    };

    const submitHandler = event => {
        event.preventDefault();
        setSearch({ name: '' });
    }


       return (
           <Container>
                <Row>
                   <Col xs='auto'>
                       <form onSubmit={submitHandler}>
                           <label htmlFor='search'></label><br></br>
                             <input 
                               type='text'
                               name='search'
                               placeholder='Search'
                               value={search}
                               onChange={searchPlayers}
                              />
                             <Button type='submit' onClick={changeHandler}>Submit</Button>  
                        </form>
                      </Col>                  
                    </Row>   
            </Container>
        );
    };

       
                


              













