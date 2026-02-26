import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Image,
    ScrollView,
    Dimensions,
} from 'react-native';
import { ChevronLeft, ShoppingBag, Heart, Star, Share2 } from 'lucide-react-native';
import { theme } from '../theme/theme';

const { width } = Dimensions.get('window');

const products = {
    1: { name: 'MTF Lipstick', category: 'LIP CARE', image: require('../assets/products/lipstick.png'), desc: 'A premium, long-lasting lipstick that provides a velvet matte finish while keeping your lips hydrated.' },
    2: { name: 'MTF Lip Balm', category: 'LIP CARE', image: require('../assets/products/lipbalm.png'), desc: 'Infused with natural oils, our lip balm ensures your lips stay soft and supple all day long.' },
    3: { name: 'MTF Glow Serum', category: 'SKINCARE', image: require('../assets/products/serum.png'), desc: 'Our signature Glow Serum is formulated to provide instant radiance and deep hydration for a rejuvenated look.' },
};

const ProductDetailScreen = ({ navigation, route }) => {
    const productId = route.params?.id || 1;
    const product = products[productId] || products[1];

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.imageContainer}>
                    <Image source={product.image} style={styles.productImage} resizeMode="contain" />
                    <SafeAreaView style={styles.overlayHeader}>
                        <TouchableOpacity
                            style={styles.iconButton}
                            onPress={() => navigation.goBack()}
                        >
                            <ChevronLeft color={theme.colors.text} size={24} />
                        </TouchableOpacity>
                        <View style={styles.headerRight}>
                            <TouchableOpacity style={styles.iconButton}>
                                <Share2 color={theme.colors.text} size={24} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.iconButton}
                                onPress={() => navigation.navigate('Cart')}
                            >
                                <ShoppingBag color={theme.colors.text} size={24} />
                            </TouchableOpacity>
                        </View>
                    </SafeAreaView>
                </View>

                <View style={styles.detailsContainer}>
                    <View style={styles.titleRow}>
                        <View>
                            <Text style={styles.category}>{product.category}</Text>
                            <Text style={styles.title}>{product.name}</Text>
                        </View>
                        <TouchableOpacity>
                            <Heart color={theme.colors.accent} size={24} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.ratingRow}>
                        <View style={styles.stars}>
                            {[1, 2, 3, 4, 5].map((s) => (
                                <Star key={s} color={theme.colors.primary} size={16} fill={theme.colors.primary} />
                            ))}
                        </View>
                        <Text style={styles.ratingText}>(Coming Soon)</Text>
                    </View>

                    <Text style={styles.price}>Coming Soon</Text>

                    <View style={styles.divider} />

                    <Text style={styles.sectionTitle}>About Product</Text>
                    <Text style={styles.description}>{product.desc}</Text>

                    <View style={styles.variants}>
                        <Text style={styles.variantTitle}>Select Option:</Text>
                        <View style={styles.variantChips}>
                            {['Standard', 'Premium Pack'].map((size) => (
                                <TouchableOpacity
                                    key={size}
                                    style={[styles.chip, size === 'Standard' && styles.chipActive]}
                                >
                                    <Text style={[styles.chipText, size === 'Standard' && styles.chipTextActive]}>{size}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                </View>
            </ScrollView>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.addToCartButton} disabled>
                    <Text style={styles.addToCartText}>Notify Me When Available</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
    imageContainer: {
        width: width,
        height: width * 1.2,
        backgroundColor: theme.colors.surface,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    productImage: {
        width: '100%',
        height: '100%',
    },
    overlayHeader: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: theme.spacing.md,
    },
    headerRight: {
        flexDirection: 'row',
    },
    iconButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: theme.colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        ...theme.shadows.small,
    },
    detailsContainer: {
        padding: theme.spacing.lg,
        marginTop: -20,
        backgroundColor: theme.colors.background,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    titleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: theme.spacing.sm,
    },
    category: {
        fontSize: 12,
        fontWeight: '600',
        color: theme.colors.primary,
        letterSpacing: 1,
        marginBottom: 4,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: theme.colors.text,
    },
    ratingRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: theme.spacing.md,
    },
    stars: {
        flexDirection: 'row',
        marginRight: 8,
    },
    ratingText: {
        fontSize: 14,
        color: theme.colors.primary,
        fontWeight: '600',
    },
    price: {
        fontSize: 22,
        fontWeight: '700',
        color: theme.colors.text,
    },
    divider: {
        height: 1,
        backgroundColor: theme.colors.border,
        marginVertical: theme.spacing.lg,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: theme.colors.text,
        marginBottom: theme.spacing.sm,
    },
    description: {
        fontSize: 14,
        color: theme.colors.textLight,
        lineHeight: 22,
        marginBottom: theme.spacing.lg,
    },
    variants: {
        marginBottom: theme.spacing.xl,
    },
    variantTitle: {
        fontSize: 14,
        fontWeight: '600',
        color: theme.colors.text,
        marginBottom: 10,
    },
    variantChips: {
        flexDirection: 'row',
    },
    chip: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: theme.colors.border,
        marginRight: 10,
    },
    chipActive: {
        borderColor: theme.colors.primary,
        backgroundColor: theme.colors.primary + '10',
    },
    chipText: {
        fontSize: 14,
        color: theme.colors.textLight,
    },
    chipTextActive: {
        color: theme.colors.primary,
        fontWeight: '600',
    },
    footer: {
        padding: theme.spacing.lg,
        paddingBottom: 30,
        backgroundColor: theme.colors.white,
        borderTopWidth: 1,
        borderTopColor: theme.colors.border,
    },
    addToCartButton: {
        backgroundColor: theme.colors.secondary,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        height: 56,
    },
    addToCartText: {
        color: theme.colors.white,
        fontSize: 16,
        fontWeight: '700',
    },
});

export default ProductDetailScreen;
