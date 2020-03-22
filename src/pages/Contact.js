import React, {useState} from "react";
import {Flex} from "../components/grids/Flex";
import TextField from "@material-ui/core/TextField";
import {Button} from "@material-ui/core";

const Contact = () => {
    const [firstNameError, setFirstNameError] = useState(true)
    const [lastNameError, setLastNameError] = useState(true)
    const [emailError, setEmailError] = useState(true)
    const [messageError, setMessageError] = useState(true)
    const [telError, setTelError] = useState(true)

    const handleSubmit = (event) => {
        event.preventDefault()

    }

    const handleChange = (input) => {
        let name = input.target.name
        let value = input.target.value
        let emailPattern = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/
        let phonePattern = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/

        switch (name) {
            case 'firstName':
                (value !== '') ? setFirstNameError(false) : setFirstNameError(true)
                break
            case 'lastName':
                (value !== '') ? setLastNameError(false) : setLastNameError(true)
                break
            case 'email':
                (emailPattern.test(value)) ? setEmailError(false) : setEmailError(true)
                break
            case 'message':
                (value !== '') ? setMessageError(false) : setMessageError(true)
                break
            case 'tel':
                (phonePattern.test(value)) ? setTelError(false) : setTelError(true)
                break
            default:
                break
        }
    }

    return (
        <Flex flexDirection={'column'} justifyContent={'space-around'} alignItems={'center'} style={{width: '100%'}}>
            <h1>Contact me</h1>
            <form onSubmit={handleSubmit} style={{width: '100%', maxWidth: '500px'}}>
                <TextField
                    id="outlined-basic"
                    type={'text'}
                    name={'firstName'}
                    label="First Name.."
                    variant="outlined"
                    onChange={handleChange}
                    error={firstNameError ? true : false}
                    helperText={'Can not be empty'}
                    style={{width: '100%', margin: '10px'}}
                />
                <TextField

                    id="outlined-basic"
                    type={'text'}
                    name={'lastName'}
                    label="Last Name.."
                    variant="outlined"
                    onChange={handleChange}
                    error={lastNameError ? true : false}
                    helperText={'Can not be empty'}
                    style={{width: '100%', margin: '10px'}}
                />
                <TextField
                    id="outlined-basic"
                    type={'text'}
                    name={'email'}
                    label="Email.."
                    variant="outlined"
                    onChange={handleChange}
                    error={emailError ? true : false}
                    helperText={'Must be a valid email'}
                    style={{width: '100%', margin: '10px'}}
                />
                <TextField
                    id="outlined-basic"
                    type={'tel'}
                    name={'tel'}
                    pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}'
                    label="Telephone number.."
                    variant="outlined"
                    onChange={handleChange}
                    error={telError ? true : false}
                    helperText={'Must be a number'}
                    style={{width: '100%', margin: '10px'}}
                />
                <TextField
                    id="outlined-textarea"
                    type={'text'}
                    name={'message'}
                    label="Message.."
                    multiline
                    variant="outlined"
                    onChange={handleChange}
                    error={messageError ? true : false}
                    helperText={'Can not be empty'}
                    style={{width: '100%', margin: '10px'}}
                />
                <Flex justifyContent={'flex-end'} style={{width: '100%'}}>
                    <Button
                        type={'submit'}
                        disabled={firstNameError || lastNameError || emailError || messageError}
                        color="primary"
                    >
                        Submit
                    </Button>
                </Flex>
            </form>
        </Flex>
    )
}

export default Contact
