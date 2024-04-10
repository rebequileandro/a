//============== index routes ==============//
import OrganizerHome from "./owner/OrganizerHome/OrganizerHome";
import Home from './partyUser/Home/Home'
import SearchClub from "./partyUser/SearchClub/SearchClub";
import { Orders } from './bartender/Orders/Orders'
import { Cashier } from './cashier/Home/Cashier'
import  Marketplace  from "./partyUser/Marketplace/Marketplace";
import { SectionDetails } from "../components/global/Categories/SectionDetails";
import Cart from "./partyUser/Cart/Cart";
import Checkout from "./partyUser/Checkout/Checkout";
import Settings from "./global/Settings/Settings";
import MyAccount from "./global/MyAccount/MyAccount";
import MyActivities from "./partyUser/MyActivities/MyActivities";
import { QrCash } from "./partyUser/Checkout/QrCash/QrCash";
import OrderDetails from "./partyUser/OrderDetails/OrderDetails";
import Help from "./partyUser/Help/Help";
import ComoPedir from "./partyUser/Help/ComoPedir/ComoPedir";
import ContactUs from "./partyUser/Help/ContactUs/ContactUs";
import { OrganizerActivities } from "./owner/OrganizerActivities/OrganizerActivities";
import SelectStatistics from "./owner/Statistics/SelectStatistics/SelectStatistics";
import { Statistics } from "./owner/Statistics/Statistics";
import { OrganizerSettings } from "./owner/OrganizerSettings/OrganizerSettings";
import Clubs from "./owner/OrganizerSettings/Clubs/Clubs";
import Club from './owner/OrganizerSettings/Club/Club'
import StatisticsDetails from "./owner/Statistics/StatisticsDetails/StatisticsDetails";
import { EditRole } from "./owner/OrganizerSettings/Roles/EditRole";
import { Roles } from "./owner/OrganizerSettings/Roles/Roles";
import { OrganizerMenu } from "./owner/OrganizerMenu/OrganizerMenu";
import { DetailsCategories } from "./owner/OrganizerMenu/Categories/DetailsCategories";
import { Scanner } from "./bartender/Scanner/Scanner";

export const routes = [{

    //============== unit manager user routes ==============//

    // unitManager: {
    //     home: {
    //         url: '/manager/statistics',
    //         element: <Statistics/>
    //     },
    //     statisticsHistory: {
    //         url: "/manager/statistics-history/:name/:type",
    //         element: <StatisticsDetails/>
    //     },
    //     settingsAccount: {
    //         url: "/manager/settings-account",
    //         element: <Settings/>
    //     },
    //     profile: {
    //         url: "/manager/settings-profile",
    //         element: <MyAccount/>
    //     },
    //     club: {
    //         url: '/manager/club/:id',
    //         element: <Club/>
    //     },
    //     allBartenders: {
    //         url: '/manager/bartendes',
    //         element: <Roles role={"bartender"}/>
    //     },
    //     bartender: {
    //         url: '/manager/bartender/:id',
    //         element: <EditRole role={"bartender"}/>
    //     },
    //     newBartender: {
    //         url: '/manager/bartender/new',
    //         element: <EditRole role={"newBartender"}/>
    //     },
    //     allCashiers: {
    //         url: '/manager/cashiers',
    //         element: <Roles role={"cashier"}/>
    //     },
    //     cashier: {
    //         url: '/manager/cashier/:id',
    //         element: <EditRole role={"cashier"}/>
    //     },
    //     newCashier: {
    //         url: '/manager/cashier/new',
    //         element: <EditRole role={"newCashier"}/>
    //     },
    //     menu: {
    //         url: '/manager/:id',
    //         element: <OrganizerMenu/>
    //     },
    //     menuDetails: {
    //         url: '/manager/:id/details',
    //         element: <DetailsCategories/>
    //     }
    // },

    //============== bartender user routes ==============//

    bartender: {
        home: {
            url: '/bartender/home',
            element: <Orders />
        },
        scanner: {
            url: '/bartender/scanner',
            element: <Scanner />
        },
        settings: {
            url: '/bartender/settings',
            element: <Settings/>
        },
        account: {
            url: '/bartender/settings/account',
            element: <MyAccount/>
        },
        indications: {
            url: '/bartender/indications',
            element: <ComoPedir/>
        },
        contactUs: {
            url: '/bartender/contact-us',
            element: <ContactUs/>
        }
    },

    //============== cashier user routes ==============//

    cashier: {
        home: {
            url: '/cashier/home',
            element: <Cashier />
        },
        settings: {
            url: '/cashier/settings',
            element: <Settings/>
        },
        account: {
            url: '/cashier/settings/account',
            element: <MyAccount/>
        },
        indications: {
            url: '/cashier/indications',
            element: <ComoPedir/>
        },
        contactUs: {
            url: '/cashier/contact-us',
            element: <ContactUs/>
        }
    },
}]
