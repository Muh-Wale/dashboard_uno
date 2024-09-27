// store/slices/uiSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    activeMenu: true,
    clickedText: '',
    isClicked: false,
    activeSearch: true,
    activeNav: false,
    activeContent: null,
    isOn: false,
    isDigitalCurrencyChecked: true,
    isMerchantOrderChecked: true,
    isRecommendationChecked: true,
    sorting: [],
    filtering: '',
    isMenu: false,
    selectedLink: localStorage.getItem('selectedLink') || '',
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setActiveMenu: (state, action) => {
        state.activeMenu = action.payload;
        },
        setClickedText: (state, action) => {
        state.clickedText = action.payload;
        },
        setIsClicked: (state, action) => {
        state.isClicked = action.payload;
        },
        setActiveNav: (state, action) => {
            state.activeNav = action.payload;
        },
        setActiveSearch: (state, action) => {
        state.activeSearch = action.payload;
        },
        setActiveContent: (state, action) => {
        state.activeContent = action.payload;
        },
        setIsOn: (state, action) => {
        state.isOn = action.payload;
        },
        setIsDigitalCurrencyChecked: (state, action) => {
        state.isDigitalCurrencyChecked = action.payload;
        },
        setIsMerchantOrderChecked: (state, action) => {
        state.isMerchantOrderChecked = action.payload;
        },
        setIsRecommendationChecked: (state, action) => {
        state.isRecommendationChecked = action.payload;
        },
        setSorting: (state, action) => {
        state.sorting = action.payload;
        },
        setFiltering: (state, action) => {
        state.filtering = action.payload;
        },
        setIsMenu: (state, action) => {
        state.isMenu = action.payload;
        },
        setSelectedLink: (state, action) => {
        state.selectedLink = action.payload;
        localStorage.setItem('selectedLink', action.payload);
        }
    },
});

export const {
    setActiveMenu,
    setActiveNav,
    setClickedText,
    setIsClicked,
    setActiveSearch,
    setActiveContent,
    setIsOn,
    setIsDigitalCurrencyChecked,
    setIsMerchantOrderChecked,
    setIsRecommendationChecked,
    setSorting,
    setFiltering,
    setIsMenu,
    setSelectedLink,
} = uiSlice.actions;

export const scrollToTop = () => {
    window.scrollTo(0, 0);
};

export default uiSlice.reducer;
