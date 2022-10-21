import * as ImagePicker from 'expo-image-picker';


//image upload
const pickImage = async () => {
  // No permissions request is necessary for launching the image library
    const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
    });


    if (!result.cancelled) {
        return result.uri
    }
};

const consultationService = {
    pickImage,
}

export default consultationService

