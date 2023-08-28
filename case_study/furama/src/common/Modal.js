import 'bootstrap/dist/css/bootstrap.css';

const Modal = ({ title, msg, onClose, onDelete }) => {
    return (
        <>
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <div className="modal-dialog"
                    style={{
                        backgroundColor: '#fff',
                        padding: '20px',
                        borderRadius: '4px',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                        maxWidth: '400px',
                        width: '100%'
                    }}>
                    <div className="modal-content">
                        <div className="modal-header"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                marginBottom: '10px'
                            }}>
                            <h5 className="modal-title">{title}</h5>
                            <button type="button" className="btn-close" onClick={() => onClose()} aria-label="Close"></button>
                        </div>
                        <div className="modal-body" style={{ marginBottom: '10px' }}>
                            <p>{msg}</p>
                        </div>
                        <div className="modal-footer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                            <button type="button" onClick={() => onClose()} className="btn btn-secondary">Close</button>
                            <button type="button" onClick={() => onDelete()} className="btn btn-danger">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Modal;