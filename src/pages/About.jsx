import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const About = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <h1>A propos</h1>
            <br/>
            <p className='presentation'>
                Petit exercice en React avec un appel à API afin d'afficher le drapeau de pays ainsi que quelques informations supplémentaires.
                Mise en place de fonctionnalités pour l'utilisateur. Possibilité de faire varier l'affichage du nombre de pays, de filtrer les pays par continent.
                Utilisation de méthodes filter, map, slice ainsi que sort afin d'afficher les pays par ordre décroissant du nombre de sa population.
                Application d'un CSS avec une mise en forme simple et classique.
            </p>
        </div>
    );
};

export default About;