import React, { useState, useRef } from 'react';
import { tw } from 'twind'
import axios from 'axios';


import { form } from '@/helpers/styles'






const Form = () => {
  const [nume, setNume] = useState(null);
  const [email, setEmail] = useState(null);
  const [serviciu, setServiciu] = useState(null);
  const [buget, setBuget] = useState(null);
  const [textAreaValue, setTextAreaValue] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const formRef = useRef(null); // referința către elementul form

  const resetState = () => {
    setNume(null);
    setEmail(null);
    setServiciu(null);
    setBuget(null);
    setTextAreaValue(null);
    formRef.current.reset();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORM_ID}`,
        {
          nume,
          email,
          serviciu,
          buget,
          textAreaValue,
        }
      );
      setShowSuccessMessage(true);
      resetState();
      alert('Mesajul a fost trimis!');
    } catch (error) {
      console.error(error);
      alert('A apărut o problemă la trimiterea mesajului.');
      resetState();
    }
  };

  return (
    <div className={tw('self-center sm: w-full lg:w-1/3')}>
      <form ref={formRef} onSubmit={handleSubmit} id="Formular Contact" className={form.form}>
        <label className={form.label} htmlFor="nume">
          Numele tău îmi e poruncă
        </label>
        <input
          className={form.input}
          type="text"
          name="nume"
          onChange={(e) => setNume(e.target.value)}
        />
        <label className={form.label} htmlFor="email">
          Email
        </label>
        <input
          className={form.input}
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className={form.label} htmlFor="serviciu">
          Alege-ți serviciul
        </label>
        <select
          className={form.select}
          name="serviciu"
          id="serviciu"
          form="Formular Contact"
          onChange={(e) => setServiciu(e.target.value)}
        >
          <option value="Social Media">Social Media</option>
          <option value="Copywriting">CopyWriting</option>
          <option value="Design Grafic">Design Grafic</option>
        </select>
        <label className={form.label} htmlFor="buget">
          Buget
        </label>
        <input
          className={form.input}
          type="number"
          name="buget"
          onChange={(e) => setBuget(e.target.value)}
        />
        <label className={form.label} htmlFor="buget">
          Spune-mi ce-ți dorești
        </label>
        <textarea
          rows={10}
          className={form.textArea}
          onChange={(e) => setTextAreaValue(e.target.value)}
        />
        <button className={form.button} type="submit">
          TRIMITE
        </button>
        {showSuccessMessage && (
          <p
            style={{
              backgroundColor: 'green',
              color: 'white',
              padding: '1rem',
            }}
          >
            Mesajul a fost trimis cu succes!
          </p>
        )}
      </form>
    </div>
  );
}

export default Form