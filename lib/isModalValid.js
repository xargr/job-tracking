export default (state, setIsValid) => {
  const { company, position } = state;

  if (company.trim() && position.trim()) {
    setIsValid(true);
    return;
  }

  setIsValid(false);
};
