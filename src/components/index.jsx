import { Container } from "@material-ui/core";
import CenterSide from "./center-side/CenterSide";
import LeftSide from "./left-side/LeftSide";

function Components() {
  return (
    <div className="components">
      <Container className="container" maxWidth="lg">
        <LeftSide />
        <CenterSide />
      </Container>
    </div>
  );
}

export default Components;
