"use client";
import styles from "./Form.module.css";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { SuccessMsg } from "./SuccessMsg/SuccessMsg";
import { useEffect } from "react";
type FormData = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

const schema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
  phone: yup
    .string()
    .required("Telefone é obrigatório")
    .matches(/^\d{8,15}$/, "Telefone inválido"),
  email: yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
  message: yup.string().required("Mensagem é obrigatória"),
});
export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful, isSubmitted },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    console.log("Enviando...", data);

    await new Promise((resolve) => setTimeout(resolve, 1000));
  };
  return (
    <div className={styles.formContainer}>
      {!isSubmitted && (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <h3>Fale agora mesmo com a Liva</h3>

          <input type="text" placeholder="Nome" {...register("name")} />
          {errors.name && (
            <span className={styles.error}>{errors.name.message}</span>
          )}

          <input type="tel" placeholder="Telefone" {...register("phone")} />
          {errors.phone && (
            <span className={styles.error}>{errors.phone.message}</span>
          )}

          <input type="email" placeholder="E-mail" {...register("email")} />
          {errors.email && (
            <span className={styles.error}>{errors.email.message}</span>
          )}

          <textarea placeholder="Mensagem" {...register("message")} />
          {errors.message && (
            <span className={styles.error}>{errors.message.message}</span>
          )}

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Enviando..." : "ENVIAR MENSAGEM"}
          </button>
        </form>
      )}
      {isSubmitted && <SuccessMsg />}
    </div>
  );
};
