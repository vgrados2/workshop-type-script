async function hello() {
    return 'hello-victor'
}

() => {
    return `victor`;
}

class SomeClass {

    public static SomeStaticValue: string = "hello";
    public someMemberValue: number = 15;
    private somePrivateValue: boolean = false;

    constructor () {
        SomeClass.SomeStaticValue = SomeClass.getGoodbye();
        this.someMemberValue = this.getFortyTwo();
        this.somePrivateValue = this.getTrue();
    }

    public static getGoodbye(): string {
        return "goodbye!";
    }

    public getFortyTwo(): number {
        return 42;
    }

    private getTrue(): boolean {
        return true;
    }

}
// DETAIL: La modificación del prototipo de la clase está dentro de un IIFE .
// Las variables miembro se definen dentro de la function clase principal.
// Las propiedades estáticas se agregan directamente al objeto de clase, mientras que las propiedades de instancia se agregan al prototipo.
