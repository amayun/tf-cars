import {render, show, metrics} from '@tensorflow/tfjs-vis';

declare const tfvis: {
    render: typeof render;
    show: typeof show;
    metrics: typeof metrics;
};
