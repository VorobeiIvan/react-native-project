import React from "react";
import { View } from "react-native";

import styles from "./ContainerStyles";

type ContainerProps = {
    children: React.ReactNode;
    stylesContainer?: object; 
    type?: keyof typeof styles; // Зміна типу для типізації стилів
}

const Container: React.FC<ContainerProps> = ({ children, type }) => {
    return (
        <View style={styles[type || "container"]}>
            {children}
        </View>
    );
};
export default Container;
