import React from "react";

function useLocaleStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);

        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }

        setLoading(false);
      } catch (err) {
        setError(true);
      }
    }, 3000);
  });

  const saveItem = function (newItem) {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  const deleteItem = function () {
    localStorage.removeItem(itemName);
    setItem(initialValue);
    setError(false);
  };

  return { item, saveItem, deleteItem, loading, error };
}

export default useLocaleStorage;
