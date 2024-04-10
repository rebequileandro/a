export const handleInputChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setState: React.Dispatch<React.SetStateAction<{}>>,
  state: {}
): void => {
  setState({
    ...state,
    [e.target.name]: e.target.value,
  });
};
