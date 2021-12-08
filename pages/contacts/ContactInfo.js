import Heading from "../../components/Heading";

const ContactInfo = ({ contact }) => {
    const { name, email, address } = contact || {};
    const { city, street, suite, zipcode } = address || {};

    if (!contact) {
        return <Heading tag="h3" text="Empty contact" />
    }

    return (
        <>
            <Heading tag="h3" text={name} />
            <div>
                <strong>Email: </strong>
                {email}
            </div>
            <div>
                <strong>Address: </strong>
                {`${street}, ${suite}, ${city}, ${zipcode}`}
            </div>
        </>
    )
}

export default ContactInfo;