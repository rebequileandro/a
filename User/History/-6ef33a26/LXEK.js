import axios from "axios";

async function hubSpotForm(input) {
    const {
        REACT_APP_HUBSPOT_PORTAL_ID,
        REACT_APP_HUBSPOT_FORM_GUID,
    } = process.env;
    await axios.post(
        `https://api.hsforms.com/submissions/v3/integration/submit/${REACT_APP_HUBSPOT_PORTAL_ID}/${REACT_APP_HUBSPOT_FORM_GUID}`,
        {
            fields: [
                {
                    name: "firstname",
                    value: input.name,
                },
                {
                    name: "lastname",
                    value: input.lastname,
                },
                {
                    name: "country",
                    value: input.country,
                },
                {
                    name: "city",
                    value: input.city,
                },
                {
                    name: "jobtitle",
                    value: input.cargo,
                },
                {
                    name: "email",
                    value: input.email,
                },
                {
                    name: "mobilephone",
                    value: `${input.prefix}${input.number}`,
                },
                {
                    name: "0-2/name",
                    value: input.company,
                },
                {
                    name: "0-2/description",
                    value: input.description,
                },
            ],
        }
    );
}
export default hubSpotForm;