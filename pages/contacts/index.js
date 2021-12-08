import Head from "next/head";
import { useState, useEffect } from "react";
import Link from "next/link";

export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props: { contacts: data }
    }

};

const Contacts = ({ contacts }) => {
    return (
        <>
            <Head>
                <title>Contacts</title>
            </Head>
            <h1>Contacts list:</h1>
            <ul>
                {contacts && contacts.map(({ id, name, email }) => (
                    <li key={id}>
                        <Link href={`/contacts/${id}`}>
                            {name}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
};

export default Contacts;