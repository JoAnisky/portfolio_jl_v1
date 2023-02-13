import {useForm} from "react-hook-form";
import {useState} from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { formSchema } from "../../utils/formSchema";

const API_PATH = "http://localhost:8000/contact.php";

const ContactForm = () => {

    const {register, handleSubmit, formState : {errors, isSubmitSuccessful, isValid, isSubmitting}, setError, reset} = useForm({
        mode: "onBlur",
        resolver: yupResolver(formSchema),
        defaultValues : {
            firstname : "",
            lastname: "",
            email: "",
            message: ""
        }
    });

    const [userMessage, setUserMessage]  = useState('');

    async function sendPost (data) {
        try {
            const request = await fetch(API_PATH, {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
              })
              if(request.ok === true){
                  return request.json();
              }
              throw new Error("impossible d'effectuer la requête");
        }catch(e){
            setError('serveur', {
                type: "server",
                message: "Un problème est survenu durant la requête :("
            })
            setUserMessage(errors.message)
        }
    }

    const onSubmit = async data => {
        if (isValid){ 
            errors.clearErrors();
            await sendPost(data)
            .then((response) => {
                if (response.responseServer === true && response.responseMail === true){
                    return setUserMessage(response.responseMessage)
                }
            });
            
            reset();
        }else{
            setUserMessage('le Formulaire est invalide ')
        }

    }
    return (
        <>
            {(isSubmitSuccessful || errors) && 
            <div className='contact-form__message'>
                <p>{userMessage}</p>
            </div>
            }
            <div className="contact-form-container">
                <form className="contact-form"onSubmit={handleSubmit(onSubmit)}>
                    <div className='contact-form__fields'>
                        <label htmlFor="firstname">Nom</label>
                        
                        <input className={errors.firstname && "error"} type='text' name="firstname" placeholder="Votre nom"
                        {...register("firstname")}
                        />
                        <p className='errorMessage'>{errors.firstname?.message}</p>
                    </div>
                    <div className='contact-form__fields'>
                        <label htmlFor="lastname">Prénom</label>
                        <input className={errors.lastname && "error"} type='text' name="lastname" placeholder="Votre prénom"
                        {...register("lastname")}
                        />
                        <p className='errorMessage'>{errors.lastname?.message}</p>
                    </div>
                    <div className='contact-form__fields'>
                        <label htmlFor="email">Email</label>
                        <input className={errors.email && "error"} type='text' name="email" placeholder="mail@example.com"
                        {...register("email")}
                        />
                        {errors.email && <p className="errorMessage">{errors.email.message}</p>}

                    </div>
                    <div className='contact-form__fields'>
                        <label htmlFor="message">Message</label>
                        <input className={errors.message && "error"} type='text' name="message" placeholder="Entrez votre message"
                        {...register("message")}
                        />
                        <p className='errorMessage'>{errors.message?.message}</p>
                    </div>
                    <div className='contact-form__fields'>
                        <button className="btn" disabled={isSubmitting}>
                            {isSubmitting && <span className="btn__loader"></span>}
                            <span className="btn__loader"></span>
                            Envoyer
                        </button>                        
                    </div>
                </form>
            </div>
        </>
    )
}

export default ContactForm