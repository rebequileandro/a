//-------example-:)------//
//const hour = formatDate("2022-08-09T16:47:49.051Z")
//hour ----------> "16:47"
export const formatHour = (date) => {
    return new Date(date).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
    })
}