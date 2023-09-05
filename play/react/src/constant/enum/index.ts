import { StorageEnum } from './storage';
import { CssVarsEnum } from './style';

enum NodeEnvEnum {
    development = 'development',
    stage = 'stage',
    production = 'production',
}

enum ComponentSizeEnum {
    small = 'small',
    large = 'large',
    middle = 'middle',
}

export { NodeEnvEnum, ComponentSizeEnum, CssVarsEnum, StorageEnum };
