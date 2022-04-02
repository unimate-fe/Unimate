import fonts from '../../../assets/fonts';

export const typos = {
    H1: {
        fontFamily: fonts.BOLD,
        fontSize: 32,
        lineHeight: 32,
    },
    H2: {
        fontFamily: fonts.BOLD,
        fontSize: 24,
        lineHeight: 24,
    },
    H3: {
        fontFamily: fonts.BOLD,
        fontSize: 20,
        lineHeight: 20,
    },
    Subtitle1: {
        fontFamily: fonts.BOLD,
        fontSize: 18,
        lineHeight: 18,
    },
    Subtitle2: {
        fontFamily: fonts.BOLD,
        fontSize: 16,
        lineHeight: 16,
    },
    Label: {
        fontFamily: fonts.REGULAR,
        fontSize: 16,
        lineHeight: 16,
    },
    Body1: {
        fontFamily: fonts.REGULAR,
        fontSize: 16,
        lineHeight: 16,
    },
    Body2: {
        fontFamily: fonts.REGULAR,
        fontSize: 14,
        lineHeight: 14,
    },
    Button1: {
        fontFamily: fonts.BOLD,
        fontSize: 16,
        lineHeight: 16,
    },
    Button2: {
        fontFamily: fonts.BOLD,
        fontSize: 14,
        lineHeight: 14,
    },
    Button3: {
        fontFamily: fonts.REGULAR,
        fontSize: 12,
        lineHeight: 12,
    },
} as const;

export type TypoType = keyof typeof typos;
