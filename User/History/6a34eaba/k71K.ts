interface handleInputChangeInterface {
  element: React.ChangeEvent<HTMLInputElement>;
  setState: React.Dispatch<React.SetStateAction<{}>>;
  state: object;
}
export const handleInputChange = ({
  element,
  setState,
  state,
}: handleInputChangeInterface): void => {
  setState({
    ...state,
    [element.target.name]: element.target.value,
  });
};
