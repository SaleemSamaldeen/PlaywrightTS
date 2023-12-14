import { UIComponent } from "./uiComponent";

class TextField implements UIComponent {
    render(): void {
        console.log('render method from TextField Class');
    }
    handleEvent(): void {
        console.log('handleEvent method from TextField Class');
    }

}

class Button implements UIComponent {

    render(): void {
        console.log('render method from Button Class');
    }

    handleEvent(): void {
        console.log('handleEvent method from Button Class');
    }

}

class Checkbox implements UIComponent {
    render(): void {
        console.log('render method from Checkbox Class');
    }
    handleEvent(): void {
        console.log('handleEvent method from Checkbox Class');
    }
}

const checkBox = new Checkbox();
const textField = new TextField();
const button = new Button();

checkBox.handleEvent();
checkBox.render();
textField.handleEvent();
textField.render();
button.handleEvent();
button.render();


