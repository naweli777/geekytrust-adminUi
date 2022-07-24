import "./UserCard.css";

interface UserCardProps {
  name: string;
  email: string;
  role: string;
}
const UserCard = ({ name, email, role }: UserCardProps) => {
  return (
    <div className="container">
      <div className="row">
        <div className="column">{name}</div>
        <div className="column">{email}</div>
        <div className="column">{role}</div>
        <div className="column">Action</div>
      </div>
    </div>
  );
};

export default UserCard;
