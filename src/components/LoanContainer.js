import React from 'react'
import LoanSelector from './LoanSelector'
import LoanList from './LoanList'
import './Loan.css'

class LoanContainer extends React.Component {
  constructor(post) {
    super(post)
    this.state = {
      loans: []
    }
  }

  loadLoans() {
    // for (let i = 1; i <= 10; i++) {
    //   fetch(`http://api.kivaws.org/v1/loans/search.json?status=fundraising&page=${i}`)
    //   .then(resp => resp.json())
    //   .then(json => {
    //     this.setState(prevState => {
    //       return {loans: [...prevState, ...json.loans]}
    //     })
    //   })
    // }
    //
    fetch(`http://api.kivaws.org/v1/loans/search.json?status=fundraising&page=1`)
    .then(resp => resp.json())
    .then(json => this.setState({loans: json.loans}))

  }

  componentDidMount() {
    this.loadLoans()
  }


  render() {


    return (
      <div className="loan-container">
        <LoanSelector />
        <LoanList loans={this.state.loans}/>
      </div>
    )
  }
}

export default LoanContainer
