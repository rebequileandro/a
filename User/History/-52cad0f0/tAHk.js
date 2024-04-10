const routes = {
    partyUser: {
        home: "/",
        browseEvents: "/browse-events",
        marketplace: "/marketplace",
        marketplaceSection: "/marketplace-section",
        activities: "/activities",
        cart: "/cart",
        checkout: "/checkout",
        order: "/order",
        test: "/test"
    },
    owner: {
        home: "/",
        activities: "/activities",
        statistics: "/statistics",
        statisticsHistory: "/statistics-history",
        settingsSelection: "/settings-selection",
        clubs: "/settings/clubs",
        club: "/settings/club",
        newClub: "/settings/new-club",
        allBartenders: "/settings/bartendes",
        bartender: "/settings/bartender",
        newBartender: "/settings/bartender/new",
        allCashiers: "/settings/cashiers",
        cashier: "/settings/cashier",
        newCashier: "/settings/cashier/new",
        unitManager: "/settings/unit-manager",
        menu: "/settings/menu/",
        cash: "/settings/cash/",
        inventory: "/settings/inventory"
    },
    bartender: {
        home: "/",
        scanner: "/scanner",
    },
    cashier: {
        home: "/",
    },
    global: {
        login: "/",
        settings: "/settings",
        account: "/account",
        personalInformation: "/personal-information",
        mailAndNumber: "/mail-and-phone-number",
        changePassword: "/change-password",
        support: "/support",
        privacyPolicies: "/privacy-policies",
        termsAndConditions: "/terms-and-conditions",
        help: "/help",
        indications: "/help/indications",
        contact: "/help/contact",
        notifications: "/notifications"
    },
}
export default routes;