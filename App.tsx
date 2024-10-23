import { Container, CustomImage } from "./components";
import Title from "./components/Title/Title";
import { IMAGES, TITLE } from "./constants";
import { RegistrationScreen } from "./screens";

export default function App() {
  return (
    <Container type={"container"}>
      <RegistrationScreen />
    </Container>
  );
}
