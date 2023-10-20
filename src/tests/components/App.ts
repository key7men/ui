import { Container } from '@pixi/display';
import { initPixi } from '../utils/pixi';

export abstract class App
{
    protected view: Container;

    constructor()
    {
        const pixiApp = initPixi();

        this.view = new Container();

        pixiApp.stage.addChild(this.view);

        this.init();

        this.addSubscriptions();
    }

    private addSubscriptions()
    {
        window.addEventListener('resize', () => this.resize());
        window.addEventListener('deviceorientation', () => this.resize(), true);
        this.resize();
    }

    private resize(width = window.innerWidth, height = window.innerHeight)
    {
        this.view.x = width / 2;
        this.view.y = height / 2;
    }

    abstract init(): void;
}
