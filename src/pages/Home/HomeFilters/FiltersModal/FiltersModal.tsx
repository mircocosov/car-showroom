import { useState } from "react";
import Modal from "@/components/ui/Modal";
import Input from "@/components/ui/Input";
import styles from "./FiltersModal.module.scss";

export default function HomeModal() {
  const [isShowed, setIsShowed] = useState(false);

  return (
    <div className={styles.container}>
      <button onClick={() => setIsShowed(true)} className={styles.button}>
        Buy
      </button>

      <Modal
        isShowed={isShowed}
        setIsShowed={setIsShowed}
        header="Заполните форму для связи"
        footer={
          <>
            <button
              onClick={() => setIsShowed(false)}
              className={styles.modal__button}
            >
              Cancel
            </button>
            <button
              onClick={() => setIsShowed(false)}
              className={styles.modal__button}
            >
              Submit
            </button>
          </>
        }
      >
        <Input
          inputClassName={styles.input}
          className={styles.input}
          type="text"
          label="Фамилия Имя Отчество"
        />
        <Input
          inputClassName={styles.input}
          className={styles.input}
          type="tel"
          label="Номер телефона"
        />
      </Modal>
    </div>
  );
}