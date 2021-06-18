import React, { useContext } from "react";
import Modal from "react-bootstrap/Modal";
import { BooksContext } from "../../context/book-context";
import "./style.css";

const AddBookModal = ({ handleShow, handleClose, show, id }) => {
  const book = useContext(BooksContext);
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal
        show={show}
        onHide={handleClose}
        closeButton={false}
        closeLabel={""}
      >
        <Modal.Header style={{ marginLeft: "4%" }} closeButton={false}>
          <Modal.Title>Chose a category</Modal.Title>
          <button className="btn-close" onClick={handleClose} />
        </Modal.Header>
        <div className="list">
          <ul>
            <li
              onClick={() => {
                book.newreadbooks(id);
                handleClose();
              }}
            >
              Currently reading
            </li>
            <li
              onClick={() => {
                book.newpreferredbook(id);
                handleClose();
              }}
            >
              I loved these books
            </li>
            <li
              onClick={() => {
                book.newboughtbooks(id);
                handleClose();
              }}
            >
              Books I bought
            </li>
            <li
              onClick={() => {
                book.newarchivedbooks(id);
                handleClose();
              }}
            >
              Archived
            </li>
          </ul>
        </div>
      </Modal>
    </>
  );
};

export default AddBookModal;
