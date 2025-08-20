import React from 'react';

// ProfileCard component that accepts props: name, image, description
const ProfileCard = ({ name, image, description }) => {
    return (
        <div className="profile-card">
            <div className="profile-card__image-wrap">
                <img src={image} alt={`${name}'s avatar`} className="profile-card__image" />
            </div>
            <div className="profile-card__content">
                <h3 className="profile-card__name">{name}</h3>
                <p className="profile-card__description">{description}</p>
            </div>
        </div>
    );
};

export default ProfileCard;