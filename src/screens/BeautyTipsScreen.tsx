import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import { ChevronLeft, Sparkles, Droplets, Sun } from 'lucide-react-native';
import { theme } from '../theme/theme';

const { width } = Dimensions.get('window');

const tips = [
    {
        icon: <Droplets color={theme.colors.primary} size={24} />,
        title: 'Hydration First',
        description: 'Always apply moisturizer while your skin is slightly damp to lock in maximal hydration.',
    },
    {
        icon: <Sun color={theme.colors.primary} size={24} />,
        title: 'SPF is Non-Negotiable',
        description: 'Apply sunscreen daily, even indoors, to prevent premature aging and UV damage.',
    },
    {
        icon: <Sparkles color={theme.colors.primary} size={24} />,
        title: 'Double Cleansing',
        description: 'Use an oil-based cleanser followed by a water-based one to ensure all makeup and impurities are gone.',
    },
];

const BeautyTipsScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <ChevronLeft color={theme.colors.text} size={24} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Beauty Tips</Text>
                <View style={{ width: 24 }} />
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.sectionTitle}>Glow with Moh Tee Flair</Text>
                <Text style={styles.sectionSubtitle}>Expert advice for your daily routine</Text>

                {tips.map((tip, index) => (
                    <View key={index} style={styles.tipCard}>
                        <View style={styles.tipIcon}>{tip.icon}</View>
                        <View style={styles.tipText}>
                            <Text style={styles.tipTitle}>{tip.title}</Text>
                            <Text style={styles.tipDescription}>{tip.description}</Text>
                        </View>
                    </View>
                ))}

                <View style={styles.proBanner}>
                    <Text style={styles.proTitle}>Professional Consultation</Text>
                    <Text style={styles.proDesc}>Book a 1-on-1 session with our beauty experts.</Text>
                    <TouchableOpacity style={styles.proButton}>
                        <Text style={styles.proButtonText}>Coming Soon</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: theme.spacing.md,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: theme.colors.text,
    },
    content: {
        padding: theme.spacing.lg,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '700',
        color: theme.colors.text,
        marginBottom: 4,
    },
    sectionSubtitle: {
        fontSize: 14,
        color: theme.colors.textLight,
        marginBottom: theme.spacing.xl,
    },
    tipCard: {
        flexDirection: 'row',
        backgroundColor: theme.colors.surface,
        padding: theme.spacing.lg,
        borderRadius: 20,
        marginBottom: theme.spacing.md,
        alignItems: 'center',
    },
    tipIcon: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: theme.colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: theme.spacing.md,
    },
    tipText: {
        flex: 1,
    },
    tipTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: theme.colors.text,
        marginBottom: 4,
    },
    tipDescription: {
        fontSize: 13,
        color: theme.colors.textLight,
        lineHeight: 18,
    },
    proBanner: {
        backgroundColor: theme.colors.secondary,
        padding: theme.spacing.xl,
        borderRadius: 24,
        marginTop: theme.spacing.xl,
        alignItems: 'center',
    },
    proTitle: {
        color: theme.colors.white,
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 8,
    },
    proDesc: {
        color: 'rgba(255,255,255,0.7)',
        textAlign: 'center',
        marginBottom: theme.spacing.lg,
    },
    proButton: {
        backgroundColor: theme.colors.primary,
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 12,
    },
    proButtonText: {
        color: theme.colors.white,
        fontWeight: '700',
    },
});

export default BeautyTipsScreen;
