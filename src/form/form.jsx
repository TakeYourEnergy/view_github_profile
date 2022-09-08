import styles from "./form.module.css";
import background from "../images/search.svg";
import { useState } from "react";
import axios from "axios";

const Form = ({ setAcc }) => {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const res = await axios.get(`https://api.github.com/users/${inputValue}`);
      setAcc(res.data);
    } catch (err) {
      console.log("ошибка: " + err);
    }
    setLoading(false);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.appForm}>
      <input
        value={inputValue}
        style={{
          backgroundImage: `url(${background})`
        }}
        type="text"
        className={styles.appInput}
        onChange={handleChange}
      />
      {loading ? (
        <button
          disabled={!loading}
          type="submit"
          className={styles.appFormBtnDisabled}
        >
          Загрузка...
        </button>
      ) : (
        <button type="submit" className={styles.appFormBtn}>
          Найти
        </button>
      )}
    </form>
  );
};

export default Form;
