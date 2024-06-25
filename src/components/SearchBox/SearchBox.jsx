import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.css";
import {
  changeFilter,
  selectNameFilter,
} from "../../redux/filters/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const searchValue = useSelector(selectNameFilter);

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={styles.wrapper}>
      <span className={styles.span}>Find contacts by name</span>
      <input type="text" value={searchValue} onChange={handleChange} />
    </div>
  );
}
