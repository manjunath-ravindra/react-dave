const Footer = (props) => {
  let { length } = props;
  return (
    <footer>
      {length} list {length === 1 ? "item" : "items"}
    </footer>
  );
};
export default Footer;
