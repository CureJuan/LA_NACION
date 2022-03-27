import React from "react";
import { useForm } from "../../hooks/useForm";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  comments: "",
};

const valitacionsForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  let regexComments = /^.{1,255}$/;

  if (!form.name.trim()) {
    errors.name = "El campo 'Nombre' es requerido";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "El Nombre solo acepta letras y espacios";
  } else if (!form.email.trim()) {
    errors.email = "El campo 'Email' es requerido";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El e-mail es incorrecto ";
  } else if (!form.subject.trim()) {
    errors.subject = "El campo 'Asunto' es requerido";
  } else if (!form.comments.trim()) {
    errors.comments = "El campo 'Comentarios' es requerido";
  } else if (!regexComments.test(form.comments.trim())) {
    errors.comments = "El comentario no debe exceder los 255 caracteres";
  }

  return errors;
};

let styles = {
  display: "inline-block",
  fontWeight: "bold",
  color: "#dc3545",
};

const ContactForm = () => {
  const { form, errors, handleChange, handleBlur, handleSubmit } = useForm(
    initialForm,
    valitacionsForm
  );

  return (
    <div>
      <h2 className="h2_form">Fomulario de suscripción</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Escribe tu Nombre"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.name}
          required
        />
        {errors.name && <p style={styles}>{errors.name}</p>}
        <input
          type="text"
          name="email"
          placeholder="Escribe su mail"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.email}
          required
        />
        {errors.email && <p style={styles}>{errors.email}</p>}
        <input
          type="text"
          name="subject"
          placeholder="Asunto a tratar"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.subject}
          required
        />
        {errors.subject && <p style={styles}>{errors.subject}</p>}
        <textarea
          className="area"
          name="comments"
          cols="50"
          rows="5"
          placeholder="Escribe tus comentarios"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.comments}
          required
        />
        {errors.comments && <p style={styles}>{errors.comments}</p>}
        <input className="enviar" type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default ContactForm;
