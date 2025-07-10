import { useTheme } from '../../../context/ThemeContext';
import { SunIcon, MoonIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline';

const ThemeSelector = () => {
  const { theme, setTheme } = useTheme();

  const options = [
    { value: 'light', label: 'Claro', icon: SunIcon },
    { value: 'dark', label: 'Oscuro', icon: MoonIcon },
    { value: 'system', label: 'Sistema', icon: ComputerDesktopIcon },
  ];

  return (
    <div className="flex items-center gap-1">
      {options.map(({ value, label, icon: Icon }) => (
        <button
          key={value}
          onClick={() => setTheme(value as any)}
          className={`p-2 rounded-full border border-transparent transition-colors ${
            theme === value
              ? 'bg-orange-500/40 text-white'
              : 'text-gray-400 hover:bg-zinc-800'
          }`}
          title={`Tema: ${label}`}
        >
          <Icon className="h-5 w-5" />
        </button>
      ))}
    </div>
  );
};

export default ThemeSelector;