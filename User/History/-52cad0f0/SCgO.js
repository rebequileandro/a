const routes = {
    partyUser: {
        home: "/",
        marketplace: "/marketplace",
        marketplaceSection: "/marketplace-section",
        activities: "/activities",
        cart: "/cart",
        checkout: "/checkout",
        order: "/order"
    },
    owner: {
        home: "/",
        activities: "/activities",
        statistics: "/statistics",
        statisticsHistory: "/statistics-history",
        settingsSelection: "settings-selection",
        settingsClubs: "settings/clubs",
        settingsClub: "settings/club",
        settingsNewClub: "settings/new-club",
        settingsAllBartenders: "/settings/bartendes",
        settingsBartender: "/settings/bartender",
        settingsNewBartender: "/settings/bartender/new",
        settingsAllCashiers: "/settings/cashiers",
        settingsCashier: "/settings/cashier",
        settingsNewCashier: "/settings/cashier/new",
        settingsUnitManager: "/settings/unit-manager",
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
        help: "/help",
        indications: "/help/indications",
        contact: "/help/contact"
    },
}
export default routes;