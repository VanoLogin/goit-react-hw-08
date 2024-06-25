import css from "./css.module.css";

export default function HomePage() {
  return (
    <div className={css.container}>
      <h2 className={css.header}>HomePage</h2>
      <p className={css.text}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
        consequatur omnis debitis nobis numquam facilis fugiat voluptatem saepe,
        alias quo suscipit esse, laudantium itaque sed illum asperiores eligendi
        animi nulla?
      </p>
    </div>
  );
}
