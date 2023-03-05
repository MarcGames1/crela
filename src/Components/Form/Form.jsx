import React, {useState} from 'react'
import { tw } from 'twind'

import { form } from '@/helpers/styles'






const Form = () => {

    const [nume, setNume] = useState(null)
    const [email, setEmail] = useState(null)
    const [serviciu, setServiciu] = useState(null)
    const [buget, setBuget] = useState(null)
    const [textAreaValue, setTextAreaValue] = useState(null)




  return (
    <div className={tw('self-center sm: w-full lg:w-1/3')}>
      <form
        id="Formular Contact"
        className={tw('flex flex-col justify-items-between w-full')}
      >
        <label className={form.label} htmlFor="nume">
          Numele tău îmi e poruncă
        </label>
        <input className={form.input} type="text" name="nume" />
        <label className={form.label} htmlFor="email">
          Email
        </label>
        <input className={form.input} type="email" name="email" />
        <label className={form.label} htmlFor="serviciu">
          Alege-ți serviciul
        </label>
        <select
          className={form.select}
          name="serviciu"
          id="serviciu"
          form="Formular Contact"
        >
          <option value="Social Media">Social Media</option>
          <option value="Copywriting">CopyWriting</option>
          <option value="Design Grafic">Design Grafic</option>
        </select>
        <label className={form.label} htmlFor="buget">
          Buget
        </label>
        <input className={form.input} type="number" name="buget" />
        <label className={form.label} htmlFor="buget">
          Spune-mi ce-ți dorești
        </label>
        <textArea className={form.textArea} />
        <button className={form.button} type='submit'>TRIMITE</button>
      </form>
    </div>
  );
}

export default Form