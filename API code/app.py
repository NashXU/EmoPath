from flask import Flask, request, jsonify
import pandas as pd

app = Flask(__name__)

import pandas as pd

# 讀取xlsx檔案
xlsx_file = '2023_1216_Five Emotions Dictionaries.xlsx'
df = pd.read_excel(xlsx_file)

# 製作關鍵字字典
dictionary = {
    '1_Anger': [str(i).strip() for i in df['1_Anger'] if not pd.isna(i)],
    '2_Frustration': [str(i).strip() for i in df['2_Frustration'] if not pd.isna(i)],
    '3_Disappointment': [str(i).strip() for i in df['3_Disappointment '] if not pd.isna(i)],
    '4_Helplessness': [str(i).strip() for i in df['4_Helplessness'] if not pd.isna(i)],
    '5_Anxiety': [str(i).strip() for i in df['5_Anxiety '] if not pd.isna(i)]
    }


def find_matching_words_in_text(text, words):
    # 根據特定條件重新排序字詞列表
    ws = [word.lower() for word in words]
    ws.sort(key=lambda word: (-len(word.split()), -len(word)))
    
    # 初始化一個列表來存儲符合條件的字詞
    matching_words = []
    
    # 遍歷字詞列表，檢查每個字詞是否在文本中出現，並且不被已匹配的字詞所涵蓋
    for word in ws:
        if word in text and not any(word in matched_word for matched_word in matching_words):
            matching_words.append(word)
    
    # 計算符合條件的字詞數量
    count = len(matching_words)
    
    return count, matching_words

def process_emotions(text, dictionary):
    # 初始化一個字典來存儲每種情緒類別的結果
    emotion_results = {}
    
    # 遍歷情緒字典中的每個情緒類別和相關關鍵字列表
    for emotion, keywords in dictionary.items():
        # 使用原始函數計算每個情緒類別的結果
        count, matching_words = find_matching_words_in_text(text, keywords)
        
        # 將結果添加到情緒結果字典中
        emotion_results[emotion] = {
            'count': count,
            'matching_words': matching_words
        }
    
    return emotion_results

def find_most_common_emotion(emotion_results):
    max_count = 0  # 初始化最高count
    most_common_emotion = None  # 初始化最常見的情感
    
    for emotion, result in emotion_results.items():
        count = result['count']
        if count > max_count:
            max_count = count
            most_common_emotion = emotion
    
    recovery_strategy = ''
    if most_common_emotion == '1_Anger':
        recovery_strategy = 'Recovery Strategy of Consumer Anger: Active Listening + Compensation'
    elif most_common_emotion == '2_Frustration':
        recovery_strategy = 'Recovery Strategy of Consumer Frustration: Empathy + Retrospective Explanation'
    elif most_common_emotion == '3_Disappointment':
        recovery_strategy = 'Recovery Strategy of Consumer Disappointment: Appreciation + Retrospective and Prospective Explanation'
    elif most_common_emotion == '4_Helplessness':
        recovery_strategy = 'Recovery Strategy of Consumer Helplessness: Empathy + Prospective Explanation with Future-Promising (Certain) Words'
    elif most_common_emotion == '5_Anxiety':
        recovery_strategy = 'Recovery Strategy of Consumer Anxiety: Empathy + Prospective Explanation with Risk Reducing Words'
    
    emotion_scores = {emotion: result['count'] for emotion, result in emotion_results.items()}
    
    return (emotion_scores, recovery_strategy)

@app.route('/analyze', methods=['POST'])
def analyze_text():
    try:
        data = request.get_json()
        text = data['text']

        # 在這裡呼叫你的情感分析函數，獲取emotion_scores和recovery_strategy
        emotion_results = process_emotions(text, dictionary)
        emotion_scores, recovery_strategy = find_most_common_emotion(emotion_results)

        response = {
            'emotion_scores': emotion_scores,
            'recovery_strategy': recovery_strategy
        }

        return jsonify(response), 200

    except Exception as e:
        return str(e), 400

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)
