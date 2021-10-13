import { useState} from 'react'

const UseForm = ({ initialFormData = {}}) => {
    const [formData, setFormData] = useState(initialFormData);

    const handleField = ({ target }) => {
        setFormData(formData => ({...formData, [target.name]: target.value}))
    };
    return {formData, handleField};
}

export default UseForm
