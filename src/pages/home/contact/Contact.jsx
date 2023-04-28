import React from 'react';
import { FaCalendarCheck, FaSearchLocation, FaPhoneAlt } from 'react-icons/fa';
import ContactWays from './ContactWays/ContactWays';

const Contact = () => {
    let contacts = [
        {
            message: "We are open Monday to Friday",
            way: "7:00 am - 9:00 pm",
            icon: <FaCalendarCheck className="text-orange-600 text-2xl" />
        },
        {
            message: "Have a question? Call Now",
            way: "+2549 251 2658",
            icon: <FaPhoneAlt className="text-orange-600 text-2xl"
            />
        },
        {
            message: "Need a repair? our address",
            way: "Liza Street, New York",
            icon: <FaSearchLocation className="text-orange-600 text-2xl" />
        }
    ]
    return (
        <div className="mt-20 bg-black rounded-lg">
            <div class="p-20 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    contacts.map((contact, index) => <ContactWays
                        key={index}
                        contact={contact}
                    ></ContactWays>)
                }
            </div>
        </div>
    );
};

export default Contact;