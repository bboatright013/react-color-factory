import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';

const NewColor = ({colors, addColor}) => {
    const history = useHistory();
    const [formData, setFormData] = useState({
        color: ""
      });
    
      const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(fData => ({
          ...fData,
          [name]: value
        }));
      };

      const handleSubmit = evt => {
          evt.preventDefault();
          console.log(formData);
          addColor([...colors,formData.color]);
          history.push("/colors");
      }

return (
    <div className="NewColor">
        <form onSubmit={handleSubmit}>
        <label htmlFor="color">Color:</label>
        <input 
        id="color"
        name="color"
        type="text"
        onChange={handleChange}
        value={formData.color}
        />
        <button>Submit</button>
        </form>
    </div>
)
}

export default NewColor;