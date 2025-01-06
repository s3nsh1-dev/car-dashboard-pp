import LinkBox from "./LinkBox";
import { NavbarLinks } from "../common/StyledButtons";

const TraverseBox = () => {
  return (
    <>
      <LinkBox goTo='/'>
        <NavbarLinks>Home</NavbarLinks>
      </LinkBox>
      <LinkBox goTo='/dashboard'>
        <NavbarLinks>Dashboard</NavbarLinks>
      </LinkBox>
      <LinkBox goTo='/inventory'>
        <NavbarLinks>Inventory</NavbarLinks>
      </LinkBox>
      <LinkBox goTo='/feedback'>
        <NavbarLinks>Feedback</NavbarLinks>
      </LinkBox>
    </>
  );
};

export default TraverseBox;
