import React from 'react'
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

export const Pdf = () => {
    const styles = StyleSheet.create({
    
    }) 
  return (
    <Document>
        <Page size="A4" style={styles.page}>
        <View style={styles.section}>
            <Text>Section #1</Text>
        </View>
        <View style={styles.section}>
            <Text>Section #2</Text>
        </View>
        </Page>
  </Document>
  )
}
