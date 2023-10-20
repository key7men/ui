import { Application, IApplicationOptions } from '@pixi/app';

export function initPixi(options?: Partial<IApplicationOptions>): Application
{
    const application = new Application({
        resizeTo: window,
        background: 0x000000,
        antialias: true,
        ...options
    });

    document.body.appendChild(application.view as HTMLCanvasElement);

    (globalThis as any).__PIXI_APP__ = application;

    return application;
}
