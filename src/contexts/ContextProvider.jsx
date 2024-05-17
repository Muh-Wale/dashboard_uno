import PropTypes from 'prop-types';
import { createContext, useContext, useState } from 'react';

const StateContext = createContext();


export const ContextProvider = ({ children }) => {
    const [screenSize, setScreenSize] = useState(undefined);
    const [activeMenu, setActiveMenu] = useState(true);
    const [clickedText, setClickedText] = useState('');
    const [isClicked, setIsClicked] = useState(false);
    const [activeSearch, setActiveSearch] = useState(true);
    const [activeNav, setActiveNav] = useState(true);
    const [activeContent, setActiveContent] = useState(null);
    const [isDigitalCurrencyChecked, setIsDigitalCurrencyChecked] = useState(true);
    const [isMerchantOrderChecked, setIsMerchantOrderChecked] = useState(true);
    const [isRecommendationChecked, setIsRecommendationChecked] = useState(true);
    const [isOn, setIsOn] = useState(false);



    return (
        // eslint-disable-next-line react/jsx-no-constructed-context-values
        <StateContext.Provider value={{ activeMenu, setActiveMenu, screenSize, setScreenSize, clickedText, setClickedText, isClicked, setIsClicked, activeSearch, setActiveSearch, activeContent, setActiveContent, isOn, setIsOn, isDigitalCurrencyChecked, setIsDigitalCurrencyChecked, isMerchantOrderChecked, setIsMerchantOrderChecked, isRecommendationChecked, setIsRecommendationChecked, activeNav, setActiveNav }}>
        {children}
        </StateContext.Provider>
    );

};

ContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const useStateContext = () => useContext(StateContext);
