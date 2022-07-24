import UserCard from "../../components/UserCard";
import { useFetch } from "../../hooks/useFetch";
const UserData = () => {
  const data = useFetch({
    url: "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json",
    init: {},
  });
  return (
    <div>
      {data &&
        data.map(({ id, name, email, role }: any) => (
          <UserCard key={id} name={name} email={email} role={role} />
        ))}
    </div>
  );
};

export default UserData;
