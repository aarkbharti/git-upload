    # matrix transpose creation
row = int(input("Enter number of rows: "))
col = int(input("Enter number of columns: "))
matrix = []
for i in range (row):
    row = []
    for j in range(col):
        val = int(input (f"Enter value at [{i}][{j}]: "))
        row.append (val)
    matrix.append (row)
print (matrix)
transpose=[]
for i in range(col):
    for j in range (row) :
        transpose[i][j]=matrix[j][i]
print (transpose)
