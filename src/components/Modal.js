import { useEffect, useState } from 'react';
import Close from '../components/times-solid.svg';

const Modal = ({ show, close, title, children }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Render nothing on the server-side
  }

  return (
    <div className={`modalContainer ${show ? 'show' : ''} `} onClick={() => close()}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <header className="modal_header">
          <h2 className="modal_header-title">{title}</h2>
          <button className="close" onClick={() => close()}>
            <img src={Close} alt="close" />
          </button>
        </header>
        <main className="modal_content">{children}</main>
        <footer className="modal_footer">
          <button className="modal-close" onClick={() => close()}>
            Cancel
          </button>
          <button className="submit">Submit</button>
        </footer>
      </div>
    </div>
  );
};

export default Modal;
