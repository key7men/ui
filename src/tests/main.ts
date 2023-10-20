import { Button } from '../Button';
import { Container } from '@pixi/display';
import { Text } from '@pixi/text';
import { Graphics } from '@pixi/graphics';
import { App } from './components/App';

// eslint-disable-next-line no-new
new class Application extends App
{
    init()
    {
        this.createElements();
    }

    private createElements()
    {
        const button = this.createButton();

        button.onPress.connect(() => console.log('onPress'));
    }

    private createButton(): Button
    {
        const text = new Text('Pixi 8');

        text.anchor.set(0.5);
        text.style = {
            fontSize: 100,
            fill: 0xffffff
        };

        const graphics = new Graphics()
            .beginFill(0xde3249)
            .drawRoundedRect(0, 0, text.width + 100, text.height + 20, 25);

        graphics.x = -graphics.width / 2;
        graphics.y = -graphics.height / 2;

        const buttonContainer = new Container();

        buttonContainer.addChild(graphics, text);

        this.view.addChild(buttonContainer);

        return new Button(this.view);
    }
}();

