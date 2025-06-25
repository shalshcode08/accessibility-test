import { Modal as ResponsiveModal } from "react-responsive-modal";
import { useState } from "react";
import Draggable from "react-draggable";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [modalImageLoaded, setModalImageLoaded] = useState(false);

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
      {/* modal */}
      {openModal && (
        <ResponsiveModal
          open={openModal}
          onClose={handleModalClose}
          showCloseIcon={true}
          center={true}
          closeOnEsc={true}
          classNames={{
            root: "fixed inset-0",
            modal:
              "relative w-[600px] h-[600px] bg-gray-200 flex items-center justify-center rounded-md",
            overlay: "fixed inset-0 bg-black bg-opacity-50",
            closeIcon: "absolute top-2 right-2 cursor-pointer",
            modalContainer: "flex items-center justify-center min-h-screen",
          }}
        >
          {/* draggable image */}
          <Draggable bounds="parent">
            <div className="cursor-move">
              {!modalImageLoaded && (
                <div className="flex items-center justify-center flex-col gap-2">
                  <p className="text-center text-xl font-bold text-gray-600">
                    loading image...
                  </p>
                  <p className="text-sm text-gray-600 text-center">
                    this is picsum image do not blame
                  </p>
                </div>
              )}
              <img
                src="https://picsum.photos/id/230/600/300"
                alt="draggable-image"
                draggable={false}
                loading="eager"
                onError={(e) => {
                  console.log(e);
                }}
                onLoad={() => {
                  setModalImageLoaded(true);
                }}
              />
            </div>
          </Draggable>
          
          {/* controls */}
          <div className="absolute bottom-[-60px] w-full flex items-center justify-center gap-4">
            <button className="cursor-pointer text-white border border-white px-4 py-2 rounded-full text-sm hover:bg-white hover:text-black" onClick={() => {}}>
              zoom-in
            </button>
            <button className="cursor-pointer text-white border border-white px-4 py-2 rounded-full text-sm hover:bg-white hover:text-black" onClick={() => {}}>
              zoom-out
            </button>
            <button className="cursor-pointer text-white border border-white px-4 py-2 rounded-full text-sm hover:bg-white hover:text-black" onClick={() => {}}>
              reset
            </button>
          </div>
        </ResponsiveModal>
      )}

      {/* main content */}
      <div className="flex flex-col gap-16 justify-center items-center h-screen">
        <div className="text-center">
          <p>
            this is a vite/react app to test{" "}
            <span className="font-bold underline">react-responsive-modal</span>{" "}
            & <span className="font-bold underline">react-draggable</span> &{" "}
            <span className="font-bold underline">react-zoom-pan-pinch</span>
          </p>
        </div>
        {!imageLoaded && <p className="text-center">loading image...</p>}

        {/* placeholder image */}
        <img
          src="https://picsum.photos/id/230/200/200"
          alt="this is a placeholder image"
          className="rounded-md border-2 border-gray-200 cursor-pointer hover:border-gray-400"
          loading="eager"
          onClick={handleModalOpen}
          onError={(e) => {
            console.log(e);
          }}
          onLoad={() => {
            setImageLoaded(true);
          }}
        />

        <div className="text-center flex flex-col gap-2">
          <p className="text-2xl">☝️</p>
          <p className="underline">click on the image to open the modal</p>
        </div>
      </div>
    </>
  );
}

export default App;
