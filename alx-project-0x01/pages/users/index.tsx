import Header from "@/components/layout/Header";
import { UserProps } from "@/interfaces";
import UserCard from "@/components/common/UserCard";

const Users: React.FC<UserProps[]> = ({ posts }) => {
  console.log(posts)
  return (
    <div>
      <Header />
      <main className="p-4">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">
            User Content
          </h1>
          <button className="bg-blue-700 px-4 py-2 rounded-full text-white">
            Add User
          </button>
        </div>
        <div className="grid md:grid-cols-2 gap-2">
          {posts? posts.map(({id, name, username, email, address, geo, phone, website, company}: UserProps, key: number) => (
            <UserCard id={id} name={name} username={username} email={email} address={address} geo={geo} phone={phone} website={website} company={company} key={key} />
          )) : null}
        </div>
      </main>    
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}

export default Users;