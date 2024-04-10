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

export const deleteAllCookies = () => {
    document.cookie.replace(
        /(?<=^|;).+?(?=\=|;|$)/g,
        name => location.hostname
            .split(/\.(?=[^\.]+\.)/)
            .reduceRight((acc, val, i, arr) => i ? arr[i] = '.' + val + acc : (arr[i] = '', arr), '')
            .map(domain => document.cookie = `${name}=;max-age=0;path=/;domain=${domain}`)
    );
}