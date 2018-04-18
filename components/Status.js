import React from 'react';

export default class Status extends React.Component {
  render () {
    const { winner } = this.props;
    
    function result(winner){
      if (winner === "X") {
        return <p>X wins</p>;
      } else if (winner === "O") {
        return <p>O wins</p>;
      } else {
        return <p>Tie</p>;
      }
    }

    return (
      <div className='status'>
      {result(winner)}
      </div>
    );
  }
}
