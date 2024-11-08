<!-- # Title: Why are Type Guards Necessary? Discuss Various Types of Type Guards and Their Use Cases. -->

## What are Type Guards in TypeScript?

Type Guards is a type checker layer. That's allow developers to work with union type effectively. Sometime type guard help typescript to infer the right type because sometime typescript can't infer the variable type in that time type guards helps typescript.

<h4>Why are Type Guards Necessary?</h4>

Without type guards handling union type will be more complex and error. Suppose I have a variable that's perform string or number type, In typescript if I use the variable typescript can't handle the variable type or giving sometime error. In this situation Type guards provide a straightforward way to narrow down types, ensuring operations you perform are safe and suited to the variable’s true type.

<h4>What type guard provide us</h4>

1. Improved Code Safety: Prevents errors by confirming types before operations.

2. Enhanced Readability: Makes the code clearer by specifying what types are expected.

3. Intelligent IntelliSense: Better autocompletion support by narrowing down type possibilities.

<h2>Types of Type Guards in TypeScript</h2>

There are several ways to implement type guards in TypeScript, each with different use cases. Here’s an overview of the most commonly used type guards:

### 1. typeof Type Guards

---

The typeof operator is a built-in JavaScript feature that checks primitive types such as string, number, and boolean. It’s ideal for simple type checks.

Example:

```tsx
function formatInput(input: string | number): number | string {
  if (typeof input === "string") {
    return input.toUpperCase();
  } else if (typeof input === "number") {
    return input ** 2;
  } else {
    return "Type unmatched";
  }
}

console.log(formatInput("hello"));
//Outputs: "HELLO"

console.log(formatInput(3));
// Outputs: "9"
```

### 2. instanceof Type Guards

---

instanceof is particularly useful for distinguishing between instances of classes, making it ideal for type-checking objects. It works well with custom classes and built-in classes like Array or Date.

Example:

```tsx
class Dog {
  bark() {
    console.log("Ghew Ghew!");
  }
}

class Cat {
  meow() {
    console.log("Meow Meow!");
  }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else if (animal instanceof Cat) {
    animal.meow();
  }
}

makeSound(new Dog());
// Outputs: "Ghew Ghew!"

makeSound(new Cat());
// Outputs: "Meow Meow!"
```

### 3. in Operator Type Guard

---

The in operator is particularly useful when working with objects and checking for the existence of specific properties. This type guard is valuable when working with union types involving objects.

Example:

```tsx
interface Square {
  sideLength: number;
}

interface Circle {
  radius: number;
}

function calculateArea(shape: Square | Circle) {
  if ("sideLength" in shape) {
    return shape.sideLength * shape.sideLength;
  } else if ("radius" in shape) {
    return Math.PI * shape.radius ** 2;
  } else {
    return "Shape unmatched!";
  }
}

console.log(calculateArea({ sideLength: 5 }));
// Outputs: 25

console.log(calculateArea({ radius: 3 }));
// Outputs: 28.27
```

### 4. User-Defined Type Guards

---

For more complex types, you can create custom type guard functions. These functions use the is keyword to define the return type, which can handle more intricate logic for type-checking.

Example:

```tsx
interface Fish {
  swim: () => void;
}

interface Bird {
  fly: () => void;
}

function isFish(animal: Fish | Bird): animal is Fish {
  return (animal as Fish).swim !== undefined;
}

function move(animal: Fish | Bird) {
  if (isFish(animal)) {
    animal.swim();
  } else {
    animal.fly();
  }
}

const fish: Fish = { swim: () => console.log("Swimming") };
const bird: Bird = { fly: () => console.log("Flying") };

move(fish);
// Outputs: "Swimming"

move(bird);
// Outputs: "Flying"
```

## Use Cases for Type Guards in TypeScript

- Handling Union Types: Type guards make it easier to work with union types by narrowing down possibilities.

- Avoiding Type Errors: They prevent type-related runtime errors by ensuring operations match the actual type.

- Implementing Polymorphism: Type guards let you achieve behavior-specific operations across different types, making code more versatile and powerful.

- Custom Logic for Complex Types: With user-defined guards, you can handle intricate type structures, ideal for sophisticated applications.

## Conclusion

Type guards are essential tools in TypeScript for building safer, more predictable, and readable code. By understanding and using typeof, instanceof, in, and custom type guards, you can handle complex types confidently and reduce potential bugs. Type guards make TypeScript a powerful ally in managing type-safe applications, ensuring your code runs smoothly across different scenarios.

<i>Embrace type guards, and you’ll find your TypeScript projects are more robust and maintainable, no matter how complex they become. Because type guards make typescript type checking and controlling more safer and efficient. </i>
