import UserDisplay from "./components/UserDisplay";
import { useQuery } from "urql";
import { GetUsersDocument } from "./graphql/generated";

function App() {
  const [results] = useQuery({
    query: GetUsersDocument,
  });

  const users = results.data?.users;

  return (
    <div className="bg-black flex-col h-screen w-full flex items-center justify-center p-4 gap-y-12 overflow-y-scroll ">
      {users?.map((user, index) => (
        <UserDisplay key={index} user={user} />
      ))}
    </div>
  );
}

export default App;
