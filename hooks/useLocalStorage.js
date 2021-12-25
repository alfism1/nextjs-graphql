export default function useLocalStorage(key, initialValue) {
  const PREFIX = "afsamu-chat-";
  const prefixedKey = PREFIX + key;

  const setValue = (val) => {
    localStorage.setItem(prefixedKey, JSON.stringify(val));
  };

  const getValue = () => {
    return JSON.parse(localStorage.getItem(prefixedKey)) || initialValue;
  };

  return [getValue, setValue];
}
