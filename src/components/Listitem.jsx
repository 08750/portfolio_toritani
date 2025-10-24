export default function ListItem({
  listName = "メニュー",
  listClass = "baseClass",
  style,
}) {
  return (
    // style={style}を受け取る記述
    <>
      <li className={listClass} style={style}>
        {listName}
      </li>
    </>
  );
}
