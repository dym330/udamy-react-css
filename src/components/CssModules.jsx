// node-sassを事前インストール

import classes from "./CssModules.module.scss";

export const CssModules = () => {
  return (
    <div className={classes.container}>
      <p className={classes.titleStyle}>- Inline Styles -</p>
      <button className={classes.buttonStyle}>FIGHT!!</button>
    </div>
  );
};
