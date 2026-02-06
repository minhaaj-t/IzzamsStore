// Real pickle and Indian food images from Unsplash
export const FALLBACK_IMAGES = {
    hero: 'https://images.unsplash.com/photo-1601050638927-3d183b0ff6bb?auto=format&fit=crop&q=80&w=1920&h=1080',
    about: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=800&h=800',
    products: {
        lime: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&q=80&w=800&h=800',
        chili: 'https://images.unsplash.com/photo-1583119022894-919a68a3d0e3?auto=format&fit=crop&q=80&w=800&h=800',
        mixed: 'https://images.unsplash.com/photo-1601050638927-3d183b0ff6bb?auto=format&fit=crop&q=80&w=800&h=800',
        mango: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80&w=800&h=800',
        garlic: 'https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?auto=format&fit=crop&q=80&w=800&h=800',
        ginger: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&q=80&w=800&h=800',
        dates: 'https://images.unsplash.com/photo-1590165482129-1b8b27698780?auto=format&fit=crop&q=80&w=800&h=800',
        powder: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=800&h=800',
        default: 'https://images.unsplash.com/photo-1601050638927-3d183b0ff6bb?auto=format&fit=crop&q=80&w=800&h=800'
    }
};

// Get a fallback image based on product name
export const getProductImage = (productName = '', csvImageUrl = '') => {
    // If CSV has a valid image URL, try to use it
    if (csvImageUrl && csvImageUrl.startsWith('http')) {
        return csvImageUrl;
    }

    // Otherwise, match product name to fallback images
    const name = productName.toLowerCase();

    if (name.includes('lime') || name.includes('lemon') || name.includes('naranga')) {
        return FALLBACK_IMAGES.products.lime;
    }
    if (name.includes('chili') || name.includes('chilli') || name.includes('pepper')) {
        return FALLBACK_IMAGES.products.chili;
    }
    if (name.includes('mixed') || name.includes('vegetable')) {
        return FALLBACK_IMAGES.products.mixed;
    }
    if (name.includes('mango') || name.includes('manga')) {
        return FALLBACK_IMAGES.products.mango;
    }
    if (name.includes('garlic') || name.includes('vellulli')) {
        return FALLBACK_IMAGES.products.garlic;
    }
    if (name.includes('ginger') || name.includes('inji')) {
        return FALLBACK_IMAGES.products.ginger;
    }
    if (name.includes('date') || name.includes('dates') || name.includes('khajur')) {
        return FALLBACK_IMAGES.products.dates;
    }
    if (name.includes('powder') || name.includes('masala') || name.includes('spice')) {
        return FALLBACK_IMAGES.products.powder;
    }

    // Default fallback
    return FALLBACK_IMAGES.products.default;
};

// Handle image loading errors
export const handleImageError = (e, productName = '') => {
    e.target.src = getProductImage(productName, '');
    e.target.onerror = null; // Prevent infinite loop
};
