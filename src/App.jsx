import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Footer, Sidebar } from './components';
import { Dashboard, Transactions, Accounts, Investments, CreditCards, Loans, Services, Privileges, Settings } from './pages';
import { useStateContext } from './contexts/ContextProvider';

function App() {

  const { activeMenu } = useStateContext();

  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            <div>
              <Routes>
                <Route path="/" element={(<Dashboard />)} />
                <Route path="/dashboard" element={(<Dashboard />)} />
                <Route path="/transactions" element={<Transactions />} />
                <Route path="/employees" element={<Accounts />} />
                <Route path="/investments" element={<Investments />} />
                <Route path="/creditcards" element={<CreditCards />} />
                <Route path="/loans" element={<Loans />} />
                <Route path="/services" element={<Services/>} />
                <Route path="/privileges" element={<Privileges />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
