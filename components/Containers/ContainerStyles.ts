import { StyleSheet } from "react-native";
import { COLORS, BORDER_RADIUS, MARGIN } from "../../constants/stylesConstants";

const styles = StyleSheet.create({
    // Основний контейнер, що займає всю доступну область
    container: {
        flex: 1,
        justifyContent: "flex-end",
    },
    
    // Контейнер контенту з закругленими верхніми кутами
    contentContainer: {
        borderTopRightRadius: BORDER_RADIUS.CONTAINER,
        borderTopLeftRadius: BORDER_RADIUS.CONTAINER,
        backgroundColor: COLORS.WHITE,
    },
    
    // Контейнер для аватара
    avatarContainer: {
        width: 120,
        height: 120,
        borderRadius: BORDER_RADIUS.AVATAR,
        backgroundColor: COLORS.LIGHT_GRAY,
        alignSelf: "center",
        marginTop: -60,
    },
    
    // Контейнер для полів введення
    inputContainer: {
        gap: MARGIN.BLOCK_SPACING, // Відстань між полями
        marginHorizontal: MARGIN.BLOCK_SPACING, // Горизонтальні відступи
    },
    
    // Контейнер для кнопок
    buttonContainer: {
        gap: MARGIN.BLOCK_SPACING, // Відстань між кнопками
        marginVertical: MARGIN.MEDIUM_ICON_TEXT, // Вертикальні відступи
    },
});

export default styles;
