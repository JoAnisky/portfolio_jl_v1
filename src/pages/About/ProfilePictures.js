import React from 'react';

const ProfilePicture = () => {

    const importAll = (requireContext) => {
        return requireContext.keys().map(requireContext);
    }

    const images = importAll(require.context('../../assets/img/profile', false, /\.(png|jpe?g|svg|webp)$/));
    let mediaSizes = ["(min-width: 1279px)","(max-width:767px)","(min-width: 768px) and (max-width:1279px)"];

    return (
        <picture>
            {
                images.map((image, index) => {
                    return (
                        <source
                            key={index}
                            type="image/webp"
                            srcSet={image}
                            media={mediaSizes.shift()}
                        />
                    )
                })

            }     
            <img loading='lazy' src={images[0]} alt="Jonathan Loré"/>                        
        </picture>
    );
}

export default ProfilePicture;