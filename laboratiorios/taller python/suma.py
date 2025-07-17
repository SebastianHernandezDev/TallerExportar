print("//////////////EJERCICIO 1 = SUMA /////////////////////////")
num= int(input("dame el primer numero: "))
num1= int(input("dame el segundo numero: "))

print("la suma de los dos numeros es: ", num + num1)

print("//////////////EJERCICIO 2 = PAR O IMPAR /////////////////////////")

nummay= int(input("dame un numero: "))

if nummay % 2 == 0 :
    print("el numero que digitaste es par. ")
else :
    print("el numero que digitaste es impar. ")

print("//////////////EJERCICIO 3  = MAYOR NUMERO/////////////////////////")

numMayor1= int(input("digita el primer numero: "))
numMayor2= int(input("digita el segudno numero: "))
numMayor3= int(input("digita el tercer numero: "))

if numMayor1 >= numMayor2 and numMayor1 >= numMayor3:
    mayor = numMayor1
elif numMayor2 >= numMayor1 and numMayor2 >= numMayor3:
    mayor = numMayor2
else:
    mayor = numMayor3

print(f"El número mayor es: {mayor}")

print("//////////////EJERCICIO 4  = TABLA MULTIPLICAR/////////////////////////")

NumeroTabla = int(input("Ingresa un número para mostrar su tabla de multiplicar (1–10): "))


for i in range(1, 11):
    print(f"{NumeroTabla} x {i} = {NumeroTabla * i}")

print("//////////////EJERCICIO 5  = CANTAR VOCALES/////////////////////////")


texto = input("Ingresa una palabra o frase: ")


contador = 0


for vocales in texto:
    if vocales.lower() in "aeiou":
        contador += 1

print(f"El texto ingresado tiene {contador} vocal(es).")

print("//////////////EJERCICIO 6 = NUMEROS DEL 1 AL N /////////////////////////")


N = int(input("Ingresa un número N: "))
i = 1
while i <= N:
    print(i)
    i += 1

print("//////////////EJERCICIO 7 = FACTORIAL /////////////////////////")


numerofAC = int(input("Ingresa un número para calcular su factorial: "))

factorial = 1

for i in range(1, numerofAC + 1):
    factorial *= i

print(f"El factorial de {numerofAC} es {factorial}")


print("//////////////EJERCICIO 8 = SUMA NUMEROS PARES /////////////////////////")

sum_pares = 0


for i in range(1, 101):
    if i % 2 == 0:
        sum_pares += i


print(f"La suma de los números pares del 1 al 100 es: {sum_pares}")

print("//////////////EJERCICIO 9 = ADIVINA EL NUMERO  /////////////////////////")

import random

num_secreto = random.randint(1, 10)

adivinado = False

print("Adivina el número secreto entre 1 y 10")

while not adivinado:
    intento = int(input("Tu intento: "))
    
    if intento < num_secreto:
        print("el numero esta muy bajo intenta de nuevo.")
    elif intento > num_secreto:
        print("el numero esta muy alto intenta de nuevo ")
    else:
        print("Adivinaste el número ")
        adivinado = True

print("//////////////EJERCICIO 10 = NUMERO PRIMO  /////////////////////////")


num_prim = int(input("Ingresa un número: "))

if num_prim < 2:
    print(f"{num_prim} no es primo.")
else:
    es_primo = True
    for i in range(2, num_prim):
        if num_prim % i == 0:
            es_primo = False
            break
    if es_primo:
        print(f"{num_prim} es un número primo.")
    else:
        print(f"{num_prim} no es primo.")

print("//////////////EJERCICIO 11 = AREA RECTANGULO  /////////////////////////")

def area_triangulo(base, altura):
    return (base * altura) / 2


base = float(input("Ingresa la base del triangulo: "))
altura = float(input("Ingresa la altura del triangulo: "))


area = area_triangulo(base, altura)
print(f"El área del triangulo es: {area}")

print("//////////////EJERCICIO 12 = AREA RECTANGULO  /////////////////////////")

def numero_mayo(a, b, c):
    if a >= b and a >= c:
        return a
    elif b >= a and b >= c:
        return b
    else:
        return c

n1 = float(input("Ingresa el primer número: "))
n2 = float(input("Ingresa el segundo número: "))
n3 = float(input("Ingresa el tercer número: "))

mayor = numero_mayo(n1, n2, n3)
print(f"El número mayor es: {mayor}")



print("//////////////EJERCICIO 13 = CONTAR PALABRAS  /////////////////////////")

def contar_pal(cadena):
    palabras = cadena.split() 
    return len(palabras)      


texto = input("Ingresa una frase o texto: ")

cantidad = contar_pal(texto)
print(f"La cantidad de palabras es: {cantidad}")

print("//////////////EJERCICIO 14 = SUMA DE UNA LISTA  /////////////////////////")

def sumar_lista(lista):
    suma = 0
    for numero in lista:
        suma += numero
    return suma

entrada = input("Escribe una lista de números separados por comas (ej: 3, 5, 7): ")
numeros = [int(x.strip()) for x in entrada.split(",")]
resultado = sumar_lista(numeros)
print(f"La suma de los números que escribiste es: {resultado}")

print("//////////////EJERCICIO 15 = Spalindromo /////////////////////////")

def es_palindromo(palabra):
    palabra = palabra.lower().replace(" ", "")
    if palabra == palabra[::-1]:
        return True
    else:
        return False

texto = input("Escribe una palabra o frase: ")

if es_palindromo(texto):
    print("¡Sí! Es un palíndromo.")
else:
    print("No es un palíndromo.")

print("//////////////EJERCICIO 16 = FIBANOCCI /////////////////////////")

def fibonacci(n):
    secuencia = []
    a, b = 0, 1
    for _ in range(n):
        secuencia.append(a)
        a, b = b, a + b
    return secuencia

cantidad = int(input("¿Cuántos números de Fibonacci quieres ver? "))
resultado = fibonacci(cantidad)
print("Secuencia de Fibonacci:")
print(resultado)

print("//////////////EJERCICIO 18 = FRECUENCIA DE LETRAS /////////////////////////")

palabraa = input("Escribe una palabra: ").lower()
frecuencia = {}

for letra in palabraa:
    if letra.isalpha():
        if letra in frecuencia:
            frecuencia[letra] += 1
        else:
            frecuencia[letra] = 1

print("Frecuencia de letras:")
for letra, cantidad in frecuencia.items():
    print(f"{letra}: {cantidad}")

print("//////////////EJERCICIO 19 = NUMERO PERFECTOS  /////////////////////////")

for numero in range(1, 1001):
    suma_divisores = 0
    for i in range(1, numero):
        if numero % i == 0:
            suma_divisores += i
    if suma_divisores == numero:
        print(numero)

print("//////////////EJERCICIO 20 = MENU INTERACTIVO  /////////////////////////")

while True:
    print("\nMenú de opciones:")
    print("1. Calcular el cuadrado de un número")
    print("2. Mostrar números pares entre dos valores")
    print("3. Salir del programa")

    opcion = input("Elige una opción (1-3): ")

    if opcion == "1":
        numero = int(input("Ingresa un número: "))
        print(f"El cuadrado de {numero} es {numero ** 2}")
    elif opcion == "2":
        inicio = int(input("Ingresa el primer valor: "))
        fin = int(input("Ingresa el segundo valor: "))
        print("Números pares en el rango:")
        for i in range(inicio, fin + 1):
            if i % 2 == 0:
                print(i, end=" ")
        print()
    elif opcion == "3":
        print("Saliendo del programa...")
        break
    else:
        print("Opción no válida. Intenta de nuevo.")

