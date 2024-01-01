import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const App = () => {
  const [complaintText, setComplaintText] = useState('');
  const [emotions, setEmotions] = useState({
    Angry: 0,
    Frustration: 0,
    Disappointment: 0,
    Helplessness: 0,
    Anxiety: 0,
  });
  const [recommendation, setRecommendation] = useState('');
  const [responseTexts, setResponseTexts] = useState([]);
  const [apiError, setApiError] = useState(null); // 新增狀態追蹤 API 錯誤

  const handleAnalysis = async () => {
    const url = 'http://104.199.214.195:5001/analyze';
    const data = { text: complaintText };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.status === 200) {
        const result = await response.json();
        setEmotions({
          Angry: result.emotion_scores['1_Anger'],
          Frustration: result.emotion_scores['2_Frustration'],
          Disappointment: result.emotion_scores['3_Disappointment'],
          Helplessness: result.emotion_scores['4_Helplessness'],
          Anxiety: result.emotion_scores['5_Anxiety'],
        });
        setRecommendation(result.recovery_strategy);
        setApiError(null); // 清除錯誤信息
      } else {
        const errorResult = await response.text(); // 獲取錯誤信息
        setApiError(`Failed to connect to the API. Status code: ${response.status}, Response: ${errorResult}`);
      }
    } catch (error) {
      setApiError(`Error connecting to the API: ${error}`);
    }
  };

  const clearFields = () => {
    setComplaintText('');
    setEmotions({
      Angry: 0,
      Frustration: 0,
      Disappointment: 0,
      Helplessness: 0,
      Anxiety: 0,
    });
    setRecommendation('');
    setResponseTexts([]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Paste Customers' Complaints Texts here</Text>
      </View>
      <TextInput
        style={styles.input}
        multiline
        placeholder="Type the complaint here..."
        value={complaintText}
        onChangeText={setComplaintText}
      />
      <View style={styles.buttonContainer}>
        <Button title="Calculation and Diagnose" onPress={handleAnalysis} />
        <Button title="Clear" onPress={clearFields} color="red" />
      </View>
      <View style={styles.emotionsHeader}>
        <Text style={styles.emotionsHeaderText}>Negative Emotions</Text>
      </View>
      <View style={styles.table}>
        <View style={styles.tableHeader}>
          <Text style={styles.tableHeaderText}>Emotion</Text>
          <Text style={styles.tableHeaderText}>Score</Text>
        </View>
        {Object.entries(emotions).map(([emotion, score]) => (
          <View key={emotion} style={styles.tableRow}>
            <Text style={styles.tableCell}>{emotion}</Text>
            <Text style={styles.tableCell}>{score.toFixed(2)}</Text>
          </View>
        ))}
      </View>
      <View style={styles.recommendationHeader}>
        <Text style={styles.recommendationHeaderText}>Recommendation:</Text>
      </View>
      <Text style={styles.recommendationText}>{recommendation}</Text>
      {apiError && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{apiError}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#004d40',
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    marginVertical: 10,
    height: 100,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  emotionsHeader: {
    backgroundColor: '#e0f2f1',
    padding: 10,
    marginTop: 20,
  },
  emotionsHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00695c',
  },
  table: {
    borderWidth: 1,
    borderColor: '#ddd',
    marginTop: 10,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  tableHeaderText: {
    flex: 1,
    fontWeight: 'bold',
    padding: 10,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  tableCell: {
    flex: 1,
    padding: 10,
  },
  recommendationHeader: {
    marginTop: 20,
  },
  recommendationHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  recommendationText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#2e7d32',
  },
  errorContainer: {
    backgroundColor: '#ffcccb',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
  },
});

export default App;
