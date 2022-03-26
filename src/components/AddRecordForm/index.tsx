import { FC, Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";

import { RecordForm } from "../RecordForm";
import { NewRecord } from "../../types/NewRecord";
import { Modal } from "../Modal";
import { ModalConfig } from "../../types/ModalConfig";

export const AddRecordForm: FC = () => {
  const [modal, setModal] = useState<ModalConfig>({
    show: false,
    error: false,
    message: <p></p>,
    loading: false,
  });
  const navigate = useNavigate();

  const sendNewRecord = (newRecord: NewRecord) => {
    const message = <p className="m-0">Loading...</p>;
    modalHandler({ show: true, error: false, message, loading: true });

    setTimeout(() => {
      const message = <p className="m-0">Record added successfully</p>;
      modalHandler({ show: true, error: false, message });
      // const message = <p className="m-0">Something went wrong</p>;
      // setModal({ show: true, error: true, message });
    }, 2000);
  };

  const modalHandler = (config: ModalConfig) => {
    setModal(config);
  };

  const goToHome = () => {
    navigate("/");
  };

  const closeModal = () => {
    setModal({ show: false, error: false, message: <p></p>, loading: false });
  };

  return (
    <Fragment>
      <RecordForm
        onSubmit={sendNewRecord}
        onFinish={goToHome}
        title={"New Record"}
        onModal={modalHandler}
      />
      {modal.show && (
        <Modal
          error={modal.error}
          message={modal.message}
          onClose={closeModal}
          loading={modal.loading}
        />
      )}
    </Fragment>
  );
};
