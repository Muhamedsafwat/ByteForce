'use client';
import React, { useState, useEffect } from 'react';
import { Title } from '../typography';

const ContactForm = ({
  title,
  buttonText,
}: {
  title: string;
  buttonText: string;
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [isValid, setIsValid] = useState(false);
  //const [isLoading, setIsLoading] = useState(false);

  //check for all inputs
  useEffect(() => {
    if (name && phone && email && subject && message) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [name, phone, email, subject, message]);

  //submit handler
  //   const submitHandler = (e) => {
  //     e.preventDefault();
  //     setIsLoading(true);
  //     emailjs
  //       .sendForm(
  //         "service_qzifqv1",
  //         "template_6vdaoq4",
  //         e.target,
  //         "dBz5a2coPV_IpVWjA"
  //       )
  //       .then(
  //         (result) => {
  //           if (result.text == "OK") {
  //             alert("Thank you for getting in touch!");
  //             setName("");
  //             setEmail("");
  //             setMessage("");
  //             setPhone("");
  //             setSubject("");
  //           }
  //         },
  //         (error) => {
  //           console.log(error.text);
  //         }
  //       );
  //   };

  return (
    <div className="my-20 flex-[3]">
      <Title className="text-gradient">{title}</Title>
      <form
        //   onSubmit={submitHandler}
        className="mt-8 flex flex-col gap-5 text-lg text-white [&>input]:rounded-md [&>input]:border-[1px] [&>input]:border-blue-600 [&>input]:bg-blue-600 [&>input]:bg-opacity-20 [&>input]:px-4 [&>input]:py-2"
      >
        <div className="flex w-full gap-5">
          <input
            className="flex-1 rounded-md border-[1px] border-blue-600 bg-blue-600 bg-opacity-20 px-4 py-2"
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="your name"
            name="name"
            minLength={5}
          />
          <input
            className="flex-1 rounded-md border-[1px] border-blue-600 bg-blue-600 bg-opacity-20 px-4 py-2"
            onChange={(e) => setPhone(e.target.value)}
            type="tel"
            placeholder="phone number"
            name="phone"
            minLength={11}
          />
        </div>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="email"
          name="email"
          minLength={12}
        />
        <input
          onChange={(e) => setSubject(e.target.value)}
          type="text"
          placeholder="subject"
          name="subject"
          minLength={5}
        />
        <textarea
          minLength={20}
          onChange={(e) => setMessage(e.target.value)}
          cols={30}
          rows={5}
          placeholder="Leave your message here"
          name="message"
          className="rounded-md border-[1px] border-blue-600 bg-blue-600 bg-opacity-20 px-4 py-2"
        ></textarea>
        <button
          disabled={!isValid}
          className="disabled:hover:bg-main mr-auto rounded-md border-2 border-blue-500 bg-blue-500 px-7 py-3 text-white duration-300 hover:bg-transparent hover:text-blue-500 disabled:opacity-50 disabled:hover:text-white"
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
