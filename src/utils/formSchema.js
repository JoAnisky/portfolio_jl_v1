import * as yup from "yup";

const firstLastnameMinMessage = "La longueur minimale est de 2 caractères";
const firstLastnameRegex = /^(?!^[0-9]+$).+$/;
const firstLastnameMessage = "Pas uniquement des chiffres dans ce champ";

export const formSchema = yup
    .object().shape({
        firstname: yup.string()
        .required("Champ nom requis")
        .min(2, firstLastnameMinMessage)
        .matches(firstLastnameRegex, firstLastnameMessage)
        .max(50),
        lastname: yup.string()
        .required("Champ prénom requis")
        .min(2, firstLastnameMinMessage)
        .matches(firstLastnameRegex, firstLastnameMessage)
        .max(50),
        email: yup.string()
        .required("Merci d'entrer une adresse mail").matches(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, "Format d'email incorrect")
        .email()
        .max(255)
,
        message: yup
        .string()
        .required("Veuillez entrer votre message")
        .min(10, "Le message doit contenir au moins 10 caractères"),
    });