import mmkvFlipper from 'rn-mmkv-storage-flipper';
import {MMKVLoader} from 'react-native-mmkv-storage';

const MMKV = new MMKVLoader()
  .withInstanceID('storage')
  .withEncryption()
  .initialize();

mmkvFlipper(MMKV);

export default MMKV;
