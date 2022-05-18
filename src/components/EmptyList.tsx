import styles from "../styles/components/emptyList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRectangleList } from "@fortawesome/free-solid-svg-icons";

export const EmptyList = ({
  message = "You have no items on this list! try adding some",
}: {
  message?: string;
}) => {
  return (
    <div className={styles.emptyList}>
      <p>{message}</p>
      <span>
        <FontAwesomeIcon icon={faRectangleList} />
      </span>
    </div>
  );
};
