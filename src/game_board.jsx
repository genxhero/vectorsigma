import React from 'react';
import HeroSprite from './hero_sprite';

class GameBoard extends React.Component {

    componentDidMount(){
        
    }

    render() {
        return (
            <div className="game-board-main">
              
               <div className="game-header"></div>
               <div className="game-sky"></div>
               <div className="game-ground"></div>
            </div>
        );
    }
}

export default GameBoard;