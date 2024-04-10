import { searchActivitie } from '../pages/partyUser/MyActivities/activities'

describe('Activities', () => {
    //INPUT SEARCH 
    const data = [{
        created: "2022-07-14T10:44:24.257Z",
        namePartyPayment: "Pruebas",
        total: "199"
    }]
    describe('Input Search', () => {
        const result = searchActivitie('pruebas', data)
        test('should return an array', () => {
            expect(Array.isArray(result)).toBeTruthy()
        });
        test('accept strings', () => {
            expect(searchActivitie(2, data)).toBeFalsy();
            expect(result.length ? true : false).toBeTruthy();
        });
    });
});