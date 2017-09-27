import { AppBuilder } from './services/app-builder';
import { App } from './components/smart/app.component';
import './css/style.less';

const appBuilder = new AppBuilder();
appBuilder.build(new App(), document.getElementsByTagName('app')[0]);
