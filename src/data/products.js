export const products = [
    // Phones
    {
        id: 1,
        name: 'iPhone 15 Pro Max',
        category: 'Iphone',
        price: 34990000,
        oldPrice: 38990000,
        stock: 45,
        color: 'Titan Tự nhiên',
        rating: 5,
        reviews: 125,
        image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400',
        description: 'iPhone 15 Pro Max. Thiết kế titan bền bỉ. Chip A17 Pro. Nút Tác Vụ tùy chỉnh. Camera chính 48MP mạnh mẽ nhất từng có trên iPhone.'
    },
    {
        id: 2,
        name: 'iPhone 14 Pro',
        category: 'Iphone',
        price: 24990000,
        oldPrice: 27990000,
        stock: 12,
        color: 'Tím',
        rating: 4.8,
        reviews: 89,
        image: 'https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?w=400',
        description: 'iPhone 14 Pro. Chụp chi tiết ấn tượng với camera chính 48MP. Trải nghiệm iPhone theo cách hoàn toàn mới với Dynamic Island và Màn Hình Luôn Bật.'
    },
    {
        id: 3,
        name: 'iPhone 14 Plus',
        category: 'Iphone',
        price: 21990000,
        oldPrice: 24990000,
        stock: 0,
        outOfStock: true,
        color: 'Xanh dương',
        rating: 4.7,
        reviews: 200,
        image: 'https://images.unsplash.com/photo-1678652197831-2d180705cd2c?w=400',
        description: 'iPhone 14 Plus. Kích thước lớn hơn, pin trâu hơn.'
    },
    {
        id: 4,
        name: 'iPhone 13',
        category: 'Iphone',
        price: 16990000,
        oldPrice: 18990000,
        stock: 156,
        color: 'Hồng',
        rating: 4.9,
        reviews: 342,
        image: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=400',
        description: 'Hệ thống camera kép tiên tiến nhất từng có trên iPhone. Chip A15 Bionic thần tốc.'
    },

    // Laptops
    {
        id: 5,
        name: 'MacBook Pro M3 Max',
        category: 'Laptop',
        price: 45990000,
        oldPrice: 49990000,
        stock: 5,
        color: 'Đen không gian',
        rating: 5,
        reviews: 42,
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400',
        description: 'MacBook Pro 14 inch và 16 inch với chip M3, M3 Pro và M3 Max. Màn hình Liquid Retina XDR tuyệt đẹp.'
    },
    {
        id: 6,
        name: 'MacBook Air M2',
        category: 'Laptop',
        price: 24990000,
        oldPrice: 26990000,
        stock: 23,
        color: 'Midnight',
        rating: 4.8,
        reviews: 156,
        image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=400',
        description: 'MacBook Air được thiết kế lại hoàn toàn với chip M2 thế hệ mới. Hiệu năng cực đỉnh.'
    },
    {
        id: 7,
        name: 'Dell XPS 13',
        category: 'Laptop',
        price: 32990000,
        oldPrice: 35990000,
        stock: 8,
        color: 'Bạc',
        rating: 4.6,
        reviews: 34,
        image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400',
        description: 'Mỏng nhẹ, sang trọng và mạnh mẽ.'
    },

    // Audio
    {
        id: 8,
        name: 'AirPods Pro 2',
        category: 'Headphones',
        price: 5990000,
        oldPrice: 6990000,
        stock: 89,
        color: 'Trắng',
        rating: 4.9,
        reviews: 520,
        image: 'https://images.unsplash.com/photo-1622919429598-f2b1c4e7235b?w=400',
        description: 'Chủ động khử tiếng ồn hiệu quả hơn đến 2 lần. Chế độ Xuyên Âm thích ứng.'
    },
    {
        id: 9,
        name: 'Sony WH-1000XM5',
        category: 'Headphones',
        price: 8490000,
        oldPrice: 9490000,
        stock: 15,
        color: 'Đen',
        rating: 5,
        reviews: 156,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
        description: 'Tai nghe chống ồn hàng đầu thị trường với thiết kế mới.'
    },
    {
        id: 10,
        name: 'HomePod Mini',
        category: 'Speakers',
        price: 2990000,
        oldPrice: 3500000,
        stock: 42,
        color: 'Trắng',
        rating: 4.5,
        reviews: 45,
        image: 'https://images.unsplash.com/photo-1588647038165-27a3c3f9152b?w=400',
        description: 'Âm thanh 360 độ lấp đầy căn phòng. Trợ lý ảo Siri thông minh.'
    },

    // Accessories/Others
    {
        id: 11,
        name: 'Apple Watch Series 9',
        category: 'Clock',
        price: 9990000,
        oldPrice: 11990000,
        stock: 33,
        color: 'Đỏ',
        rating: 4.7,
        reviews: 56,
        image: 'https://images.unsplash.com/photo-1544117518-30df57809b09?w=400',
        description: 'Thông minh hơn. Sáng hơn. Mạnh mẽ hơn.'
    },
    {
        id: 12,
        name: 'iPad Pro M2 11"',
        category: 'Ipad',
        price: 21990000,
        oldPrice: 23990000,
        stock: 0,
        outOfStock: true,
        color: 'Xám không gian',
        rating: 5,
        reviews: 42,
        image: 'https://images.unsplash.com/photo-1544244015-0cd4b3ffc6b0?w=400',
        description: 'Hiệu năng iPad đỉnh cao nhất. Công nghệ màn hình tiên tiến.'
    },
    {
        id: 13,
        name: 'Gaming CoolMaster',
        category: 'Cooling',
        price: 990000,
        oldPrice: 1500000,
        stock: 10,
        color: 'RGB',
        rating: 4.3,
        reviews: 12,
        image: 'https://images.unsplash.com/photo-1588506183812-96da202a0b7a?w=300',
        description: 'Tản nhiệt khí hiệu năng cao cho PC Gaming.'
    }
];
