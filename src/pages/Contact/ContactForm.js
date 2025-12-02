import {useForm} from "react-hook-form";
import {useEffect, useRef, useState} from 'react';
import {yupResolver} from '@hookform/resolvers/yup';
import {formSchema} from "../../utils/formSchema";
import LogoValid from "../../components/LogoValid";
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const CONTACT_FORM_SCRIPT = "https://api.jonathanlore.fr/contact.php";

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
            const request = await fetch(CONTACT_FORM_SCRIPT, {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: data.firstname + ' ' + data.lastname,  // Combiner nom + prénom
                    email: data.email,
                    message: data.message
                }),
            });

            // Retourner la réponse peu importe le status code
            // (elle contient soit 'message' soit 'error'/'errors')
            return await request.json();
        } catch (e) {
            throw e;
        }
    };

    const onSubmit = async data => {
        if (isValid) {
            try {
                const response = await sendPost(data);

                // Vérifier si la réponse contient un message (succès)
                if (response.message) {
                    setSuccessful(true);
                    reset();
                    setUserMessage(response.message);
                    return;
                }

                // Vérifier s'il y a des erreurs
                if (response.error) {
                    setUserMessage(response.error);
                    return;
                }

                if (response.errors && Array.isArray(response.errors)) {
                    setUserMessage(response.errors[0]);
                    return;
                }

                setUserMessage("Erreur inconnue");
            } catch (error) {
                setUserMessage(error.message || "Erreur du serveur... Réessayez ultérieurement");
            }
        }
    };

    useEffect(() => {
        if (textareaRef.current) {
            const textarea = textareaRef.current;
            textarea.style.height = 'auto';
            textarea.style.height = `${textarea.scrollHeight}px`;
            const handleInput = () => {
                textarea.style.height = 'auto';
                textarea.style.height = `${textarea.scrollHeight}px`;
            };
            textarea.addEventListener('input', handleInput);
            return () => textarea.removeEventListener('input', handleInput);
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