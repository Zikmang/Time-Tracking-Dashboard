import { DashboardLayout } from './components/dashboard/DashBoardLayout';
import { useTheme } from './components/hooks/useTheme';
import { Sun, Moon } from 'lucide-react'; 

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen font-rubik flex flex-col justify-center items-center py-10 md:py-0 transition-colors duration-300">
      
      {/* THEME TOGGLE BUTTON */}
      <button 
        onClick={toggleTheme}
        className="fixed top-6 right-6 p-3 rounded-full shadow-lg z-50 
                   bg-white text-slate-900 
                   dark:bg-slate-800 dark:text-yellow-400
                   hover:scale-110 transition-transform"
        aria-label="Toggle Theme"
      >
        {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
      </button>

      <DashboardLayout />
    </div>
  );
}

export default App;