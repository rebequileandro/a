# from datetime import date

# sum = 1 + 2
# print(sum)
# print("show this in the console")

# sum = 1 + 2 # 3
# product = sum * 2
# print(product)

# print("Today's date is: " + str(date.today()))


# import sys
# print(sys.argv)
# print(sys.argv[0]) # program name
# print(sys.argv[1]) # first arg

# print("Welcome to the greeter program")
# name = input("Enter your name: ")
# print("Greetings " + name)


#calculadora
# print("calculator program")
# first_number = input("first number: ")
# second_number = input("second number: ")
# print(int(first_number) + int(second_number))

# print("1" + 2)

# format string
mass_percentage = "1/6"
print("On the Moon, you would weigh about %s of your weight on Earth." % mass_percentage)

print("On the Moon, you would weigh about {} of your weight on Earth.".format(mass_percentage))

print("""You are lighter on the {0}, because on the {0} you would weigh about {1} of your weight on Earth.""".format("Moon", mass_percentage))
print("""You are lighter on the {moon}, because on the {moon} you would weigh about {mass} of your weight on Earth.""".format(moon="Moon", mass=mass_percentage))