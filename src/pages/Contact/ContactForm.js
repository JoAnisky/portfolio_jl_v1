import React from 'react'
import {useForm} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { formSchema } from "../../utils/formSchema";

export default function ContactForm() {
    const {
        register, 
        handleSubmit, 
        formState: { errors, isSubmitting, isValid , isSubmitSuccessful}
    } = useForm({
        mode: "onTouched",
        resolver: yupResolver(formSchema),
    });

    const onSubmit = data => console.log(data);

    console.log(isValid)
    console.log(errors)
    return (
        <>
            {isSubmitSuccessful && 
            <div className='contact-form__successful'>
                <p>Votre message a bien été envoyé, merci !</p>
            </div>
            }
            <div className="contact-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='contact-form__fields'>
                        <label htmlFor="firstname">Nom</label>
                        <input type='text' name="firstname" placeholder="Votre nom"
                        {...register("firstName")}
                        />
                        <p className='errorMessage'>{errors.firstName?.message}</p>
                    </div>
                    <div className='contact-form__fields'>
                        <label htmlFor="lastname">Prénom</label>
                        <input type='text' name="lastname" placeholder="Votre prénom"
                        {...register("lastName")}
                        />
                        <p className='errorMessage'>{errors.lastName?.message}</p>
                    </div>
                    <div className='contact-form__fields'>
                        <label htmlFor="email">Email</label>
                        <input type='text' name="email" placeholder="mail@example.com"
                        {...register("email")}
                        />
                        {errors.email && <p className="errorMessage">{errors.email.message}</p>}

                    </div>
                    <div className='contact-form__fields'>
                        <label htmlFor="message">Message</label>
                        <input type='text' name="message" placeholder="Entrez votre message"
                        {...register("message")}
                        />
                        <p className='errorMessage'>{errors.message?.message}</p>
                    </div>
                    <div className='contact-form__fields'>
                        <button disabled={isSubmitting || !isValid}>Envoyer</button>
                    </div>
                </form>
            </div>
        </>
    )
}
