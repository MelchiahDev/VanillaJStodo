export const mediaQueries = Object.freeze({
    Portrait: window.matchMedia('screen and (orientation: portrait'),
    XS: window.matchMedia('screen and (max-width: 366px)'),
    SM: window.matchMedia('screen and (max-width: 576px)'),
    MD: window.matchMedia('screen and (max-width: 767px)'),
    LG: window.matchMedia('screen and (min-width: 768px)'),
    XL: window.matchMedia('screen and (min-width: 991px)'),
    XXL: window.matchMedia('screen and (min-width: 1200px')
});