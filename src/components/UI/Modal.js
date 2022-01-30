import ReactDom from "react-dom";

import classes from "./Modal.module.css";

const Backdrop = (props) => {
	return <div onClick={props.onClose} className={classes.backdrop} />;
};

const ModalOverlay = (props) => {
	return (
		<div className={classes.modal}>
			<div className={classes.content}>{props.children}</div>
		</div>
	);
};

const Modal = (props) => {
	return (
		<div>
			{ReactDom.createPortal(<Backdrop onClose={props.onClose} />, document.getElementById("overlay"))}
			{
				ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,
					document.getElementById("overlay"))
			}
		</div>
	);
};

export default Modal;
