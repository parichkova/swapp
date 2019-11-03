export const CookieHelper = {
    setCookie: (cookieName, value, expires) => {
        document.cookie = `${cookieName}=${value}; expires=${expires}`;
    },

    removeCookie: (cookieName) => {
        document.cookie = `${cookieName}=''`
    },

    getCookie: (cookieName) => {
        const value = "; " + document.cookie;
        const parts = value.split("; " + cookieName + "=");
        
        if (parts.length == 2) {
            return parts.pop().split(";").shift();
        } 
    }

}