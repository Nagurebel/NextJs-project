"use client"
import styles from '@/app/contact/contact.module.css'
import { Mulish } from 'next/font/google'
import { useEffect, useState } from 'react'

const mulish = Mulish({
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    display: 'swap'
})

const ContactForm = () => {

    const [user, setuser] = useState({
        username: '',
        email: '',
        message: '',
        phone: ''
    })

    const [status, setStatus] = useState(null)

    useEffect(() => { window.scrollTo(0, 0); }, []);

    const handleChanges = (e) => {
        const { name, value } = e.target

        // const name = e.target.name
        // const value = e.target.value

        setuser((prev) => ({
            ...prev,
            [name]: value
        }))

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { "Content_Type": "application/json" },
                body: JSON.stringify({
                    username: user.username,
                    email: user.email,
                    phone: user.phone,
                    message: user.message,
                })
            })
            if (response.status === 200) {
                setuser({
                    username: '',
                    email: '',
                    message: '',
                    phone: ''
                })
                setStatus('success')
            } else {
                setStatus('error')
            }
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <form action="" className={styles.contact_form} onSubmit={handleSubmit}>
            <div className={styles.input_field}>
                <label htmlFor="username" className={styles.label}>
                    Enter your name
                    <input className={mulish.className} type="text" required autoComplete='off' value={user.username} onChange={handleChanges} name="username" id="username" placeholder='Enter your name' />
                </label>
            </div>
            <div className={styles.input_field}>
                <label htmlFor="email" className={styles.label}>
                    Email
                    <input className={mulish.className} type="text" required autoComplete='off' value={user.email} onChange={handleChanges} name="email" id="email" placeholder='Enter your email' />
                </label>
            </div>
            <div className={styles.input_field}>
                <label htmlFor="phone" className={styles.label}>
                    Phone Number
                    <input className={mulish.className} type="text" required autoComplete='off' value={user.phone} onChange={handleChanges} name="phone" id="phone" placeholder='Enter your phone' />
                </label>
            </div>
            <div className={styles.input_field}>
                <label htmlFor="message" className={styles.label}>
                    Message
                    <textarea className={mulish.className} required autoComplete='off' value={user.message} onChange={handleChanges} name="message" rows={5} id="message" placeholder='Enter your message' />
                </label>
            </div>
            <div>
                {status === 'success' && <p className={styles.success_msg}>Thank you for your message!</p>}
                {status === 'error' && <p className={styles.error_msg}>There was an error submitting your message!</p>}
                <button type="submit" className={mulish.className}>Send message</button>
            </div>
        </form>
    )
}

export default ContactForm