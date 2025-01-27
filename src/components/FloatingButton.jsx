import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const FloatingButton = () => {
  return (
    <button
      className="fixed bottom-8 right-8 w-12 h-12 bg-[var(--color-secondary)] text-white rounded-full shadow-lg flex items-center justify-center z-50"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <FontAwesomeIcon icon={faArrowUp} className="text-lg" />
    </button>
  );
};

export default FloatingButton;