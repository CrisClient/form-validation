import * as yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

const schema = yup.object().shape({
    firstName: yup.string().min(3),require(),
    lastName: yup.string().min(3),require(),
    email: yup.string().email(),
    password: yup.string().required().matches(
        passwordRules,
        "Must Contain 8 Characters, One Uppercase, One Lowecase, One Number and one special case Character"
    ),
    confirmPassword: yup.string().required().oneOf([yup.ref("password"), null], "Password should Match")
})

export default schema;