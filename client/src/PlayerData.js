import React from 'react';
import axios from 'axios';

class PlayerData extends React.Component {
    constructor(props) {
        super(props);
         this.state = {
            players: [] 
        }
    }

   componentDidMount() {
        axios.get('http://localhost:5000/api/players')
         .then(res => {
             console.log(res.data);
             this.setState({
                 players: res.data
             });
         })
        .catch(err => console.log(err));
    };

    handleChanges = event => {
        this.setState({
            players: event.target.value
        });
    };


render() {
    return (
        <div className='playerData'>
          {this.state.players.map(player => (
              <div>
                  <h1>{player.name}</h1>
                  <p>{player.country}</p>
                  <p>{player.searches}</p>
            </div>
          ))}      
       </div>
     )
   };
};

export default PlayerData;