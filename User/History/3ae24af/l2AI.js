import routes from '../../../models/routes.models';

export const menuOwner = [
    {
        title: 'Mi cuenta',
        slug: routes.global.account
    },
    {
        title: 'Mis locales',
        slug: routes.owner.clubs
    },
    {
        title: 'Términos y condiciones',
        slug: routes.global.termsAndConditions
    }
];
export const menuPartyUser = [
    {
        title: 'Mi cuenta',
        slug: routes.global.account
    },
    {
        title: 'Términos y condiciones',
        slug: routes.global.termsAndConditions
    },
    {
        title: 'Métodos de pago',
        slug: routes.partyUser.paymentMethodSettings
    }
];
export const menuTeam = [
    {
        title: 'Mi cuenta',
        slug: routes.global.account
    },
    {
        title: 'Términos y condiciones',
        slug: routes.global.termsAndConditions
    }
];