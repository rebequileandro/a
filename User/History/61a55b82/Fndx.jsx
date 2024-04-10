import './comments.scss';

const Comments = ({ value, onChange }) => {
  return (
    <div className="comments">
      <label className="comments__label">Observaciones sobre la orden:</label>
      <div className="comments__textarea-wrapper gradient-border gradient-border--green">
        <textarea
          value={value}
          onChange={onChange}
          className="comments__textarea"
          placeholder="Explica si existen cambios que quieras hacer sobre tu orden y el local hará lo posible para realizarlos."
        />
      </div>
    </div>
  );
};

export default Comments;
