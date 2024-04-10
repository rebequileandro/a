//-------example-:)------//
//const token = getCookie("__token)
//token ----------> "jafna2li388Tdanmm2jjwYund7m4772mcls"
const getCookie = (name) => {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
export default getCookie;