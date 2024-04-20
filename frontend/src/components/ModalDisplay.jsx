import React from "react";
import { Modal, ButtonToolbar, Button } from "rsuite";

const ModalDisplay = ({ text, img, author, type }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = (value) => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <>
      <ButtonToolbar>
        <Button color="green" appearance="primary" style={{margin:"1px"}} onClick={() => handleOpen("full")}>
          Abrir
        </Button>
      </ButtonToolbar>

      <Modal size={"full"} open={open} onClose={handleClose}>
        <Modal.Header>
          " <Modal.Title style={{ textAlign: "center" }}>"{text}"</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            {type === "photo" ? (
              <img
                src={img}
                alt={author}
                style={{ maxWidth: "100%", maxHeight: "90%", height: "auto" }}
              />
            ) : (
              <video
                src={img}
                controls
                style={{ maxWidth: "100%", maxHeight: "90%", height: "auto" }}
              />
            )}
          </div>
        </Modal.Body>
        <Modal.Footer
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p>Enviado por: {author}</p>
          <Button onClick={handleClose} appearance="primary">
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDisplay;
