import {useForm} from "react-hook-form";
import {useState} from "react";
import { yupResolver } from '@hookform/resolvers/yup';
import { formSchema } from "../../utils/formSchema";

const API_PATH = "http://localhost:8000/contact.php";

const ContactForm = () => {

    const {register, handleSubmit, setError,
        formState: { errors, isSubmitting, isValid, isSubmitSuccessful},
    } = useForm({
        mode: "onTouched",
        resolver: yupResolver(formSchema),
    });

    const [submitSuccessful, setSubmitSuccessful] = useState(false);

    async function postData (url='', data = {}) {
        try {
          const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          });
          if (response.ok) {
            setSubmitSuccessful(true);
            console.log(response)
          } else {
            throw new Error('Error sending form');
          }
        } catch (error) {
          setSubmitSuccessful(false);
          setError("service", {
            type: "service error",
            message: error.message
          });
        }
    }
    
    const [data, setData] = useState('');
    const onSubmit = (data, event) => {
        if (isValid){
            setData(data);
            postData(API_PATH, data);
        }    
        console.log("Formulaire valide : " +  isValid);
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
                        <input defaultValue={"John"} type='text' name="firstname" placeholder="Votre nom"
                        {...register("firstname")}
                        />
                        <p className='errorMessage'>{errors.firstName?.message}</p>
                    </div>
                    <div className='contact-form__fields'>
                        <label htmlFor="lastname">Prénom</label>
                        <input defaultValue={"Doowey"}type='text' name="lastname" placeholder="Votre prénom"
                        {...register("lastname")}
                        />
                        <p className='errorMessage'>{errors.lastName?.message}</p>
                    </div>
                    <div className='contact-form__fields'>
                        <label htmlFor="email">Email</label>
                        <input defaultValue={"mangerdesguepes@mail.com"}type='text' name="email" placeholder="mail@example.com"
                        {...register("email")}
                        />
                        {errors.email && <p className="errorMessage">{errors.email.message}</p>}

                    </div>
                    <div className='contact-form__fields'>
                        <label htmlFor="message">Message</label>
                        <input defaultValue={"je suis un super message"}type='text' name="message" placeholder="Entrez votre message"
                        {...register("message")}
                        />
                        <p className='errorMessage'>{errors.message?.message}</p>
                    </div>
                    <div className='contact-form__fields'>
                        <input type="submit" value='envoyer' disabled={isSubmitting || !isValid}/>                        
                    </div>
                </form>
                <p><strong>Data</strong> : {JSON.stringify(data)}</p>
            </div>
        </>
    )
}

export default ContactForm