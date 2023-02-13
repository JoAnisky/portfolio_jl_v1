import * as yup from "yup";

export const formSchema = yup
    .object().shape({
        firstname: yup.string()
        .required("Champ nom requis")
        .min(2, "La longueur minimale est de 2 caractères")
        .matches(/^[aA-zZ\s]+$/, "Pas de chiffres dans ce champ")
        .max(50),
        lastname: yup.string()
        .required("Champ prénom requis")
        .min(2, "La longueur minimale est de 2 caractères")
        .matches(/^[aA-zZ\s]+$/, "Pas de chiffres dans ce champ")
        .max(50),
        email: yup.string()
        .required("Merci d'entrer une adresse mail").matches(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, "Format d'email incorrect")
        .email()
        .max(255)
,
        message: yup
        .string()
        .required("Veuillez entrer votre message"),
    });