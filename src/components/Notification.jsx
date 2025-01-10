import { useSelector } from "react-redux";

const Notification = () => {
  const notification = useSelector(({ notification }) => notification);

  // When there s no notification, return null
  if (notification === "") {
    return null;
  }

  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
    marginBottom: 10,
  };
  return <div style={style}>{notification}</div>;
};

export default Notification;
