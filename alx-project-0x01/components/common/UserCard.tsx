import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ id, name, username, email, address, geo, phone, website, company }) => {

  return (
    <div className="grid grid-cols-2 gap-4 max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className=" col-span-2 flex flex-col justify-center items-center">
        <div className="bg-blue-600  text-white text-5xl font-semibold p-8 rounded-xl mb-4">{name.charAt(0).toUpperCase()}</div>
        <div className="text-center text-gray-800">
          <p>{name}</p>
          <p>@{username}</p>
          <p>{email}</p>
          <p>{phone}</p>
          <p>{website}</p>
          <p>Location: {geo?.lat}/{geo?.lng}</p>
        </div>
      </div>
      <div className="text-center text-gray-400">
        <h3>Address:</h3>
        <p>{address?.street}</p>
        <p>{address?.suite}</p>
        <p>{address?.city}</p>
        <p>{address?.zipcode}</p>
      </div>
      <div className="text-center text-gray-400">
        <h3>Company:</h3>
        <p>{company?.name}</p>
        <p>{company?.catchPhrase}</p>
        <p>{company?.bs}</p>
      </div>
    </div>
  )
}

export default UserCard;