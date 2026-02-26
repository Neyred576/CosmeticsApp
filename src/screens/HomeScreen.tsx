import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    Image,
} from 'react-native';
import { Search, ShoppingBag, Menu, Heart, Sparkles } from 'lucide-react-native';
import { theme } from '../theme/theme';

const { width } = Dimensions.get('window');

const products = [
    { id: 1, name: 'MTF Lipstick', category: 'LIP CARE', image: require('../assets/products/lipstick.png') },
    { id: 2, name: 'MTF Lip Balm', category: 'LIP CARE', image: require('../assets/products/lipbalm.png') },
    { id: 3, name: 'MTF Glow Serum', category: 'SKINCARE', image: require('../assets/products/serum.png') },
];

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('BeautyTips')}>
                    <Sparkles color={theme.colors.primary} size={24} />
                </TouchableOpacity>
                <Image
                    source={require('../assets/logo.png')}
                    style={styles.headerLogo}
                    resizeMode="contain"
                />
                <TouchableOpacity>
                    <ShoppingBag color={theme.colors.text} size={24} />
                </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.searchContainer}>
                    <View style={styles.searchBar}>
                        <Search color={theme.colors.textLight} size={20} />
                        <TextInput
                            placeholder="Search products..."
                            style={styles.searchInput}
                            placeholderTextColor={theme.colors.textLight}
                        />
                    </View>
                </View>

                <TouchableOpacity
                    style={styles.bannerContainer}
                    onPress={() => navigation.navigate('BeautyTips')}
                >
                    <View style={styles.banner}>
                        <View style={styles.bannerContent}>
                            <Text style={styles.bannerSubtitle}>MOH TEE FLAIR</Text>
                            <Text style={styles.bannerTitle}>Beauty Tips & Secrets</Text>
                            <View style={styles.bannerButton}>
                                <Text style={styles.bannerButtonText}>Read Now</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Our Collection</Text>
                    <TouchableOpacity>
                        <Text style={styles.viewAll}>View All</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.productGrid}>
                    {products.map((item) => (
                        <TouchableOpacity
                            key={item.id}
                            style={styles.productCard}
                            onPress={() => navigation.navigate('ProductDetail', { id: item.id })}
                        >
                            <View style={styles.imageWrapper}>
                                <Image source={item.image} style={styles.productImage} resizeMode="contain" />
                            </View>
                            <View style={styles.productInfo}>
                                <Text style={styles.productCategory}>{item.category}</Text>
                                <Text style={styles.productName}>{item.name}</Text>
                                <Text style={styles.productPrice}>Coming Soon</Text>
                            </View>
                            <TouchableOpacity style={styles.wishlistButton}>
                                <Heart color={theme.colors.textLight} size={18} />
                            </TouchableOpacity>
                        </TouchableOpacity>
                    ))}
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
        paddingHorizontal: theme.spacing.md,
        paddingVertical: theme.spacing.sm,
    },
    headerLogo: {
        width: 60,
        height: 40,
    },
    searchContainer: {
        paddingHorizontal: theme.spacing.md,
        marginVertical: theme.spacing.sm,
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: theme.colors.surface,
        paddingHorizontal: theme.spacing.md,
        height: 50,
        borderRadius: 12,
    },
    searchInput: {
        flex: 1,
        marginLeft: theme.spacing.sm,
        fontSize: 16,
        color: theme.colors.text,
    },
    bannerContainer: {
        padding: theme.spacing.md,
    },
    banner: {
        width: '100%',
        height: 180,
        backgroundColor: '#FAF5FF',
        borderRadius: 20,
        overflow: 'hidden',
        justifyContent: 'center',
        padding: theme.spacing.lg,
    },
    bannerContent: {
        maxWidth: '70%',
    },
    bannerSubtitle: {
        fontSize: 12,
        fontWeight: '600',
        color: theme.colors.primary,
        letterSpacing: 2,
        marginBottom: 4,
    },
    bannerTitle: {
        fontSize: 24,
        fontWeight: '700',
        color: theme.colors.text,
        marginBottom: theme.spacing.md,
    },
    bannerButton: {
        backgroundColor: theme.colors.primary,
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 8,
        alignSelf: 'flex-start',
    },
    bannerButtonText: {
        color: theme.colors.white,
        fontWeight: '600',
        fontSize: 14,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: theme.spacing.md,
        marginTop: theme.spacing.lg,
        marginBottom: theme.spacing.md,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: theme.colors.text,
    },
    viewAll: {
        fontSize: 14,
        color: theme.colors.primary,
        fontWeight: '600',
    },
    productGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: theme.spacing.md,
        justifyContent: 'space-between',
    },
    productCard: {
        width: (width - theme.spacing.md * 3) / 2,
        marginBottom: theme.spacing.lg,
        backgroundColor: theme.colors.white,
        borderRadius: 16,
        ...theme.shadows.small,
    },
    imageWrapper: {
        height: 160,
        backgroundColor: theme.colors.surface,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    productImage: {
        width: '100%',
        height: '100%',
    },
    productInfo: {
        padding: theme.spacing.sm,
    },
    productCategory: {
        fontSize: 10,
        fontWeight: '600',
        color: theme.colors.textLight,
        marginBottom: 2,
    },
    productName: {
        fontSize: 14,
        fontWeight: '600',
        color: theme.colors.text,
        marginBottom: 4,
    },
    productPrice: {
        fontSize: 12,
        fontWeight: '700',
        color: theme.colors.primary,
        fontStyle: 'italic',
    },
    wishlistButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: 'rgba(255,255,255,0.8)',
        padding: 6,
        borderRadius: 20,
    },
});

export default HomeScreen;
