import csv

with open('../data/26-10-18-2.csv', 'rb') as f:
    reader = csv.reader(f, delimiter=';')
    for row in reader:
        print(', '.join(row))


