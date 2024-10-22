import { FC, useState } from "react";
import Container from "../Containers/Container";
import CustomImage from "../CustomImage/CustomImage";
import { BUTTON, ICONS, IMAGES } from "../../constants";
import { Button } from "..";

type AvatarProps = {};

const Avatar: FC<AvatarProps> = () => {
  const [avatarImage, setAvatarImage] = useState(IMAGES.DEFAULT_AVATAR);
  const [icon, setIcon] = useState(ICONS.ADD_AVATAR_BUTTON);

  const handleAvatarChange = () => {
    if (icon === ICONS.ADD_AVATAR_BUTTON) {
      setIcon(ICONS.REMOVE_AVATAR_BUTTON);
      setAvatarImage(IMAGES.DEFAULT_AVATAR);
    } else {
      setIcon(ICONS.ADD_AVATAR_BUTTON);
      setAvatarImage(IMAGES.GIRL);
    }
  };

  return (
    <Container type="avatarContainer">
      <CustomImage source={IMAGES.DEFAULT_AVATAR} />
      <Button

      // iconUri={icon}
      // buttonStyle={styles.addAvatarButton}
      // onPress={handleAvatarChange}
      />
    </Container>
  );
};

export default Avatar;
