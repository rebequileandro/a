import { formatDate } from '../../../utils/format-date';
export const searchActivitie = (e, setSearch) => {
    const result = activities.filter((element) => {
        if (
            element.namePartyPayment.toLowerCase().includes(e.toLowerCase()) ||
            element.total.toLowerCase().includes(e.toLowerCase()) ||
            formatDate(element.created).toLowerCase().includes(e.toLowerCase())
        )
            return element;
    });
    result.length
        ? setSearch(e.length ? result : [])
        : setSearch(
            e.length ? 'no se encontraron resultados para su búsqueda : (' : []
        );
};