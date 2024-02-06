import { StyleSheet } from "react-native";
import { theme } from "../../theme/default";

export const classes = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 4,
        marginTop: -27,
        marginBottom: 12,
    },
    input: {
        flex: 1,
        backgroundColor: theme.color.gray500,
        borderRadius: 8,
        paddingLeft: 16,
        borderColor: theme.color.gray700,
        borderWidth: 1,
        height: 54,
        color: theme.color.gray100,
        lineHeight: theme.font.height.regular,
        fontSize: theme.font.size.large,
    },
    buttonAdd: {
        backgroundColor: theme.color.blueDark,
        borderRadius: 8,
        height: 52,
        width: 52,
        justifyContent: 'center',
        alignItems: 'center',
    }
})