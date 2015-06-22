import Reflux from 'reflux';
import themeActions from '../actions/theme';

var themeStore = Reflux.createStore({
    listenables: [themeActions],
    data: {
      brightnessPercentage: 0,
      contrastPercentage: 0,      
      showOptions: false
    },
    onUploadTheme() {
      this.data.showOptions = true;
      this.trigger(this.data);
    },
    onSetContrast(value) {
      this.data.contrastPercentage = value;
      this.trigger(this.data);
    },
    onSetBrightness(value) {
      this.data.brightnessPercentage = value;
      this.trigger(this.data);
    },
    getInitialState() {
      return this.data;
    }
});

export default themeStore;