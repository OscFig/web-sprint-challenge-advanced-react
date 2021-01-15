import { useState } from 'react';
import useLocalStorage from './useLocalStorage';

const useForm = ( initialValue) => {
    const [values, setValues] = useLocalStorage('formKey', initialValue);
    return([values, setValues])
}
export default useForm;