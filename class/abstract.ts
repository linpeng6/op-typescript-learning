abstract class Animal {
    abstract makeSound(): void;
    move(): void {
        console.log('roaming the earch...');
    }
}

class Dog extends Animal {
    makeSound(){
        console.log('汪汪汪');
    }
}