import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      {}
      <Outlet />
    </div>
  );
};

export default App;