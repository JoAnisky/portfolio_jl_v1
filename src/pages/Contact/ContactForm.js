import {useForm} from "react-hook-form";
import {useEffect, useState, useRef} from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { formSchema } from "../../utils/formSchema";
import LogoValid from "../../components/LogoValid";
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const API_PATH = "https://api.jonathanlore.fr/index.php";

const ContactForm = () => {
    const [successful, setSuccessful] = useState(false);
    const [userMessage, setUserMessage] = useState("N'hésitez pas à prendre contact pour toute demande d'informations");
    const textareaRef = useRef(null);
    const targetRef = useRef(null);
    const isVisible = useIntersectionObserver({
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    }, targetRef);

    const {register, handleSubmit, formState : {errors, isValid, isSubmitting}, reset} = useForm({
        mode: "onBlur",
        resolver: yupResolver(formSchema)
    });

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
            setUserMessage(e.message)
        }
    }

    const onSubmit = async data => {

        if (isValid){
            try {
                const response = await sendPost(data)
                if (response.responseServer === true && response.responseMail === true){
                    setSuccessful(true);
                    reset();
                    return setUserMessage(response.responseMessage)
                }
            }catch (error) {
                setUserMessage("Erreur du serveur... Réessayez ultérieurement")
            }

        }
    }

    useEffect(() => {
        if (textareaRef.current) {
          const textarea = textareaRef.current;
          textarea.style.height = 'auto';
          textarea.style.height = `${textarea.scrollHeight}px`;
          textarea.addEventListener('input', () => {
            textarea.style.height = 'auto';
            textarea.style.height = `${textarea.scrollHeight}px`;
          }, false);
        }
      }, [textareaRef]);

    return (
        <>
            <div ref={targetRef} className={`contact-form-container ${!isVisible ? "" : "slidein-anim"}`}>
                <div className='contact-form__user-message'>
                    {successful && <LogoValid/>}
                    <p>{userMessage}</p>
                </div>
                <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                    <div className='contact-form__fields'>
                        <label htmlFor="firstname">Nom</label>

                        <input className={errors.firstname && "error"} type='text' id="firstname" name="firstname" placeholder="Smith"
                        {...register("firstname")}
                        />
                        <p className='errorMessage'>{errors.firstname?.message}</p>
                    </div>
                    <div className='contact-form__fields'>
                        <label htmlFor="lastname">Prénom</label>
                        <input className={errors.lastname && "error"} type='text' id="lastname" name="lastname" placeholder="Stan"
                        {...register("lastname")}
                        />
                        <p className='errorMessage'>{errors.lastname?.message}</p>
                    </div>
                    <div className='contact-form__fields'>
                        <label htmlFor="email">Email</label>
                        <input className={errors.email && "error"} type='text' id="email" name="email" placeholder="mail@example.com"
                        {...register("email")}
                        />
                        {errors.email && <p className="errorMessage">{errors.email.message}</p>}

                    </div>
                    <div className='contact-form__fields'>
                        <label htmlFor="message">Message</label>
                        <textarea ref={textareaRef} className={errors.message && "error"} id="message" name="message" placeholder="Dites-moi tout"
                         {...register("message")}/>
                        <p className='errorMessage'>{errors.message?.message}</p>
                    </div>
                    <div className='contact-form__fields'>
                        <button className="btn-submit" >
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