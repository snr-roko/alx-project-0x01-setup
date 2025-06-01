import { UserProps } from "@/interfaces";

const Cards: React.FC<UserProps> = ({ id, name, username, email, address, geo, phone, website, company }) => {

  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-4">
      <div className="flex flex-col justify-center items-center">
        <div className="bg-white rounded-full p-4 mb-4">{name.charAt(0).toUpperCase()}</div>
        <div className="text-center">
          <p>{name}</p>
          <p>@{username}</p>
          <p>{email}</p>
          <p>{phone}</p>
          <p>{website}</p>
          <p>Location: {geo.lat}/{geo.lng}</p>
        </div>
      </div>
      <div>
        <h3>Address:</h3>
        <p>{address.street}</p>
        <p>{address.suite}</p>
        <p>{address.city}</p>
        <p>{address.zipcode}</p>
      </div>
      <div>
        <h3>Company:</h3>
        <p>{company.name}</p>
        <p>{company.catchPhrase}</p>
        <p>{company.bs}</p>
      </div>
    </div>
  )
}