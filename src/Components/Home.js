import React from 'react'
import {Link } from 'react-router-dom'
import { Calculator } from './Calculator'

export const Home = () => {
    return (
        <div className="container">
            <div className="my-2 main-head">
                <h1>My Tools</h1>
                <h5 className="main-para my-1">
                    MyTools is a free online calculator service that provides many different calculators
                    in various fields like trignometric calculator, basic calculator, determinant solver,
                    you can access and explore all our products for free at  
                    <Link to="/calculators"> calculators</Link> .
                    We are constantly working to improve our services. We are working on 
                    adding more and more types of calculators to help you out. Our basic 
                    calculator....

                </h5>
                <div className="my-3 main-calc">
                <Calculator/>
                </div>
            </div>
        </div>
    )
}
