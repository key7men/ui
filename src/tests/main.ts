import { Text } from '@pixi/text';
import { Graphics } from '@pixi/graphics';
import { App } from './components/App';
import { ScrollBox } from '../ScrollBox';
import { defaultTextStyle } from '../utils/helpers/styles';
import { FancyButton } from '../FancyButton';

// eslint-disable-next-line no-new
new class Application extends App
{
    init()
    {
        const elementsWidth = 260;
        const elementsHeight = 40;
        const radius = 10;

        const items = [];

        for (let i = 0; i < 50; i++)
        {
            const button = new FancyButton({
                defaultView: new Graphics().beginFill(0xa5e24d).drawRoundedRect(0, 0, elementsWidth, elementsHeight, radius),
                hoverView: new Graphics().beginFill(0xfec230).drawRoundedRect(0, 0, elementsWidth, elementsHeight, radius),
                pressedView: new Graphics().beginFill(0xfe6048).drawRoundedRect(0, 0, elementsWidth, elementsHeight, radius),
                text: new Text(`Item ${i + 1}`, {
                    ...defaultTextStyle,
                    fill: 'white'
                })
            });

            button.anchor.set(0);
            button.onPress.connect(() => console.log('onPress'));

            items.push(button);
        }

        // Component usage !!!
        const scrollBox = new ScrollBox({
            background: 'gray',
            elementsMargin: 10,
            width: 300,
            height: 600,
            radius: 20,
            padding: 20,
            disableEasing: true
        });

        scrollBox.addItems(items);

        scrollBox.x = -scrollBox.width / 2;
        scrollBox.y = -scrollBox.height / 2;

        this.view.addChild(scrollBox);
    }
}();

