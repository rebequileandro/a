//============== index routes ==============//
import OrganizerHome from "./organizer/OrganizerHome/OrganizerHome";
import Home from './partyUser/Home/Home'
import { Orders } from './bartender/Orders/Orders'
import { Cashier } from './cashier/Home/Cashier'
import { Marketplace } from "./partyUser/Marketplace/Marketplace";
import { SectionDetails } from "../components/global/Categories/SectionDetails";
import { Cart } from "./partyUser/Cart/Cart";
import { Checkout } from "./partyUser/Checkout/Checkout";
import Settings from "./global/Settings/Settings";
import MyAccount from "./global/MyAccount/MyAccount";
import MyActivities from "./partyUser/MyActivities/MyActivities";
import { QrCash } from "./partyUser/Checkout/QrCash/QrCash";
import OrderDetails from "./partyUser/OrderDetails/OrderDetails";
import Help from "./partyUser/Help/Help";
import ComoPedir from "./partyUser/Help/ComoPedir/ComoPedir";
import ContactUs from "./partyUser/Help/ContactUs/ContactUs";
import { OrganizerActivities } from "./organizer/OrganizerActivities/OrganizerActivities";
import SelectStatistics from "./organizer/Statistics/SelectStatistics/SelectStatistics";
import { Statistics } from "./organizer/Statistics/Statistics";
import { OrganizerSettings } from "./organizer/OrganizerSettings/OrganizerSettings";
import Clubs from "./organizer/OrganizerSettings/Clubs/Clubs";
import Club from './organizer/OrganizerSettings/Club/Club'
import { AddParty } from "./organizer/AddParty/AddParty";
import StatisticsDetails from "./organizer/Statistics/StatisticsDetails/StatisticsDetails";
import { EditRole } from "./organizer/OrganizerSettings/Roles/EditRole";
import { Roles } from "./organizer/OrganizerSettings/Roles/Roles";
import { OrganizerMenu } from "./organizer/OrganizerMenu/OrganizerMenu";
import { DetailsCategories } from "./organizer/OrganizerMenu/Categories/DetailsCategories";

export const routes = {
    //============== party user routes ==============//
    partyUser: {
        home: {
            url: '/party-user/home',
            element: <Home/>
        },
        marketplace: {
            url: '/party-user/marketplace',
            element: <Marketplace/>
        },
        marketplaceSection: {
            url: '/party-user/marketplace-section',
            element: <SectionDetails/>
        },
        cart: {
            url: '/party-user/cart',
            element: <Cart/>
        },
        checkout: {
            url: '/party-user/checkout',
            element: <Checkout/>
        },
        orderCash: {
            url: '/party-user/checkout/:id/:order',
            element: <QrCash/>
        },
        settings: {
            url: '/party-user/settings',
            element: <Settings/>
        },
        accounts: {
            url: '/party-user/account',
            element: <MyAccount/>
        },
        activities: {
            url: '/party-user/activities',
            element: <MyActivities/>
        },
        order: {
            url: '/party-user/order',
            element: <OrderDetails/>
        },
        orderDetails: {
            url: '/party-user/order/:id',
            element: <OrderDetails/>
        },
        help: {
            url: '/party-user/help',
            element: <Help/>
        },
        indications: {
            url: '/party-user/help/indications',
            element: <ComoPedir/>
        },
        contactUs: {
            url: '/party-user/help/contact-us',
            element: <ContactUs/>
        }
    },
    //============== organizer user routes ==============//
    ouwner: {
        home: {
            url: '/ouwner/home',
            element: <OrganizerHome/>
        },
        activities: {
            url: '/ouwner/activities',
            element: <OrganizerActivities/>
        },
        statisticts: {
            url: '/ouwner/statistics',
            element: <SelectStatistics/>
        },
        statistictsDetails: {
            url: '/ouwner/statistics/:id',
            element: <Statistics/>
        },
        statisticsHistory: {
            url: "/ouwner/statistics-history/:name/:type",
            element: <StatisticsDetails/>
        },
        settings: {
            url: '/ouwner/settings',
            element: <OrganizerSettings/>
        },
        settingsAccount: {
            url: "/ouwner/settings-account",
            element: <Settings/>
        },
        profile: {
            url: "/ouwner/settings-profile",
            element: <MyAccount/>
        },
        allClubs: {
            url: '/ouwner/clubs',
            element: <Clubs/>
        },
        club: {
            url: '/ouwner/club/:id',
            element: <Club/>
        },
        addClub: {
            url: '/ouwner/new-club',
            element: <AddParty/>
        },
        allBartenders: {
            url: '/ouwner/bartendes',
            element: <Roles role={"bartender"}/>
        },
        bartender: {
            url: '/ouwner/bartender/:id',
            element: <EditRole role={"bartender"}/>
        },
        newBartender: {
            url: '/ouwner/bartender/new',
            element: <EditRole role={"newBartender"}/>
        },
        allCashiers: {
            url: '/ouwner/cashiers',
            element: <Roles role={"cashier"}/>
        },
        cashier: {
            url: '/ouwner/cashier/:id',
            element: <EditRole role={"cashier"}/>
        },
        newCashier: {
            url: '/ouwner/cashier/new',
            element: <EditRole role={"newCashier"}/>
        },
        unitManager: {
            url: '/ouwner/unit-manager',
            element: <EditRole role={"unitManager"}/>
        },
        menu: {
            url: '/menu/:id',
            element: <OrganizerMenu/>
        },
        menuDetails: {
            url: '/menu/:id/details',
            element: <DetailsCategories/>
        }
    },








    unitManager: {
        home: {
            url: '/organizer-home',
            element: <OrganizerHome />
        }
    },
    bartender: {
        home: {
            url: '/bartender-home',
            element: <Orders />
        }
    },

    cashier: {
        home: {
            url: '/cashier-home',
            element: <Cashier />
        }
    },
    global: {

    },
};
