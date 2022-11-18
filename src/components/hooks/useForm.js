import { useState } from 'react';
import { helpHttp } from './helpHttp';

export const useForm = (initialForm, validateForm) => {

    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [res, setRes] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value
        });
    };

    const handleBlur = (e) => {
        handleChange(e)
        setErrors(validateForm(form))
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setErrors(validateForm(form))

        if (Object.keys(errors).length === 0) {
            setLoading(true);
            helpHttp().post("https://formsubmit.co/ajax/dev.ricardog@gmail.com", {
                body: form,
                headers: {
                    "Content-type": "application/json",
                    Accept: "Application/json"
                }
            }).then(res => {
                setLoading(false);
                setRes(true);
                setForm(initialForm);
                setTimeout(() => setRes(false), 3000);
            })  

        } else {
            return;
        }
    };

    return {
        form,
        errors,
        loading,
        res,
        handleChange,
        handleBlur,
        handleSubmit
    }
} 