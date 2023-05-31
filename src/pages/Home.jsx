import { useState } from "react";
import Modal from "../components/Modal";
import MyButton from "component-library/packages/my-button";
import MyCard from "component-library/packages/my-card";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <MyCard>
      <h1 className="text-900 leading-9 mb-lg">Home</h1>
      <p className="mb-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia a
        natus repellendus incidunt ab eligendi, ea nesciunt voluptas. Fugit
        distinctio magnam officia vero ullam molestias reiciendis dolores est
        sunt iure.
      </p>
      <MyButton
        color="blue"
        handleClick={() => setShowModal(true)}
      >
        Open Modal
      </MyButton>
      {showModal ? (
        <Modal>
          <h4 className="text-900 leading-9 mb-lg">Modal</h4>
          <p className="mb-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            ipsum inventore perferendis. Sed, quibusdam, vel impedit soluta
            nostrum provident blanditiis reprehenderit repellat quasi minima
            officiis inventore, cumque ex! Repellat, assumenda.
          </p>
          <MyButton handleClick={() => setShowModal(false)}>
            OK
          </MyButton>
        </Modal>
      ) : null}
    </MyCard>
  );
};

export default Home;
