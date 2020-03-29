import {util, tidy, tensor2d, train, losses, linspace, sequential, layers} from '@tensorflow/tfjs';

declare const tf: {
    util: typeof util;
    tidy: typeof tidy;
    tensor2d: typeof tensor2d;
    train: typeof train;
    losses: typeof losses;
    linspace: typeof linspace;
    sequential: typeof sequential;
    layers: typeof layers;
};