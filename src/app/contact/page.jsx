import ContactCard from "../components/ContactCard"
import ContactForm from "../components/ContactForm"
import styles from './contact.module.css'

const Contact = () => {
    return (
        <>
            <div className={styles.container}>
                <h1>Contact Us</h1>
                <ContactCard />
                <section className={styles.contact_section}>
                    <h2>We'd love to hear <span> from you </span></h2>
                    <ContactForm />
                </section>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15552.25675640852!2d77.52577731148392!3d12.967744416317133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3db0dafe0429%3A0x7619518d4d30a8da!2z4LKu4LK-4LKw4LOB4LKk4LK_IOCyruCyguCypuCyv-CysCDgsrXgsr_gspzgsq_gsqjgspfgsrAg4LKJ4LKm4LON4LKv4LK-4LKo!5e0!3m2!1sen!2sin!4v1690186776749!5m2!1sen!2sin" width={100} height={450} style={{ border: 0 }} className={styles.mapping} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer"></iframe>
        </>
    )
}

export default Contact 