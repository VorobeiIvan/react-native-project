// import { FC, useState } from "react";
// import Container from "../Containers/Container";
// import CustomImage from "../CustomImage/CustomImage";
// import Button from "../Button/Button";
// import Icon from "../Icon/Icon";
// import { ICONS, IMAGES } from "../../constants";

// type AvatarProps = {};

// const Avatar: FC<AvatarProps> = () => {
//   const [avatarImage, setAvatarImage] = useState(IMAGES.DEFAULT_AVATAR);
//   const [icon, setIcon] = useState(ICONS.ADD_AVATAR_BUTTON);

//   const handleAvatarChange = () => {
//     if (icon === ICONS.ADD_AVATAR_BUTTON) {
//       setIcon(ICONS.REMOVE_AVATAR_BUTTON);
//       setAvatarImage(IMAGES.GIRL);
//     } else {
//       setIcon(ICONS.ADD_AVATAR_BUTTON);
//       setAvatarImage(IMAGES.DEFAULT_AVATAR);
//     }
//   };

//   return (
//     <Container type="avatarContainer">
//       <CustomImage source={avatarImage} />
//       <Button onPress={handleAvatarChange} type="button">
//         <Icon name={icon} width={24} height={24} />
//       </Button>
//     </Container>
//   );
// };

// export default Avatar;
