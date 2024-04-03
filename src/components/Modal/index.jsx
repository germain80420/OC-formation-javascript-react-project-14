import "./modal.css"
import { faTimes} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Modal = ({ message,onClose }) => {

  return (
    <div className="modal-overlay">
      <div className="modal-content">
      <span className="close-btn" onClick={onClose}>
          <FontAwesomeIcon className="cross-icon" icon={faTimes} />
        </span>
        <p>{message}</p>
        
      </div>
    </div>
  )
}

export default Modal;
