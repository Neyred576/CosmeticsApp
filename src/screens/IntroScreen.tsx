import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Dimensions,
    SafeAreaView,
} from 'react-native';
import { theme } from '../theme/theme';

const { width } = Dimensions.get('window');

const IntroScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Image
                    source={require('../assets/logo.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />
                <View style={styles.textContainer}>
                    <Text style={styles.title}>MOH TEE FLAIR</Text>
                    <Text style={styles.subtitle}>Unveil Your Natural Radiance</Text>
                    <Text style={styles.description}>
                        Discover a curated collection of premium cosmetics designed to enhance your unique beauty and boost your confidence.
                    </Text>
                </View>
            </View>

            <View style={styles.footer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.replace('Home')}
                >
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: theme.spacing.xl,
    },
    logo: {
        width: width * 0.6,
        height: width * 0.6,
        marginBottom: theme.spacing.xl,
    },
    textContainer: {
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        color: theme.colors.text,
        letterSpacing: 4,
        marginBottom: theme.spacing.sm,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: '600',
        color: theme.colors.primary,
        marginBottom: theme.spacing.md,
    },
    description: {
        fontSize: 14,
        color: theme.colors.textLight,
        textAlign: 'center',
        lineHeight: 22,
    },
    footer: {
        padding: theme.spacing.xl,
        paddingBottom: 50,
    },
    button: {
        backgroundColor: theme.colors.secondary,
        height: 56,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        ...theme.shadows.medium,
    },
    buttonText: {
        color: theme.colors.white,
        fontSize: 18,
        fontWeight: '700',
    },
});

export default IntroScreen;
