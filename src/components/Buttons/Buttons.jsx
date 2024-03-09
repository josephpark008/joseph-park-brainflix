import "./Buttons.scss";

export default function Buttons({ButtonText, ButtonIcon, ButtonClass}) {
  return (
    <>
      <button className={ButtonClass} style={{ backgroundImage: `url(${ButtonIcon})` }}>{ButtonText}</button>
    </>
  );
}
