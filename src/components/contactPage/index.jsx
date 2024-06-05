import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { validateEmail } from '../../utils/helper';
export default function ContactPage() {
    const [formState, setFormState] = useState({ name: "", email: "", message: "" })
    const [userMessage, setUserMessage] = useState("")
    const handleChange = e => { setFormState({ ...formState, [e.target.name]: e.target.value }) }
    const handleValidation = e => {
        if (e.target.name === "email") {
            if (!validateEmail(e.target.value)) {
                setUserMessage("invalid email")
            } else {
                setUserMessage("")
            }

        } else {
            if (!e.target.value.length) {
                setUserMessage("require field")
            } else {
                setUserMessage("")
            }
        }
    }
    const handleSubmit = e => {
        e.preventDefault()
        setUserMessage("email sent")
        setFormState({ name: "", email: "", message: "" })
    }
    return (<div>

        <Form className="mt-4">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control name="name" onBlur={handleValidation} onChange={handleChange} value={formState.name} type="text" placeholder="your name here" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" onBlur={handleValidation} onChange={handleChange} value={formState.email} type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>message</Form.Label>
                <Form.Control name="message" onBlur={handleValidation} onChange={handleChange} value={formState.message} as="textarea" rows={3} />
            </Form.Group>
            <Button onClick={handleSubmit} disabled={!formState.name || !formState.email || !formState.message} variant="primary" type="submit">
                Submit
            </Button>
            {userMessage && <p>{userMessage}</p>}
        </Form>

    </div>)
}