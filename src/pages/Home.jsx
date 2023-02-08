import { useState } from "react";
import Modal from "../components/Modal";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="card">
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia a
        natus repellendus incidunt ab eligendi, ea nesciunt voluptas. Fugit
        distinctio magnam officia vero ullam molestias reiciendis dolores est
        sunt iure.
      </p>
      <button
        className="button"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open Modal
      </button>
      {showModal ? (
        <Modal>
          <h4>Modal</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            ipsum inventore perferendis. Sed, quibusdam, vel impedit soluta
            nostrum provident blanditiis reprehenderit repellat quasi minima
            officiis inventore, cumque ex! Repellat, assumenda.
          </p>
          <button
            type="button"
            className="button"
            onClick={() => setShowModal(false)}
          >
            OK
          </button>
        </Modal>
      ) : null}
    </section>
  );
};

export default Home;
