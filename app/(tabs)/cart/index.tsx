import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const PRIMARY = '#23B6C7';
const PINK = '#E94B7B';
const BG = '#E6F3F7';

// تعريف نوع عنصر السلة
type CartItemType = {
  id: string;
  name: string;
  price: number;
  qty: number;
};

// بيانات افتراضية للسلة
const CART_ITEMS: CartItemType[] = [
  { id: '1', name: 'بنادول اكسترا', price: 12, qty: 2 },
  { id: '2', name: 'فيتامين سي 1000', price: 25, qty: 1 },
];

export default function CartScreen() {
  const total = CART_ITEMS.reduce((sum, item) => sum + item.price * item.qty, 0);

  const renderItem = ({ item }: { item: CartItemType }) => (
    <View style={styles.cartItem}>
      <Ionicons name="medkit-outline" size={28} color={PRIMARY} style={{ marginRight: 12 }} />
      <View style={{ flex: 1 }}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDetails}>
          {item.qty} × {item.price.toFixed(2)} ر.س
        </Text>
      </View>
      <Text style={styles.itemTotal}>{(item.price * item.qty).toFixed(2)} ر.س</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>سلة المشتريات</Text>
      {CART_ITEMS.length === 0 ? (
        <View style={styles.emptyBox}>
          <Ionicons name="cart-outline" size={60} color="#bbb" />
          <Text style={styles.emptyText}>سلتك فارغة</Text>
        </View>
      ) : (
        <>
          <FlatList
            data={CART_ITEMS}
            renderItem={renderItem}
            keyExtractor={(item: CartItemType) => item.id}
            contentContainerStyle={{ paddingBottom: 20 }}
          />
          <View style={styles.totalBox}>
            <Text style={styles.totalLabel}>الإجمالي:</Text>
            <Text style={styles.totalValue}>{total.toFixed(2)} ر.س</Text>
          </View>
          <TouchableOpacity style={styles.checkoutBtn}>
            <Text style={styles.checkoutText}>إتمام الشراء</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BG,
    padding: 18,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: PRIMARY,
    textAlign: 'center',
    marginBottom: 18,
    marginTop: 10,
    letterSpacing: 1,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 14,
    marginBottom: 12,
    elevation: 1,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 2,
  },
  itemDetails: {
    fontSize: 14,
    color: '#666',
  },
  itemTotal: {
    fontSize: 16,
    color: PRIMARY,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  totalBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 14,
    marginTop: 10,
    marginBottom: 8,
    elevation: 1,
  },
  totalLabel: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#222',
  },
  totalValue: {
    fontSize: 17,
    fontWeight: 'bold',
    color: PINK,
  },
  checkoutBtn: {
    backgroundColor: PINK,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 8,
  },
  checkoutText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  emptyBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#aaa',
    marginTop: 16,
  },
});