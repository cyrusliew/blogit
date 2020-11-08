import { useState, useEffect } from 'react';
import { useRouteMatch, useParams, useHistory } from 'react-router-dom';
import { getData, saveData } from '../Helpers/helpers';
import moment from 'moment';

const useForm = (contentType) => {
    const { path } = useRouteMatch();
    const { id: currentId } = useParams();
    const history = useHistory();
    const [formData, setFormData] = useState({});
    const [discard, setDiscard] = useState(false);
    const isEditMode = path.includes('edit');

    useEffect(() => {
        if (isEditMode && !!currentId && Object.keys(formData).length === 0) {
            const data = getData();
            const loadedData = data.filter(({ id }) => parseInt(id) === parseInt(currentId));
            setFormData(loadedData[0]);
        }
    }, [currentId, formData, isEditMode])

    const handleDiscard = () => {
        setDiscard(true);
    }

    const handleDiscardConfirm = () => {
        history.push('/');
    }

    const handleSubmit = () => {
        const data = getData();

        if (isEditMode) {
            const loadedData = data.filter(({ id }) => parseInt(id) === parseInt(currentId))[0];
            const dataIndex = data.findIndex(({ id }) => parseInt(id) === parseInt(currentId));
            data[dataIndex] = {...loadedData, ...formData};
            saveData(data);
            return history.push('/');
        }

        const id = data.length === 0 ? 1 : parseInt(data[data.length - 1].id) + 1;
        const newDataObj = {
            id,
            contentType,
            ...formData,
        };
        saveData([...data, newDataObj]);
        history.push('/');
    }

    const handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'date' ? moment(target.valueAsDate, 'DD/MM/YYYY') : target.value;
        const name = target.name;
        setFormData({...formData, [name]: value});
    }

    return {
        discard,
        setDiscard,
        formData,
        handleDiscard,
        handleDiscardConfirm,
        handleChange,
        handleSubmit,
        isEditMode,
    }
}

export default useForm;