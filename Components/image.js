// ImageCard.js
import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const ImageCard = ({ title, description, imageUrl, imageStyle }) => {
  return (
    <Card style={styles.card}>
      <Card.Cover source={{ uri: imageUrl }} style={[styles.image, imageStyle]} />
      <Card.Content>
        <Title>{title}</Title>
        <Paragraph>{description}</Paragraph>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
  },
  image: {
    height: 200,
  },
});

export default ImageCard;
