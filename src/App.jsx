import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';
import Accounts from './pages/Accounts';
import Investment from './pages/Investment';
import CreditCards from './pages/CreditCards';
import Loans from './pages/Loans';
import Services from './pages/Services';
import Privileges from './pages/Privileges';
import Settings from './pages/Settings';
import { useStateContext } from './contexts/ContextProvider';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

function App() {
  const { activeMenu, selectedLink, setSelectedLink } = useStateContext();

  return (
    <div className='max-w-[1600px] mx-auto'>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white z-[100] shadow-2xl">
              <Sidebar setSelectedLink={setSelectedLink} />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar setSelectedLink={setSelectedLink} />
            </div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  bg-[#E5E5E5]'
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 bg-[#E5E5E5]'
            }
          >
            <div className={`${activeMenu ? 'fixed md:static ' : 'fixed'} bg-main-bg dark:bg-main-dark-bg navbar z-50 w-full`}>
              <Navbar selectedLink={selectedLink} />
            </div>
            <div>
              <Routes>
                <Route path="/" element={(<Dashboard />)} />
                <Route path="/dashboard" element={(<Dashboard />)} />
                <Route path="/transactions" element={<Transactions />} />
                <Route path="/accounts" element={<Accounts />} />
                <Route path="/investments" element={<Investment />} />
                <Route path="/creditcards" element={<CreditCards />} />
                <Route path="/loans" element={<Loans />} />
                <Route path="/services" element={<Services />} />
                <Route path="/privileges" element={<Privileges />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
