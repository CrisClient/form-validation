import { useCallback } from "react"
import { useFormik } from "formik"
import Schema from "../schemas/Schema"

const Form = () => {

    const handleOnSubmit = (values) => {
        console.log(values)
    }

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName:"",
            email:"",
            password:"",
            confirmPassword:""
        },
        validationSchema: schema,
        onSubmit: handleOnSubmit
    })

    const setInputValues = useCallback((key,value)=> {
        formik.setValues({
            ...formik.values,
            [key]: value
        })
    }, [formik])


    return (
        <form>
            <input 
                placeholder="Introduce Nombre"
                value={formik.values.firstName}
                OnChange={(e) => {setInputValues("firstName,", e.target.value)}}
            />
            <input 
                placeholder="Introduce Apellido"
                value={formik.values.lastName}
            />
            <input 
                placeholder="Introduce Email"
                value={formik.values.email}
            />
            <input 
                placeholder="Introduce Contraseña"
                value={formik.values.password}
            />
            <input 
                placeholder="Confirma Contraseña"
                value={formik.values.confirmPassword}
            />
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form;