import type { ReactNode } from "react";

import css from "./layout.module.css";

interface FilterLayoutProps {
  children: ReactNode;
  sidebar: ReactNode;
}

const FilterLayout = ({ children, sidebar }: FilterLayoutProps) => {
  return (
    <section className={css.container}>
      <aside className={css.sidebar}>{sidebar}</aside>

      <div className={css.notesWrapper}>{children}</div>
    </section>
  );
};

export default FilterLayout;