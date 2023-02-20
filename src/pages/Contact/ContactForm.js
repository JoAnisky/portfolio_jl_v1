import {useForm} from "react-hook-form";
import {useEffect, useState} from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { formSchema } from "../../utils/formSchema";
import LogoValid from "../../components/LogoValid";

const API_PATH = "http://localhost:8000/PHP/contact.php";

const ContactForm = () => {

    const {register, handleSubmit, formState : {errors, isValid, isSubmitting, isSubmitSuccessful}, setError, reset} = useForm({
        mode: "onBlur",
        resolver: yupResolver(formSchema),
        defaultValues : {
            firstname : "dsqds",
            lastname: "dqsdqsd",
            email: "dqsdsqdqs@dsdqsd.com",
            message: "dsqdqsdsqdqs"
        }
    });
    const [userMessage, setUserMessage]  = useState('Prenons le temps de faire connaissance !');

    const sendPost = async (data) => {
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
            await sendPost(data)
            .then((response) => {
                if (response.responseServer === true && response.responseMail === true){
                    return setUserMessage(response.responseMessage)
                }
            });
            reset();
        }
    }
    const handleChange = () => {
        let textarea = document.querySelector("#textarea");
        textarea.addEventListener('input', autoResize, false);
        function autoResize() {
            this.style.height = 'auto';
            this.style.height = this.scrollHeight + 'px';
        }
    }
    useEffect(() => {
        handleChange();
    }, [])
    return (
        <>

            <div className="contact-form-container">
                <div className='contact-form__user-message'>
                    {isSubmitSuccessful &&<LogoValid/>}
                    <p>{userMessage}</p>
                </div>
                <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                    <div className='contact-form__fields'>
                        <label htmlFor="firstname">Nom</label>

                        <input className={errors.firstname && "error"} type='text' name="firstname" placeholder="Smith"
                        {...register("firstname")}
                        />
                        <p className='errorMessage'>{errors.firstname?.message}</p>
                    </div>
                    <div className='contact-form__fields'>
                        <label htmlFor="lastname">Prénom</label>
                        <input className={errors.lastname && "error"} type='text' name="lastname" placeholder="Stan"
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
                        <textarea id="textarea" onChange={handleChange} className={errors.message && "error"} type='text' name="message" placeholder="Dites-moi tout"
                        {...register("message")}
                        />
                        <p className='errorMessage'>{errors.message?.message}</p>
                    </div>
                    <div className='contact-form__fields'>
                        <button className="btn-submit" disabled={isSubmitting}>
                            {isSubmitting && <span className="btn__loader"></span>}
                            Envoyer
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ContactForm