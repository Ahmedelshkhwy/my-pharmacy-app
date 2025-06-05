import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Text } from 'react-native';

const PRIMARY = '#23B6C7';
const PINK = '#E94B7B';
const BG = '#E6F3F7';

// بيانات تجريبية للعروض
const OFFERS = [
  {
    id: '1',
    title: 'خصم 20%',
    description: 'على جميع الفيتامينات',
    image: 'https://placehold.co/300x150?text=Offer1',
    validUntil: '2025-07-01'
  },
  {
    id: '2',
    title: 'اشتري 1 واحصل على 1 مجاناً',
    description: 'على منتجات العناية بالبشرة',
    image: 'https://placehold.co/300x150?text=Offer2',
    validUntil: '2025-07-15'
  },
  // يمكنك إضافة المزيد من العروض هنا
];

export default function OffersScreen() {
  const renderOffer = ({ item }) => (
    <TouchableOpacity style={styles.offerCard}>
      <Image source={{ uri: item.image }} style={styles.offerImage} />
      <View style={styles.offerContent}>
        <Text style={styles.offerTitle}>{item.title}</Text>
        <Text style={styles.offerDescription}>{item.description}</Text>
        <View style={styles.validUntil}>
          <Ionicons name="time-outline" size={16} color="#666" />
          <Text style={styles.validUntilText}>
            ساري حتى {new Date(item.validUntil).toLocaleDateString('ar-SA')}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>العروض المميزة</Text>
        <Ionicons name="pricetag" size={24} color={PRIMARY} />
      </View>
      <FlatList
        data={OFFERS}
        renderItem={renderOffer}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BG,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    gap: 10,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: PRIMARY,
  },
  list: {
    paddingBottom: 20,
  },
  offerCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  offerImage: {
    width: '100%',
    height: 150,
    backgroundColor: '#f0f0f0',
  },
  offerContent: {
    padding: 16,
  },
  offerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: PINK,
    marginBottom: 8,
  },
  offerDescription: {
    fontSize: 14,
    color: '#444',
    marginBottom: 12,
  },
  validUntil: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  validUntilText: {
    fontSize: 12,
    color: '#666',
  },
});