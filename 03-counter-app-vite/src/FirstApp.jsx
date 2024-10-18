/*const newMessage = "Bernal";*/
import PropTypes from "prop-types";

/*const Name = "Bernal";*/

export const FirstApp = ({ title, subtitle, name }) => {
  /*if (!title) {
    throw new Error("El Title no existe");
  }*/

  return (
    <>
      {}
      <h1>{title}</h1>
      <p>{name}</p>
      <p>{subtitle}</p>
    </>
  );
};

FirstApp.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

FirstApp.defaultProps = {
  title: "No hay titulo",
  subtitle: "No hay subtitulo",
  name: "Bernal Gutierrez",
};
