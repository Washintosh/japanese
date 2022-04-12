import pandas as pd
japaneseDictionary = pd.read_excel(r"C:\Users\Washington\Documents\語彙.xlsx")
japaneseDictionary = japaneseDictionary.dropna(axis=0)
print(japaneseDictionary.head())
print(japaneseDictionary.count(axis=0))
japaneseDictionary.to_json("japaneseDictionary.json")
