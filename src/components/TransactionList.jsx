import React from 'react'
import './TransactionList.scss'
import imageUser from '../image/user.jpg'

const TransactionList = () => {
  return (
    <>
    <div className="card-container">
        <div className="card-heading">
            <h2>Last Transactions</h2>
            <span>See All</span>
        </div>
        <div className="cards">
            <div className="small-card">
                <img src={imageUser} alt="imageUser"/>
                <div className="user-details">
                    <h2>Aokiji</h2>
                    <div className="transaction-date">
                        <span>28 Feb 2023</span>
                        <li>06:23 PM</li>
                    </div>
                </div>
                <div className="status-record">
                    <h1>+$13.00</h1>
                    <div className="status">Received</div>
                </div>
            </div>
            <div className="small-card">
                <img src={imageUser} alt="imageUser"/>
                <div className="user-details">
                    <h2>Kizaru</h2>
                    <div className="transaction-date">
                        <span>28 Feb 2023</span>
                        <li>06:23 PM</li>
                    </div>
                </div>
                <div className="status-record">
                    <h1 style={{color:'red'}}>-$09.00</h1>
                    <div className="status">Outgoing</div>
                </div>
            </div>
            <div className="small-card">
                <img src={imageUser} alt="imageUser"/>
                <div className="user-details">
                    <h2>Akainu</h2>
                    <div className="transaction-date">
                        <span>28 Feb 2023</span>
                        <li>06:23 PM</li>
                    </div>
                </div>
                <div className="status-record">
                    <h1>+$20.00</h1>
                    <div className="status">Received</div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default TransactionList