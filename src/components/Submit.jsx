import PropTypes from "prop-types";
import Button from "./Button";

Submit.propTypes = {
  children: PropTypes.string,
};

function Submit({ children, ...rest }) {
  return (
    <Button type="submit" {...rest}>
      {children}
    </Button>
  );
}

export default Submit;
