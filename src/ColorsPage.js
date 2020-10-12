import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const ColorsPage = ({colors}) => {


    return (
        <div className="ColorsPage">
            <div className="Home-Nav">
                <h2>Welcome to the Color Factory</h2>
                <Link to="/colors/new">Add a Color</Link>
            </div>
            <ul className="Colors-List">
                {console.log(typeof colors)}
                {
                colors.map(
                    color =>
                     {
                        let path=`/colors/${color}`;
                        return (
                            <li>
                            <Link to={path}>{color}</Link>
                       </li>
                        )
                     })}
            </ul>
        </div>
    )
}



export default ColorsPage;