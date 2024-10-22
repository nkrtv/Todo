import { LightColors, DarkColors } from './colors';
import { createTheme } from '@mui/material/styles';

export const getOverrides = (colors) => ({
    palette: {
        background: {
            app: colors.backgroundApp,
            main: colors.background,
            task: colors.backgroundTask
        },
        border: {
            main: colors.borderColor,
            secondary: colors.border
        },
        text: {
            primary: colors.textPrimary,
            secondary: colors.textSecondary
        },
        button: {
            active: colors.primaryButtonColor,
            close: colors.closeButtonColor,
            deleteHover: colors.deleteIconHover
        }
    },
    typography: {
        fontFamily: 'Nunito, sans-serif',
        h1: {
            fontWeight: 500,
            fontSize: '50px',
            color: colors.textPrimary
        },
        p: {
            fontWeight: 400,
            fontSize: '22px',
            color: colors.textPrimary
        },
        body1: {
            fontWeight: 400,
            fontSize: '20px',
            color: colors.textPrimary
        },
        body2: {
            fontWeight: 400,
            fontSize: '18px',
            color: colors.textSecondary
        },
    },
    components: {
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: colors.textSecondary,
                    '&.Mui-focused': {
                        color: colors.textSecondary
                    }
                }
            }
        },
        MuiSelect: {
            styleOverrides: {
                root: {
                    height: '45px',
                    color: colors.textSecondary,
                    borderRadius: '15px',
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: colors.borderColor
                    },
                    '&:hover': {
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: colors.textSecondary
                        },
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: colors.textSecondary
                    }
                }
            }
        },
        MuiMenu: {
            styleOverrides: {
                paper: {
                    borderRadius: '15px',
                    backgroundColor: colors.backgroundApp,
                    color: colors.textSecondary
                }
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '15px',
                        '& fieldset': {
                            borderColor: colors.borderColor
                        },
                        '&:hover fieldset': {
                            borderColor: colors.textSecondary
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: colors.textSecondary
                        }
                    },
                    '& .MuiInputBase-input': {
                        color: colors.textSecondary
                    },
                    '& .MuiFormLabel-root': {
                        color: colors.textSecondary
                    }
                }
            }
        }  
    }
});

export const lightTheme = createTheme({
    palette: getOverrides(LightColors).palette,
    typography: getOverrides(LightColors).typography,
    components: getOverrides(LightColors).components
});

export const darkTheme = createTheme({
    palette: getOverrides(DarkColors).palette,
    typography: getOverrides(DarkColors).typography,
    components: getOverrides(DarkColors).components
});



