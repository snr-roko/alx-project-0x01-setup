import Header from "@/components/layout/Header";
import { UserProps, UserData } from "@/interfaces";
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal"; 
import { useState } from "react";

const Users: React.FC<UserProps[]> = ({ posts }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState<UserData | null>(null)

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleAddUser = (newUser: UserData) => {
    setUser({...newUser, id: posts.length + 1});
  }

  return (
    <div>
      <Header />
      <main className="p-4">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">User Content</h1>
          <button
            className="bg-blue-700 px-4 py-2 rounded-full text-white"
            onClick={handleModalToggle}
          >
            Add User
          </button>
        </div>
        <div className="grid md:grid-cols-2 gap-2">
          {posts
            ? posts.map(
                (
                  { id, name, username, email, address, geo, phone, website, company }: UserProps,
                  key: number
                ) => (
                  <UserCard
                    id={id}
                    name={name}
                    username={username}
                    email={email}
                    address={address}
                    geo={geo}
                    phone={phone}
                    website={website}
                    company={company}
                    key={key}
                  />
                )
              )
            : null}
        </div>
      </main>
      {isModalOpen && <UserModal onClose={handleModalToggle} onSubmit={handleAddUser} />} 
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;