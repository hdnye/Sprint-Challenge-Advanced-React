import React from 'react';
import axios from 'axios';
// import PlayerCard from './PlayerCard';



class PlayerData extends React.Component {
    constructor(props) {
        super(props);
         this.state = {
            players: []            
        };
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

render() {
    return (
        <div className='playerData'>
          {this.state.players.map(player => (
              <div key={player.id}>
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
            
          

      
                                  
              



 