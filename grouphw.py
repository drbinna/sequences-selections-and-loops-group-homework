# ============================================
# CSC 111 – Introduction to Computing
# Lab #: Sequences, Selections, Loops
# Student Name: Obinna  Amadi 
# Programming Buddy: Trenton Ashford, Milca 
# Z Number: Z00040959
# Date: 2025-10-01
# Instructor: Prof. Felicity M. Weed Jackson
# File Name: grouphw.py
# ============================================

# Description:
# This program demonstrates sequences, selections, and loops using
# a student grade calculator. It uses variables, if/else statements,
# and for/while loops.

# How it works:
# First, it calculates a student's average grade (sequence).
# Then, it determines the letter grade using conditionals (selection).
# Finally, it prints a pattern and a countdown using loops.

# Reflection:
# Using elif statements to create an interactive program (though outdated), and
# challenge was that it was tricky to organise my statements and what I found most interesting was connecting the code
#to one logic to make the program come alive.


# ============================================

# 1. SEQUENCE
print("1. SEQUENCE EXAMPLE")
grades = [82, 90, 88, 98, 92]
total = 0

for grade in grades:
    total += grade

average = total / len(grades)

# 2. SELECTION - Decision making with if/else
print("2. SELECTION EXAMPLE")
if average >= 90:
    grade = "A"
elif average >= 80:
    grade = "B"
elif average >= 70:
    grade = "C"
elif average >= 60:
    grade = "D"
else:
    grade = "F"
print(f"Letter Grade: {grade}\n")

# 3. Loops Example
print("3. ITERATION EXAMPLE")

# Pattern printing based on student's grade
letter_grade = grade  # Use the calculated letter grade
print("Pattern Example (Letter Grade Triangle)")
for i in range(1, 6):  # 5 rows
    print(letter_grade * i)

print()  # Blank Line for spacing

# Countdown based on average grade
print("Countdown Example (From Average):")
start = int(average)  # use whole number part of average
for num in range(start, 0, -10):  # count down by 10 
    print(num)
print("End of Countdown!\n")

