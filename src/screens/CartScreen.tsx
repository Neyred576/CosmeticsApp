import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Image,
} from 'react-native';
import { ChevronLeft, ShoppingBag } from 'lucide-react-native';
import { theme } from '../theme/theme';

const CartScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <ChevronLeft color={theme.colors.text} size={24} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Shopping Bag</Text>
                <View style={{ width: 24 }} />
            </View>

            <View style={styles.content}>
                <View style={styles.emptyIconContainer}>
                    <ShoppingBag color={theme.colors.border} size={80} strokeWidth={1} />
                </View>
                <Text style={styles.emptyTitle}>Your bag is empty</Text>
                <Text style={styles.emptySubtitle}>
                    Our premium collection is launching soon. Stay tuned for the most exquisite cosmetics experience.
                </Text>
                <TouchableOpacity
                    style={styles.shopButton}
                    onPress={() => navigation.navigate('Home')}
                >
                    <Text style={styles.shopButtonText}>Explore Products</Text>
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: theme.spacing.xl,
    },
    emptyIconContainer: {
        marginBottom: theme.spacing.lg,
    },
    emptyTitle: {
        fontSize: 22,
        fontWeight: '700',
        color: theme.colors.text,
        marginBottom: 8,
    },
    emptySubtitle: {
        fontSize: 14,
        color: theme.colors.textLight,
        textAlign: 'center',
        lineHeight: 22,
        marginBottom: theme.spacing.xl,
    },
    shopButton: {
        backgroundColor: theme.colors.secondary,
        paddingHorizontal: 32,
        paddingVertical: 14,
        borderRadius: 12,
    },
    shopButtonText: {
        color: theme.colors.white,
        fontWeight: '700',
        fontSize: 16,
    },
});

export default CartScreen;
