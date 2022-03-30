import React from "react";

const ContactList = ({ contacs, title, onDelete }) => {
  return (
    <React.Fragment>
      <h1 className="font-bold text-xl mb-2">{title}</h1>
      {contacs.map((items) => (
        <div
          className="bg-gray-100 rounded-md px-3 py-2 flex items-center justify-between mt-2"
          key={items.id}
        >
          <div>
            <p className="text-red-600 font-bold">{items.name}</p>
            <p>{items.number}</p>
          </div>
          <div>
            <button className="bg-green-500 mr-3 px-3 py-2 rounded-md hover:bg-green-600">
              Edit
            </button>
            <button
              className="bg-red-400 px-3 py-2 rounded-md hover:bg-red-600"
              onClick={() => {
                onDelete(items.id);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

export default ContactList;
