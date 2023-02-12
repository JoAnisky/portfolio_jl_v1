import * as yup from "yup";

export const formSchema = yup
    .object().shape({
        firstname: yup
        .string()
        .min(2, "La longueur minimale est de 2 caractères")
        .max(50)
        .required("Champ nom requis"),
        lastname: yup
        .string()
        .min(2, "La longueur minimale est de 2 caractères")
        .max(50)
        .required("Champ prénom requis"),
        email: yup
        .string()
        .email("Format d'email incorrect")
        .max(255)
        .required("Merci d'entrer une adresse mail"),
        message: yup
        .string()
        .required("Veuillez entrer votre message"),
    });