/*import ImagePicker from 'expo-image-picker';
import { firebase } from '../../firebase/config';

export default function ControlScreen() {
const options = {
  title: 'Select Avatar',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

ImagePicker.showImagePicker(options, (response) => {
  console.log('Response = ', response);

  if (response.didCancel) {
    console.log('User cancelled image picker');
  } else if (response.error) {
    console.log('ImagePicker Error: ', response.error);
  } else {
    const uri = response.uri;
    this.setState({
      selectedPictureUri: uri,
    });
  }
});
const {imageName, uploadUri} = this.state;
firebase
  .storage()
  .ref(imageName)
  .putFile(uploadUri)
  .then((snapshot) => {
    //You can check the image is now uploaded in the storage bucket
    console.log(`${imageName} has been successfully uploaded.`);
  })
  .catch((e) => console.log('uploading image error => ', e));

}*/