import {useForm} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { formSchema } from "../../utils/formSchema";

const API_PATH = "http://localhost:8000/contact.php";

const ContactForm = () => {

    const {register, handleSubmit, formState : {errors, isSubmitSuccessful, isValid}, setError, reset} = useForm({
        mode: "onTouched",
        resolver: yupResolver(formSchema),
        defaultValues : {
            firstname : "",
            lastname: "",
            email: "",
            message: ""
        }
    });

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
                message: "Quelquechose sest mal passé sur la requete"
            })
            console.log(errors);
        }
    }

    const onSubmit = data => {
        console.log("Formulaire valide :", isValid)
        if (isValid){
            sendPost(data).then(response => console.log(response));
            reset();
        }
    }
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
                        {...register("firstname")}
                        />
                        <p className='errorMessage'>{errors.firstname?.message}</p>
                    </div>
                    <div className='contact-form__fields'>
                        <label htmlFor="lastname">Prénom</label>
                        <input type='text' name="lastname" placeholder="Votre prénom"
                        {...register("lastname")}
                        />
                        <p className='errorMessage'>{errors.lastname?.message}</p>
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
                        <input type="submit" value='envoyer' />                        
                    </div>
                </form>
            </div>
        </>
    )
}

export default ContactForm