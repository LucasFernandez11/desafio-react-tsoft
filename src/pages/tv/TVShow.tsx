import { FilmIcon, ClockIcon, TicketIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export default function TVShow() {
  const features = [
    {
      icon: <FilmIcon className="w-8 h-8 mb-4 text-orange-400 mx-auto" />,
      title: 'Series Exclusivas',
      description: 'Descubre contenido original y exclusivo que no encontrarás en ningún otro lugar.'
    },
    {
      icon: <ClockIcon className="w-8 h-8 mb-4 text-orange-400 mx-auto" />,
      title: 'Próximamente',
      description: 'Mantente al tanto de los próximos estrenos y temporadas de tus series favoritas.'
    },
    {
      icon: <TicketIcon className="w-8 h-8 mb-4 text-orange-400 mx-auto" />,
      title: 'Sin Spoilers',
      description: 'Disfruta de la experiencia completa sin spoilers ni anuncios molestos.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 to-zinc-800 text-white">
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col items-center justify-center min-h-[80vh]">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-orange-500/20 text-orange-400 animate-pulse">
            <FilmIcon className="w-10 h-10" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-500 animate-gradient bg-300% animate-bg">
            Próximamente
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Estamos trabajando en algo increíble para ti. ¡Muy pronto podrás explorar 
            todas tus series favoritas en un solo lugar!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-zinc-800/50 backdrop-blur-sm p-6 rounded-xl border border-zinc-700/50 hover:border-orange-500/30 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/10 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  {feature.icon}
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Link 
              to="/" 
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-orange-500 to-amber-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
              Volver al inicio
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
