import SideMenu from "../components/SideMenu";

interface SideMenuStyle {
  title: string;
}

const SideMenuLayout = ({ title }: SideMenuStyle) => {
  return (
    <div style={{ display: "flex" }}>
      <SideMenu />
      <h1>{title}</h1>
    </div>
  );
};

export default SideMenuLayout;
