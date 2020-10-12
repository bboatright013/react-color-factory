import React from 'react';
import {Link, useParams} from 'react-router-dom';

const ColorDetail = () => {

    const {color} = useParams();
    const styles = {backgroundColor:color}
    return (
        <div style={styles} className="ColorDetail">
            <Link to="/colors">Back to Colors</Link>
        </div>
        )
}

export default ColorDetail;