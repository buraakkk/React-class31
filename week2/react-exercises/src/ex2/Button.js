const Button = ({ getDogPhoto }) => {
  return (
    <button type="button" class="btn btn-success" onClick={getDogPhoto}>
      Get a Dog!
    </button>
  );
};

export default Button;
