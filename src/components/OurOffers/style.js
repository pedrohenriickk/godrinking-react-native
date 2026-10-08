import { fonts } from "../../themes/fonts";
import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";

export const styles = StyleSheet.create({

    textOurOffers: {
        color: colors.colorWhite,
        fontSize: 25,
        fontFamily: fonts.fontTitle,
        fontWeight: "700"
    },
    textHighlight: {
        color: colors.colorHotDrink
    },

        scrollContent: {
        gap: 15
    }
})