import { useState, useEffect } from "react";
import API from "./api/contacts-api";
import { useHistory, useParams } from "react-router-dom";

const Create = () => {
  const BrowserHistory = useHistory();
  const { id } = useParams();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id) {
      API.get("/contacts/" + id).then((res) => {
        const { data } = res;
        setName(data.name);
        setNumber(data.number);
      });
    }
  }, [id]);

  const updateName = (e) => {
    setName(e.target.value);
    console.log(name);
  };

  const updateNumber = (e) => {
    setNumber(e.target.value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const contact = { name, number };

    setLoading(true);

    if (id) {
      editContact(contact);
    } else {
      createContact(contact);
    }
  };

  const editContact = (contact) => {
    API.put("/contacts/" + id, contact).then(() => {
      setLoading(false);
      BrowserHistory.goBack();
    });
  };

  const createContact = (contact) => {
    API.post("/contacts", contact).then(() => {
      setLoading(false);
      BrowserHistory.goBack();
    });
  };

  return (
    <div className="px-5 mt-5">
      <h1 className="font-bold text-xl mb-2">
        {id ? "Edit Contact" : "Contact Form"}
      </h1>
      <div className="mb-5">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          className="bg-gray-200 block p-2 w-full rounded-md mt-2"
          value={name}
          onChange={updateName}
        />
      </div>
      <div>
        <label htmlFor="number">Number</label>
        <input
          type="number"
          className="bg-gray-200 block p-2 w-full rounded-md mt-2"
          name="number"
          value={number}
          onChange={updateNumber}
        />
      </div>
      <div className="mt-5">
        <button className="bg-red-400 px-3 py-2 rounded-md hover:bg-red-600">
          Cancel
        </button>
        <button
          className="bg-green-500 ml-3 px-3 py-2 rounded-md hover:bg-green-600"
          onClick={handleSubmitForm}
        >
          {loading ? "Submiting..." : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default Create;
