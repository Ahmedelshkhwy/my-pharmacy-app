import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
  Image,
  Alert,
} from 'react-native';

const PRIMARY = '#23B6C7'; // الأزرق الفاتح من الشعار
const PINK = '#E94B7B';    // الوردي من الشعار
const BG = '#E6F3F7';      // خلفية فاتحة

const PRODUCTS = [
  { id: '1', name: 'بنادول اكسترا', price: 12, image: 'https://placehold.co/100x100?text=بنادول' },
  { id: '2', name: 'أدفيل 200 ملجم', price: 15, image: 'https://placehold.co/100x100?text=أدفيل' },
  { id: '3', name: 'فيتامين سي 1000', price: 25, image: 'https://placehold.co/100x100?text=Vit+C' },
  { id: '4', name: 'زنك بلس', price: 22, image: 'https://placehold.co/100x100?text=Zinc+' },
  { id: '5', name: 'باراسيتامول', price: 10, image: 'https://placehold.co/100x100?text=باراسيتامول' },
  { id: '6', name: 'ديكلوفيناك جل', price: 18, image: 'https://placehold.co/100x100?text=ديكلوفيناك' },
  { id: '7', name: 'فيتامين د 5000', price: 30, image: 'https://placehold.co/100x100?text=Vit+D' },
  { id: '8', name: 'مكمل أوميغا 3', price: 35, image: 'https://placehold.co/100x100?text=Omega+3' },
  { id: '9', name: 'مرطب شفايف نيفيا', price: 14, image: 'https://placehold.co/100x100?text=Nivea' },
  { id: '10', name: 'شامبو هيد اند شولدرز', price: 28, image: 'https://placehold.co/100x100?text=Shampoo' },
  { id: '11', name: 'كريم بيبانثين', price: 32, image: 'https://placehold.co/100x100?text=Bepanthen' },
  { id: '12', name: 'مرهم فيوسيدين', price: 19, image: 'https://placehold.co/100x100?text=Fucidin' },
  { id: '13', name: 'مكمل كالسيوم', price: 27, image: 'https://placehold.co/100x100?text=Calcium' },
  { id: '14', name: 'غسول سيباميد', price: 36, image: 'https://placehold.co/100x100?text=Sebamed' },
  { id: '15', name: 'ديتول معقم', price: 16, image: 'https://placehold.co/100x100?text=Dettol' },
  { id: '16', name: 'كريم فيتامين E', price: 21, image: 'https://placehold.co/100x100?text=Vit+E' },
  { id: '17', name: 'مرطب افين', price: 38, image: 'https://placehold.co/100x100?text=Avene' },
  { id: '18', name: 'مكياج ريميل', price: 45, image: 'https://placehold.co/100x100?text=Rimmel' },
  { id: '19', name: 'واقي شمس لاروش', price: 55, image: 'https://placehold.co/100x100?text=LaRoche' },
  { id: '20', name: 'قطرة ريفريش للعين', price: 24, image: 'https://placehold.co/100x100?text=Refresh' },
];

export default function HomeScreen() {
  const [search, setSearch] = useState('');
  const [cart, setCart] = useState<string[]>([]);

  const handleAddToCart = (id: string, name: string) => {
    setCart([...cart, id]);
    Alert.alert('تمت الإضافة', `تمت إضافة "${name}" إلى السلة.`);
  };

  // فلترة المنتجات حسب البحث
  const filteredProducts = PRODUCTS.filter((item) =>
    item.name.includes(search)
  );

  // عرض كل صف فيه كارتين
  const renderRow = ({ item, index }: { item: typeof PRODUCTS[0]; index: number }) => {
    if (index % 2 !== 0) return null;
    const second = filteredProducts[index + 1];
    return (
      <View style={styles.cardsRow} key={item.id}>
        <ProductCard
          name={item.name}
          price={item.price}
          image={item.image}
          onAdd={() => handleAddToCart(item.id, item.name)}
        />
        {second ? (
          <ProductCard
            name={second.name}
            price={second.price}
            image={second.image}
            onAdd={() => handleAddToCart(second.id, second.name)}
          />
        ) : (
          <View style={{ flex: 1 }} />
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={PRIMARY} />
      {/* الهيدر */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>صيدليات الشافي</Text>
      </View>

      {/* اسم الشركة فوق شريط البحث */}
      <View style={styles.companyNameWrapper}>
        <Text style={styles.companyName}>ALSHAFI MEDICAL COMPANY</Text>
      </View>

      {/* شريط البحث */}
      <View style={styles.searchWrapper}>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={22} color="#888" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="ابحث عن الأدوية أو المنتجات"
            placeholderTextColor="#888"
            value={search}
            onChangeText={setSearch}
          />
          <TouchableOpacity style={styles.iconButton}>
            <MaterialIcons name="qr-code-scanner" size={22} color={PRIMARY} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="heart-outline" size={22} color={PRIMARY} />
          </TouchableOpacity>
        </View>
      </View>

      {/* الكروت */}
      <FlatList
        data={filteredProducts}
        renderItem={renderRow}
        keyExtractor={(_, idx) => idx.toString()}
        contentContainerStyle={styles.cardsList}
        showsVerticalScrollIndicator={false}
        numColumns={1}
      />

      {/* الفوتر */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2025 جميع الحقوق محفوظة لصيدليات الشافي</Text>
      </View>
    </SafeAreaView>
  );
}

// مكون الكارت الواحد
function ProductCard({
  name,
  price,
  image,
  onAdd,
}: {
  name: string;
  price: number;
  image: string;
  onAdd: () => void;
}) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.cardImg} />
      <Text style={styles.cardName}>{name}</Text>
      <Text style={styles.cardPrice}>{price.toFixed(2)} ر.س</Text>
      <TouchableOpacity style={styles.addBtn} onPress={onAdd}>
        <Ionicons name="cart-outline" size={18} color="#fff" style={{ marginRight: 6 }} />
        <Text style={styles.addBtnText}>إضافة للسلة</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: BG,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  header: {
    backgroundColor: PRIMARY,
    paddingVertical: 22,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.10,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 3 },
  },
  headerTitle: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
    letterSpacing: 1.2,
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Bold' : 'sans-serif',
  },
  companyNameWrapper: {
    alignItems: 'center',
    marginTop: 18,
    marginBottom: 6,
  },
  companyName: {
    color: PRIMARY,
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 2,
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Bold' : 'sans-serif',
  },
  searchWrapper: {
    alignItems: 'center',
    marginBottom: 18,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 18,
    paddingHorizontal: 14,
    paddingVertical: 10,
    width: '92%',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.10,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 17,
    color: '#222',
    paddingVertical: 6,
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'sans-serif',
  },
  iconButton: {
    marginLeft: 8,
    padding: 6,
    borderRadius: 10,
    backgroundColor: BG,
  },
  cardsList: {
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 80,
  },
  cardsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 14,
    marginHorizontal: 6,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.07,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  cardImg: {
    width: 70,
    height: 70,
    borderRadius: 12,
    marginBottom: 10,
    backgroundColor: '#e0e0e0',
  },
  cardName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#222',
    textAlign: 'center',
    marginBottom: 6,
    minHeight: 36,
  },
  cardPrice: {
    fontSize: 15,
    color: PRIMARY,
    fontWeight: '600',
    marginBottom: 10,
  },
  addBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: PINK,
    borderRadius: 10,
    paddingVertical: 7,
    paddingHorizontal: 18,
    marginTop: 4,
  },
  addBtnText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  footer: {
    backgroundColor: '#fff',
    paddingVertical: 14,
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#e0e0e0',
    marginTop: 8,
  },
  footerText: {
    color: '#888',
    fontSize: 13,
    fontWeight: '600',
  },
});