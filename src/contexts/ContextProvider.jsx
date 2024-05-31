import PropTypes from 'prop-types';
import { createContext, useContext, useState } from 'react';

const StateContext = createContext();


export const ContextProvider = ({ children }) => {
    const [screenSize, setScreenSize] = useState(undefined);
    const [activeMenu, setActiveMenu] = useState(true);
    const [clickedText, setClickedText] = useState('');
    const [isClicked, setIsClicked] = useState(false);
    const [activeSearch, setActiveSearch] = useState(true);
    const [activeNav, setActiveNav] = useState(false);
    const [activeContent, setActiveContent] = useState(null);
    const [isDigitalCurrencyChecked, setIsDigitalCurrencyChecked] = useState(true);
    const [isMerchantOrderChecked, setIsMerchantOrderChecked] = useState(true);
    const [isRecommendationChecked, setIsRecommendationChecked] = useState(true);
    const [isOn, setIsOn] = useState(false);
    const isLargeScreen = window.innerWidth > 414;
    const [sorting, setSorting] = useState([]);
    const [filtering, setFiltering] = useState('');
    const [isMediumScreen, setIsMediumScreen] = useState(window.innerWidth >= 768 && window.innerWidth < 1024);
    const [selectedLink, setSelectedLink] = useState('Dashboard');



    return (
        // eslint-disable-next-line react/jsx-no-constructed-context-values
        <StateContext.Provider value={{ activeMenu, setActiveMenu, screenSize, setScreenSize, clickedText, setClickedText, isClicked, setIsClicked, activeSearch, setActiveSearch, activeContent, setActiveContent, isOn, setIsOn, isDigitalCurrencyChecked, setIsDigitalCurrencyChecked, isMerchantOrderChecked, setIsMerchantOrderChecked, isRecommendationChecked, setIsRecommendationChecked, activeNav, setActiveNav, isLargeScreen, filtering, setFiltering, sorting, setSorting, isMediumScreen, setIsMediumScreen, selectedLink, setSelectedLink }}>
        {children}
        </StateContext.Provider>
    );

};

ContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const useStateContext = () => useContext(StateContext);
