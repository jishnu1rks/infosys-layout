import Avatar from "@material-ui/core/Avatar";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Logo from "../../assets/images/logo.svg";
import Person from "../../assets/images/person.png";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  avatar: {
    height: "3rem",
  },
  content: {
    display: "flex",
    height: "5.438em",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "40px",
  },
  menu: {
    textDecoration: "none",
    color: "#000",
    padding: "0 20px",
    fontSize: 20,
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <header>
      <div className={classes.content}>
        <div className="logo">
          <img src={Logo} alt="Logo" className="logo" />
          <Link href="#" className={classes.menu}>
            Menu 1
          </Link>
          <Link href="#" className={classes.menu}>
            Menu 2
          </Link>
        </div>
        <div className="menu-container">
          <Avatar alt="Person" src={Person} className={classes.avatar} />
          <MoreVertIcon color="disabled" />
        </div>
      </div>
    </header>
  );
};

export default Header;
