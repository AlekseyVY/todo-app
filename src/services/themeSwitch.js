import {bgDesktopDark, bgDesktopLight, bgMobileDark, bgMobileLight, moonIcon, sunIcon} from "../assets";


export const themeSwitchHelper = (theme = true) => {
  const lightTheme = {
    bgImage: bgDesktopLight,
    bgMobile: bgMobileLight,
    switchIcon: moonIcon,
    bgColor: 'white',
    listBgColor: '#25273D',
    listTextColor: '#494C6B',
    secondaryText: '#9495A5',
    webkitShadow: '0px 0px 10px 2px rgba(0,0,0,1)',
    mozShadow: '0px 0px 10px 2px rgba(0,0,0,1)',
    boxShadow: '0px 0px 10px 2px rgba(0,0,0,1)',
  }

  const darkTheme  = {
    bgImage: bgDesktopDark,
    bgMobile: bgMobileDark,
    switchIcon: sunIcon,
    bgColor: 'black',
    listBgColor: '#FFF',
    listTextColor: '#C8CBE7',
    secondaryText: '#5B5E7E',
    webkitShadow: '0px 0px 10px 2px rgba(255,255,255,0.8)',
    mozShadow: '0px 0px 10px 2px rgba(255,255,255,0.8)',
    boxShadow: '0px 0px 10px 2px rgba(255,255,255,0.8)',
  }

  return theme ? lightTheme : darkTheme
}