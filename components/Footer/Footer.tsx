import css from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={css.footer}>
      <div className={css.wrap}>
        <p>
          © {currentYear} NoteHub. Developer: Daryna. Email:
          student@notehub.app
        </p>
      </div>
    </footer>
  );
};

export default Footer;