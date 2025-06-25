import { Modal as ResponsiveModal } from "react-responsive-modal";
import { useState } from "react";
import Draggable from "react-draggable";

function App() {
  const [openModal, setOpenModal] = useState(false);

  const handleModalOpen = () => {
    console.log("modal opening");
    setOpenModal(true);
  };

  const handleModalClose = () => {
    console.log("modal closing");
    setOpenModal(false);
  };

  return (
    <>
      {openModal && (
        <ResponsiveModal
          open={openModal}
          onClose={handleModalClose}
          showCloseIcon={true}
          center={true}
          closeOnEsc={true}
          classNames={{
            root: "fixed inset-1",
            modal:
              "relative w-[600px] h-[600px] bg-gray-200 flex items-center justify-center rounded-md",
            overlay: "fixed inset-0 bg-black bg-opacity-50",
            closeIcon: "absolute top-2 right-2 cursor-pointer",
            modalContainer: "flex items-center justify-center min-h-screen",
          }}
        >
          <Draggable bounds="parent">
            <div className="cursor-move">
              <img
                src="https://picsum.photos/id/230/600/300"
                alt="draggable-image"
                draggable={false}
              />
            </div>
          </Draggable>
        </ResponsiveModal>
      )}
      <div className="flex justify-center items-center h-screen">
        <img
          src="https://picsum.photos/id/230/200/200"
          alt="this is a placeholder image"
          className="rounded-md border-2 border-gray-200 cursor-pointer hover:border-gray-400"
          loading="eager"
          onClick={handleModalOpen}
        />
      </div>
    </>
  );
}

export default App;
