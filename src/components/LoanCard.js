import React from 'react'

class LoanCard extends React.Component {

  render(){
    return (
      <div className='loan-card'>
        <h4>{this.props.loan.name}</h4>
        <p>from {this.props.loan.location.town} in {this.props.loan.location.country} has requested a loan {this.props.loan.use}</p>
      </div>
    )
  }
}

export default LoanCard
