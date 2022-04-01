import React, { useEffect, useState } from "react";
import ContactList from "./ContactList";
import API from "./api/contacts-api";

const Home = () => {
  const [contacs, setContacs] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchContact = () => {
    API.get("/contacts")
      .then((res) => {
        setContacs(res.data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleDelete = (e) => {
    const newContacs = contacs.filter((items) => items.id !== e);
    setContacs(newContacs);
  };

  useEffect(() => {
    fetchContact();
  }, []);
  return (
    <div className="px-5 mt-5">
      {loading && <div className="text-center text-blue-400">Loading ...</div>}
      {error && <div className="text-center text-red-500">{error}</div>}
      {contacs && (
        <ContactList
          contacs={contacs}
          title="All Contacts"
          onDelete={fetchContact}
        />
      )}
    </div>
  );
};

export default Home;
