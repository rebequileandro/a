import { formatDate } from '../../../utils/format-date';
export const searchActivitie = (search, setSearch, activities) => {
    if (typeof search === 'string') {
        const result = activities.filter((element) => {
            if (
                element.nameParty.toLowerCase().includes(search.toLowerCase()) ||
                element.total.toLowerCase().includes(search.toLowerCase()) ||
                formatDate(element.date).toLowerCase().includes(search.toLowerCase())
            )
                return element;
        });
        if (setSearch) {
            result.length
                ? setSearch(search.length ? result : [])
                : setSearch(
                    search.length ? 'no se encontraron resultados para su búsqueda : (' : []
                );
        }
        return result
    } else {
        return false
    }
};