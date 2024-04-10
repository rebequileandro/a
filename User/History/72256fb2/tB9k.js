import routes from "../../../../models/routes.models"
export const menuClub = [
    {
        title: "Información del local",
        path: ''
    },
    {
        title: "Inventario",
        path: routes.owner.inventory
    },
    {
        title: "Menú",
        path: routes.owner.menu
    },
    {
        title: "Staff",
        path: ''
    },
    {
        title: "Caja",
        path: ''
    }
]