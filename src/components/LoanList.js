import React from 'react'
import LoanCard from "./LoanCard"

class LoanList extends React.Component{


  render() {
    let loans = []
    for (let l of this.props.loans){
      loans.push(<LoanCard loan={l}/>)
    }
    return (
      <div className="loan-list">
        {loans}
      </div>
    )
  }
}

export default LoanList
